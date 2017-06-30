/**
 * Created by yangyang on 2017/6/30.
 */
import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  WebView,
} from 'react-native'

export default class WebViewer extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: '网页'
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView style={{flex: 1}} source={{uri: 'http://www.baidu.com'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})