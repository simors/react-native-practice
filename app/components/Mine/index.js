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
import Symbol from 'es6-symbol'
import {requestDomain} from '../../actions/configActions'
import {selectDomain} from '../../selector/configSelector'
import CommonTextInput from '../common/Input/CommonTextInput'
import {em, normalizeW, normalizeH, normalizeBorder} from '../../util/Responsive'

const form = Symbol('testForm')
const testInput = {
  formKey: form,
  stateKey: Symbol('testInput'),
  type: "testInput",
  checkValid: (data) => {
    if (data && data.text && data.text.length > 3) {
      return {isVal: true, errMsg: '验证通过'}
    }
    return {isVal: false, errMsg: '输入异常，必须大于3个字符'}
  },
}

class Mine extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: '我的'
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(()=>{
      this.props.requestDomain({times: 1})
    })
  }

  render() {
    return (
      <View>
        <Text>mine page</Text>
        <Text>Domain: {this.props.domain}</Text>
        <View style={{height: normalizeH(59)}}>
          <CommonTextInput {...testInput}
                           containerStyle={styles.titleContainerStyle}
                           inputStyle={styles.titleInputStyle}/>
        </View>
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

const styles = StyleSheet.create({
  titleContainerStyle: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomWidth: 0,
  },
  titleInputStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    color: '#5a5a5a',
    paddingLeft: normalizeW(10),
  },
})