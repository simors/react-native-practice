/**
 * Created by yangyang on 2017/6/24.
 */
import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {requestPosition} from '../../actions/configActions'
import {selectLocation} from '../../selector/configSelector'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: '首页'
  }

  locationBtnPress() {
    this.props.requestPosition({})
  }

  jumpToWebView() {
    let {navigate} = this.props.navigation
    navigate('WebViewer')
  }

  renderLocation() {
    let location = this.props.location
    if (!location) {
      return <View/>
    }
    return (
      <View style={{marginTop: 20}}>
        <Text>{location.address}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>main page</Text>
        <View style={styles.btnView}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                            onPress={() => {this.locationBtnPress()}}>
            <Text style={{color: 'white'}}>地理位置</Text>
          </TouchableOpacity>
        </View>
        {this.renderLocation()}
        <View style={styles.btnView}>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                            onPress={() => {this.jumpToWebView()}}>
            <Text style={{color: 'white'}}>打开网页</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    location: selectLocation(state)
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestPosition,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnView: {
    width: 100,
    height: 50,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: 'red'
  }
})