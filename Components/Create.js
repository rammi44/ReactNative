

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, StackNavigator
} from 'react-native';

// import DynamicText from './Text';

import TextInput from './TextInput';

// import Locale from '../Assets/Locale';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/* <DynamicText text='RameshKumar Welocme World' /> */}

                <TextInput ref="content"
                    placeholder={'enter text'}
                    keyboardType="default"
                    multiline={true}
                    autoFocus={true}
                    style={styles.input}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='done'
                    // onChange={(event) => this.state.content = event.nativeEvent.text}
                />

                {/* <Text>Welcome World</Text> */}

            </View>
        );
    }
}
 


// var i18n = Locale.key('CreatePost', {
//     placeholder: 'What do you have to say for yourself?',
//     submit: 'Submit',
//   });
  
  

  var styles = StyleSheet.create({
    flex: {
      flex: 1
    },
    input: {
      flex: 1,
      fontSize: 16,
      backgroundColor: 'white',
      padding: 20,
      textAlignVertical: 'top'
    },
    button: {
      // width: 150
    },
    footer: {
      padding: 10,
      flexDirection: 'row'
    }
  });
  