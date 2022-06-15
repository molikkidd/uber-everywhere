import { StyleSheet, Text, View , SafeAreaView, Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
// add tailwind

const HomeScreen = () => {
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
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})