import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BackgroundColor, Black, BlackLight, SubTextColor, White} from "../Utils/Colors";
import {Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import {connect} from 'react-redux'

class Deck extends React.Component{

    onAddCard = (deckId)=>(()=>{
        this.props.navigation.navigate('addCard', {deckId});
    });

    StartQuiz = (deckId, cards)=>(()=>{
        console.log('run');
        this.props.navigation.navigate('quiz', {deckId, cards});
    });

    render(){
        const {title, id, cards} = this.props.deck;

        return(
            <View style={Style.container}>
                <View style={Style.subContainer}>
                    <View style={Style.headerView}>
                        <Text style={Style.header}>{title}</Text>
                        <Text style={Style.headerSubtitle}>{`No of cards : ${cards.length}`}</Text>
                        <MaterialCommunityIcons name='cards-playing-outline' size={50} color={White} />
                    </View>
                    <View style={Style.btnView}>
                        <TouchableOpacity style={Style.btn} onPress={this.onAddCard(id)}>
                            <Entypo name='add-to-list' size={30} color={White} />
                            <Text style={Style.btnText}>Add Cards</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.btn} onPress={this.StartQuiz(id, cards)}>
                            <MaterialCommunityIcons name='play-box-outline' size={30} color={White}/>
                            <Text style={Style.btnText}>Take Quiz!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BackgroundColor,
    },
    subContainer: {
        flex: 1,
        backgroundColor: BlackLight,
        borderRadius: 15,
        margin: 20,
        marginTop: 30,
        marginBottom: 30
    },
    headerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: BackgroundColor,
        borderBottomWidth: 4
    },
    header: {
        fontSize: 36,
        color: White,
        marginBottom: 16,
        fontWeight: 'bold',
        opacity: 0.7
    },
    headerSubtitle: {
        color : SubTextColor,
        fontWeight: 'bold',
        opacity: 0.7,
        fontSize: 20,
        marginBottom: 20
    },
    btnView: {
        flex: 2,
        justifyContent: 'center',
        marginBottom: 25,
        alignItems: 'center'
    },
    btn: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 5,
        borderColor: White,
        borderWidth: 2,
        paddingRight: 30,
        paddingLeft: 30,
        margin: 15
    },
    btnText: {
        color: White,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10
    }
});

function mapStateToProps(store, props){
    const deckId = props.navigation.state.params.deckId;
    return{
        deck: store.decks.find((deck)=>(deck.id===deckId))
    }
}

export default connect(mapStateToProps)(Deck);