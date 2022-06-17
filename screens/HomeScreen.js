import { StyleSheet, Text, View , SafeAreaView, Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
// add tailwind

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        {/* Add Uber Image */}
      <View style={tw`p-5`}>
          <Image
          style={{width: 100,
                height: 100,
                resizeMode: "contain"
            }}
          source={{
              uri: "https://links.papareact.com/gzs"
          }}/>
          <GooglePlacesAutocomplete
          placeholder='Where From?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          styles={{
            container: {flex: 0,},
            textInput: {fontSize: 18,}
          }}
          onPress={(data, details = null) => {
            // add location coordinates to redux store
              dispatch(
                setOrigin({
                location: details.geometry.location,
                description: data.description
               })
              );

              dispatch(
                setDestination(null)
              );
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en", 
          }}
          />
          <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})