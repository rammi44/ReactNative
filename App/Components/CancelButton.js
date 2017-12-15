import React from 'react';
import { StyleSheet, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';


class _CancelButton extends React.Component {

    constructor(props) {
        super(props);
    }

    _canCelIconClicked() {
        // It return datetime in utc format

        Alert.alert('cancel button clicked');
    };


    render() {

        return (
 
                <Icon name="cross" style={styles.IconColor} size={30} onPress={this._canCelIconClicked}>
                </Icon>

        );
    }
};


const styles = StyleSheet.create({
    IconColor: {
        color: '#FFFF',
    },
});

export default _CancelButton;
