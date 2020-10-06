import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Swiper from 'react-native-swiper'

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <Swiper style={} showsButtons={true}>
        <View style={}>
          <Text style={}>Hello Swiper</Text>
        </View>
        <View style={}>
          <Text style={}>Beautiful</Text>
        </View>
        <View style={}>
          <Text style={}>And simple</Text>
        </View>
      </Swiper>
    </>
  )
}

export default App