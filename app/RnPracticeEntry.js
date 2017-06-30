/**
 * Created by yangyang on 2017/6/23.
 */
import React, {Component} from 'react'
import {
  View,
  BackHandler,
  ToastAndroid,
} from 'react-native'
import {Provider} from 'react-redux'
import {store} from './store/persistStore'
import App from './components/App'

export default class RnPracticeEntry extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid)
  }

  _onBackAndroid = () => {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      return false
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
    return true
  }

  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}