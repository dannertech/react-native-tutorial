import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


export default class Home extends Component{
    render(){
        return (
            <Text style={styles.description}>Search for Houses to Buy!</Text>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
        marginTop: 65
    }
})