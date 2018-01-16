import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {BlackLight, Gray, LightWhite, SubTextColor, White} from "../Utils/Colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

class DeckListItem extends React.Component{

    render(){
        const { deckName, noOfCards} = this.props;

        return(
        <View style={Style.container}>
            <MaterialCommunityIcons name='cards' size={50} color={White}/>
            <Text style={Style.header}>
                {deckName}
            </Text>
            <Text style={Style.subText}>
                {`${noOfCards} cards`}
            </Text>
        </View>
        );
    }
}

const Style = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BlackLight,
        padding: 16,
        margin: 5,
        minHeight: 200,
    },
    header:{
        fontSize: 30,
        marginTop: 16,
        color: White,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    subText:{
        color: SubTextColor
    }
});

export default DeckListItem;