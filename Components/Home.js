import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Some Text for my home screen?</Text>
    <Button
      onPress={() => navigation.navigate('Game')}
      title="Start Game"
    />
  </View>
)

export default Home
