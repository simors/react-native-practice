/**
 * Created by yangyang on 2017/6/23.
 */
import React, {Component} from 'react'
import {
  View,
  BackHandler,
} from 'react-native'
import {Provider} from 'react-redux'
import {store} from './store/persistStore'
import App from './components/App'

export default class RnPracticeEntry extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return false
    })
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}