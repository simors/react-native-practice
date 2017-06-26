/**
 * Created by yangyang on 2017/6/24.
 */
import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  InteractionManager,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {requestDomain} from '../../actions/configActions'
import {selectDomain} from '../../selector/configSelector'

class Mine extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: '我的'
  }

  componentDidMount() {
    console.log('mine mount')
    InteractionManager.runAfterInteractions(()=>{
      this.props.requestDomain({times: 1})
    })
  }

  render() {
    return (
      <View>
        <Text>mine page</Text>
        <Text>Domain: {this.props.domain}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    domain: selectDomain(state)
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestDomain,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Mine);