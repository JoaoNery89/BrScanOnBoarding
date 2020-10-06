import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Swiper from 'react-native-swiper'

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content'/>
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    </>
  )
}

export default App