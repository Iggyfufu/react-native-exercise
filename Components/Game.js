import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { StackNavigator } from 'react-navigation'

import emojis from '../utils/emojis'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#AAA',
    justifyContent: 'center',
  },
})

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emojis: [],
      randomQuestion: 0,
      score: 0,
      guess: '',
    }
  }

  componentDidMount() {
    this.restartGame()
  }

  restartGame = () => {
    const emojisArr = emojis.slice()
    const randomQuestion = this.pickRandomQuestion(emojisArr)
    this.setState({ emojis: emojisArr, randomQuestion, score: 0 })
  }

  pickRandomQuestion = arr => Math.floor(Math.random() * arr.length)

  handleChange = (guess) => {
    this.setState({ guess })
  }

  handlePress = () => {
    console.log(this.state.guess)
    this.setState({ guess: '' })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>SCORE: {`${this.state.score}`}</Text>
        <Text>
          {
          this.state.emojis.length && this.state.emojis[this.state.randomQuestion].question
          }
        </Text>
        <TextInput
          onChangeText={guess => this.handleChange(guess)}
          value={this.state.guess}
          placeholder="GUESS THE PHRASE!"
        />
        <Button
          onPress={() => this.handlePress()}
          title="Make Guess!"
        />
        <Button
          onPress={() => this.restartGame()}
          title="Restart Game"
        />
      </View>
    )
  }
}
