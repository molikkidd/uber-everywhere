import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setDestination, setOrigin } from '../slices/navSlice';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Zao Shang Hao</Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete
                placeholder='Where to?'
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                styles={toInputBoxStyles}
                fetchDetails={true}
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en", 
                  }}
                  returnKeyType={"search"}
                  onPress={(data, details = null) => {
                    // add location coordinates to redux store        
                      dispatch(
                        setDestination({
                        location: details.geometry.location,
                        description: data.description,
                         })
                      );
                      navigation.navigate("RideOptionsCard");
                  }}
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})