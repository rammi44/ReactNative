import React from 'react';

import {
    Image, View,
    StyleSheet,
} from 'react-native';

class _ActivityIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = { iconUrl: '' };

    }

    render() {

        let pic = {
            // url: 'http://xamprdemo.cloudapp.net/assets/layouts/layout/img/x_logo.png'
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (

            <View style={styles.left}>

                <Image source={require('../Lib/assets/TaskActivity.png')} style={styles.imgStyle} />

                {/*  <Image
                    source={pic}
                    style={styles.thumbnail} /> */}

            </View >

        );
    }
}

const styles = StyleSheet.create({

    imgStyle: {
        width: 60, height: 60, borderRadius: 8,
        backgroundColor: 'rgba(231,76,60,0.1)',
    },
    left: {
        flex: 1,
    },
});

export default _ActivityIcon;
