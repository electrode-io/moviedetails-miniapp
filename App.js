/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import App from './src/app'
const PropTypes = require('prop-types');

export default class MovieDetailsMiniApp extends Component {
  static propTypes = {
    payload: PropTypes.string,
  }

  constructor (props) {
    super(props)
  }

  render () {
    console.log(`Payload: ${this.props.payload}`)
    return (
      <View style={styles.container}>
        {<App movie={this.props.payload}/>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})