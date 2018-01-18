import React from 'react';
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {BackgroundColor, Black, BlackLight, InputBackground, White} from "../Utils/Colors";
import {connect} from 'react-redux'
import {addCardCreator} from '../actions/index'
import {addCardToStorage} from '../Utils/API'

class AddCard extends React.Component{

    state={
        question: '',
        answer: ''
    };

    //when add card data is submitted
    handleAddCard = ()=>{
        const {question, answer} = this.state;
        const deck = this.props.deck;
        if(question&&answer){
            //adding card to deck
            deck.cards = [...deck.cards, {question, answer}];
            addCardToStorage(deck).then(()=>{
                this.props.navigation.navigate('deck', {deckId:this.props.deckId});
            });
            this.setState({question:'', answer:''});
        }
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
                        maxLength = {30}
                    />
                    <TextInput
                        value = {this.state.answer}
                        onChangeText = {(answer) => this.setState({answer})}
                        style = {Style.Input}
                        underlineColorAndroid = {White}
                        placeholder = "Answer"
                        maxLength = {30}
                    />
                    <TouchableOpacity style={Style.btn} onPress={this.handleAddCard}>
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

function mapStateToProps(state, props){
    const deckId = props.navigation.state.params.deckId;
    return{
        deck: state.decks.find((deck)=>(deck.id===deckId)),
        deckId: deckId
    }
}


export default connect(mapStateToProps)(AddCard);
