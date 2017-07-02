/**
 * Created by yangyang on 2016/12/3.
 */
import React, {Component} from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { FormInput } from 'react-native-elements'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {inputFormInitialize, inputFormChanging} from '../../../actions/inputFormActions'
import {getInputData} from '../../../selector/inputFormSelector'
import {em, normalizeW, normalizeH, normalizeBorder} from '../../../util/Responsive'

const PAGE_WIDTH=Dimensions.get('window').width

class CommonTextInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showClear: false,
    }
  }

  componentDidMount() {
    let formInfo = {
      formKey: this.props.formKey,
      stateKey: this.props.stateKey,
      type: this.props.type,
      initValue: {text: this.props.initValue},
      checkValid: this.props.checkValid || this.validInput
    }
    this.props.inputFormInitialize(formInfo)

    if (formInfo.initValue && formInfo.initValue.text && formInfo.initValue.text.length > 0) {
      this.setState({showClear: true})
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if(this.props.initValue != nextProps.initValue) {
      this.inputChange(nextProps.initValue)
    }
  }

  validInput(data) {
    if (data && data.text && data.text.length > 0) {
      return {isVal: true, errMsg: '验证通过'}
    }
    return {isVal: false, errMsg: '输入有误'}
  }

  inputChange(text) {
    let inputForm = {
      formKey: this.props.formKey,
      stateKey: this.props.stateKey,
      data: {text}
    }
    this.props.inputFormChanging(inputForm)

    if (text && text.length > 0) {
      this.setState({showClear: true})
    } else {
      this.setState({showClear: false})
    }
  }

  renderClearBtn() {
    if (this.state.showClear && this.props.showClear) {
      return (
        <View style={[styles.defaultClearBtnStyle, this.props.clearBtnStyle]}>
          <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => this.clearInput()}>
            {/*<Image style={{width: 25, height: 25}} source={require('../../../assets/images/delete.png')} />*/}
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View />
      )
    }
  }

  clearInput() {
    let inputForm = {
      formKey: this.props.formKey,
      stateKey: this.props.stateKey,
      data: {text: ''}
    }
    this.props.inputFormChanging(inputForm)
    this.setState({showClear: false})
  }

  render() {
    return (
      <View style={[styles.container, this.props.outerContainerStyle]}>
        <FormInput
          textInputRef={this.props.textInputRef}
          editable={this.props.editable}
          onChangeText={(text) => this.inputChange(text)}
          autoFocus={this.props.autoFocus}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          maxLength={this.props.maxLength}
          underlineColorAndroid="transparent"
          value={this.props.data}
          containerStyle={[styles.defaultContainerStyle, this.props.containerStyle]}
          inputStyle={[styles.defaultInputStyle, this.props.inputStyle]}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize='none'
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}
        />
        {this.renderClearBtn()}
      </View>
    )
  }
}

CommonTextInput.defaultProps = {
  placeholder: '请输入文字',
  placeholderTextColor: '#E1E1E1',
  maxLength: 16,
  autoFocus: false,
  editable: true,
  initValue: "",
  containerStyle: {flex: 1},
  inputStyle: {flex: 1},
  clearBtnStyle: {},
  showClear: true,
  autoCorrect: true,
  keyboardType: 'default',
  secureTextEntry: false,
}

const mapStateToProps = (state, ownProps) => {
  let inputData = getInputData(state, ownProps.formKey, ownProps.stateKey)
  return {
    data: inputData.text
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  inputFormInitialize,
  inputFormChanging,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CommonTextInput)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: normalizeBorder(),
    borderColor: '#E9E9E9',
    backgroundColor: '#F3F3F3',
  },
  defaultContainerStyle: {
    flex: 1,
    paddingLeft: normalizeW(17),
    paddingRight: normalizeW(10),
    borderBottomWidth: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  defaultInputStyle: {
    flex: 1,
    padding: 0,
    paddingLeft: normalizeW(0),
    paddingRight: normalizeW(0),
    fontSize: em(17),
    color: '#B2B2B2',
    textAlignVertical: 'center',
  },
  defaultClearBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: normalizeW(15),
  },
})