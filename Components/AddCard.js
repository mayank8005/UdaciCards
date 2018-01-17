import React from 'react';
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {BackgroundColor, Black, BlackLight, InputBackground, White} from "../Utils/Colors";

class AddCard extends React.Component{

    state={
        question: '',
        answer: ''
    };

    render(){
        return(
            <KeyboardAvoidingView behavior='padding' style={Style.container}>
                <View style={Style.subContainer}>
                    <Text style={Style.header}>
                        ADD CARD
                    </Text>
                    <TextInput
                        value = {this.state.question}
                        onChangeText = {(question) => this.setState({question})}
                        style = {Style.Input}
                        underlineColorAndroid = {White}
                        placeholder = "Question"
                    />
                    <TextInput
                        value = {this.state.answer}
                        onChangeText = {(answer) => this.setState({answer})}
                        style = {Style.Input}
                        underlineColorAndroid = {White}
                        placeholder = "Answer"
                    />
                    <TouchableOpacity style={Style.btn}>
                        <Text style={Style.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const Style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: BackgroundColor
    },
    subContainer:{
        minHeight: 100,
        padding: 16,
        margin: 5,
        backgroundColor: BlackLight,
        borderColor: White,
        borderWidth: 3,
    },
    header: {
        fontSize: 35,
        color: White,
        marginBottom: 16,
        fontWeight: 'bold'
    },
    Input: {
        padding: 16,
        color: White,
        elevation: 10,
        backgroundColor: InputBackground,
        fontWeight: 'bold'
    },
    btn: {
        padding: 9,
        marginTop: 15,
        width: 100,
        borderColor: White,
        borderWidth: 2,
    },
    btnText:{
        color: White,
        fontWeight: 'bold'
    }
});

export default AddCard;
