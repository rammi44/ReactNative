import React from 'react';

import ReactNative, {
  Text,
  StyleSheet,
} from 'react-native';

import cssVar from '../Lib/cssVar';
 
class _Text extends React.Component {

  constructor(props) {
    super(props);
  } 

  setNativeProps() {
    var text = this.refs.text;
    text.setNativeProps.apply(text, arguments);
  }

  render() {
    return (
      <Text
        {...this.props}
        ref="text"
        style={[styles.text, this.props.style || {}]}
      />
    );
  }
}
 

// _Text.propTypes = {

//   propTypes: Text.propTypes
// };

var styles = StyleSheet.create({
  text: {
    fontFamily: cssVar('fontRegular'),
    color: cssVar('black'),
    fontSize: 8                           // make it small to know it's not set
  }
});

export default _Text;
