import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    AppRegistry, Image, Text, View, TextInput, StyleSheet, Button, Alert,
    Platform,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
    TouchableWithoutFeedback, ScrollView, FlatList, SectionList, ListView, ActivityIndicator
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import { setInterval } from 'core-js/library/web/timers';




// import { deflateRaw } from 'zlib';

class Greeting extends Component {
    render() {
        return (
            <Text> Hello {this.props.name} ! </Text>
        );
    }
}

class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = { showText: true };

        //Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                };
            });
        }, 1000);
    }

    render() {

        let display = this.state.showText ? this.props.text : ' ';
        return (
            <View>
                <Text style={styles.blinkFont}>{display}</Text>
            </View>
        );
    }
}

// HandlingTextInput

class PizzaTranslator extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={{ padding: 10 }}>

                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({ text })}
                />
                <Text style={{ padding: 10, fontSize: 42 }}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>

            </View>
        );
    }
}

//Button press Action like Button Basics

class ButtonBasics extends Component {

    constructor(props) {
        super(props);
    }

    _onPressButton() {

        Alert.alert('You tapped the button!')
    }

    render() {

        return (

            <View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title={this.props.name}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="This looks great!"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="OK!"
                        color="#841584"
                    />
                </View>
            </View>

        );
    }
}

class TouchableButtion extends Component {
    constructor(props) {
        super(props);
    }

    _onPressButton() {

        Alert.alert('You tapped the button!')
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }

    render() {

        return (

            <View>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>

                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>

                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableWithoutFeedback
                    onPress={this._onPressButton}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable with Long Press</Text>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}


class FlatListExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>

        );
    }
}


class SelectListtExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        { title: 'D', data: ['Devin'] },
                        { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>

        );
    }
}


async function getMoviesFromApi() {
    try {
        let response = await fetch(
            'https://facebook.github.io/react-native/movies.json'
        );
        let responseJson = await response.json();
        return responseJson.movies;
    } catch (error) {
        console.error(error);
    }
}


// ApI calling

class GetMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.setState({
            isLoading: false,
            dataSource: getMoviesFromApi(),
        }, function () {
            // do something with new state
        });

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
                />
            </View>
        );
    }
}

class GetMovieList extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    _onPressButton() {

        Alert.alert('You tapped the button!')
        this.props.navigation('GetMovieList');
    }

    componentDidMount() {
        //   return fetch('http://beta2xampr.azurewebsites.net/api/ActivityParticipation/GetActivityMessagesWithLastReadTime', {
        return fetch('https://facebook.github.io/react-native/movies.json')
            //    {


            //     method: 'POST',
            //     headers: {
            //       Accept: 'application/json',
            //       'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         completeActivityGuid: 'activity_no_parent_cd7586a3-1378-4609-906a-5de0f6e61b50',
            //         lastChatReadTime: 0,
            //         userGuid: '2ea5c116-87dd-4b82-8253-adadb7309b63'
            //     }),
            //   })
            .then(
            (response) => response.json()
            )
            .then((responseJson) => {

                // alert(responseJson)

                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.movies),
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                alert(error)
                console.error(error);
            });
    }

    render() {

        // const { navigate } = this.props.navigation;

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
                />

                <Button
                    title="Go to Xampr's profile" onPress={this._onPressButton}
                // onPress={() =>
                //     navigate('GetMovieList', { name: 'Jane' })
                // }
                />
            </View>
        );
    }
}


export default class ImageWithGreetings extends Component {



    render() {



        let pic = {
            // url: 'http://xamprdemo.cloudapp.net/assets/layouts/layout/img/x_logo.png'
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (

            //height: 300 

            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: 'powderblue' }}>

                        <Text>
                            <Image source={pic} style={styles.imgStyle} />
                            Welcome REact Natviue</Text>

                    </View>

                    <View style={{ flex: 2, backgroundColor: 'skyblue' }}>

                        <Greeting name='Veronika' />
                        <Greeting name='Ramesh' />
                        <Greeting name='Kumar' />

                    </View>

                    <View style={{ flex: 6, backgroundColor: 'steelblue' }}>

                        <Blink text="Welcome to Xampr React Native" />
                        <PizzaTranslator />
                        <ButtonBasics name="Save" />
                    </View>

                    <View style={{ flex: 6, backgroundColor: 'skyblue' }}>
                        <TouchableButtion />
                        <FlatListExample />

                        <SelectListtExample />

                    </View>

                    <GetMovieList />
                    {/* <GetMovies/>rr */}

                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        {/* Try setting `flexDirection` to `column`. */}

                        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />

                    </View>

                    {/* Try setting `justifyContent` to `center`.
                 Try setting `flexDirection` to `row`. */}

                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        {/* Try setting `alignItems` to 'flex-start'
                 Try setting `justifyContent` to `flex-end`.
                 Try setting `flexDirection` to `row`. */}

                        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}



const App = StackNavigator({
    GetMovieList: { screen: GetMovieList },
    FlatListExample: { screen: FlatListExample },
});


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
    }
});
