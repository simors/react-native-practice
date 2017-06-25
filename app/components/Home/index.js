/**
 * Created by yangyang on 2017/6/24.
 */
import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: '首页'
  }

  render() {
    return (
      <View>
        <Text>main page</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)