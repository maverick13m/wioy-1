import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class TransactionScreen extends React.Component{

    render(){
        return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Issue or Return</Text>
            <TouchableOpacity
            style={style.button}
            >
            <Text>SCAN QR CODE</Text>
            </TouchableOpacity>

        </View>     
        )

    }

}

const style= StyleSheet.create({
    
})


