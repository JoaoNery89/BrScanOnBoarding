import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Swiper from 'react-native-swiper'

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <Swiper style={{flex:1}} /*showsButtons={true}*/>
        <View style={{}}>
          <Text style={{fontFamily:'IMBPlexSans'}}>Hello Swiper</Text>
        </View>
        <View style={{}}>
          <Text style={{}}>Beautiful</Text>
        </View>
        <View style={{}}>
          <Text style={{}}>And simple</Text>
        </View>
      </Swiper>
    </>
  )
}

export default App