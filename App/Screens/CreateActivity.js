import React from 'react';
import {
  View, Text, Alert,
  StyleSheet, Image
} from 'react-native';


// import Locale from '../Locale';


import Header from '../Components/Header';

import TextInput from '../Components/TextInput';

import ActivityIcon from '../Components/ActivityIcon';

// import Button from '../Components/Button';

import NextButton from '../Components/NextButton';

import DateTimePicker from '../Components/DateTimePicker';

import Location from '../Components/Location';

// import PostActions from '../Actions/PostActions';

// import KeyboardListener from '../Mixins/KeyboardListener';

// import AddSpinnerLoader from '../Extensions/AddSpinnerLoader';


class CreateActivity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        backgroundColor:"rgba(231,76,60,1)"

    };
  }


  onSubmitButton() {

    Alert.alert('You tapped the button!')

    Alert(this.state.content);

  }


  render() {

    let pic = {
      // url: 'http://xamprdemo.cloudapp.net/assets/layouts/layout/img/x_logo.png'
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (

      <View style={styles.mainCnt}>

        <Header headerText='New Forum' style={styles.controlBaackground}  />

        <View style={styles.container} >

          <ActivityIcon />

          {/* center content */}
          <View style={styles.center} >
            <TextInput ref="content"
              placeholder={'Forum Title(max:75 characters)'}
              keyboardType="default"
              multiline={false}
              autoFocus={true}
              style={styles.input}
              enablesReturnKeyAutomatically={true}
              returnKeyType='done'
            />
          </View>

        </View>


        <TextInput ref="content"
          placeholder={'Write description about your forum ...'}
          keyboardType="default"
          multiline={false}
          autoFocus={true}
          style={styles.input}
          enablesReturnKeyAutomatically={true}
          returnKeyType='done'
        />

        <View style={styles.cntrow} >

          <Location style={styles.controlBaackground} />
          <DateTimePicker style={styles.controlBaackground}  />

        </View>

        {/* <Button type='blue' style={styles.button} onPress={this.onSubmitButton}>
          {'submit'}
        </Button> */}

        <NextButton NextIcon buttonColor="rgba(231,76,60,1)" />

      </View>
    );
  }


}


// var i18n = Locale.key('CreateActivity', {
//   placeholder: 'What do you have to say for yourself?',
//   submit: 'Submit',
// });


const styles = StyleSheet.create({
  center: {
    flex: 5,
  },

  container: {

    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  },

  cntrow: {
    flexDirection: 'row'
  },
  mainCnt: {
    flex: 1,
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  input:{
    backgroundColor:'#fff'
  },
  controlBaackground:{
    backgroundColor:'rgba(231,76,60,1)'
  }
  
});

// CreatePost = AddSpinnerLoader(CreatePost);

export default CreateActivity;
