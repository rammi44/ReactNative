import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    Image, Text, View, TextInput, StyleSheet, Button, Alert,
    Platform,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
    TouchableWithoutFeedback, StackNavigator
} from 'react-native';


export default class ImageWithGreetings extends Component {

    render() {

        let pic = {
            // url: 'http://xamprdemo.cloudapp.net/assets/layouts/layout/img/x_logo.png'
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (

            //height: 300 


            <View style={{ flex: 2 }}>


                {/* <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
                    <Text>
                        Welcome REact Natviue</Text>
                </View> */}

                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <View style={{ width: 50, height: 50 }}>
                        <Image source={pic} style={styles.imgStyle} />
                    </View>

                    <View>
                        <TextInput placeholder="Enter Title" />

                        <TextInput placeholder="Enter Title" />
                    </View>
                </View >

                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    imgStyle: {
        width: 100, height: 100, backgroundColor: 'powderblue'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    blinkFont: {
        backgroundColor: '#F5FCCF',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red'
    },
    buttonContainer: {
        margin: 5
    },
    alternativeLayoutButtonContainer: {
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    button: {
        marginBottom: 20,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    buttonText: {
        padding: 10,
        color: 'white'
    },
    AddButton: {

    }

});