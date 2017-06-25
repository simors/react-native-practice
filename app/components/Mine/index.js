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

class Mine extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: '我的'
  }

  render() {
    return (
      <View>
        <Text>mine page</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mine);