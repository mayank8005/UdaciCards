import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {BackgroundColor, BlackLight, SubTextColor, White} from "../Utils/Colors";
import {Ionicons} from '@expo/vector-icons';

class Quiz extends React.Component{
    state={

    };

    render(){
        return(
            <View style={Style.container}>
                <View style={Style.subContainer}>
                    <View style={Style.qnaView}>
                        <Text style={Style.qna}>
                            {`Question: what's my name`}
                        </Text>
                        <TouchableOpacity>
                            <Text style={Style.qnaBtn}>Answer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.btnView}>
                        <TouchableOpacity style={Style.btn}>
                            <Ionicons
                                name='md-happy'
                                size={30}
                                color={White}
                            />
                            <Text style={Style.btnText}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.btn}>
                            <Ionicons
                                name='md-sad'
                                size={30}
                                color={White}
                            />
                            <Text style={Style.btnText}>Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
        minHeight: 360,
        padding: 16,
        margin: 5,
        backgroundColor: BlackLight,
        borderColor: White,
        borderWidth: 3,
    },
    qnaView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    qna: {
        fontSize: 30,
        color: White,
        marginBottom: 16,
        fontWeight: 'bold'
    },
    qnaBtn: {
        fontSize:15,
        color: SubTextColor
    },
    btnView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    btn:{
        borderWidth: 2,
        borderColor: White,
        width: 150,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        justifyContent: 'center',
    },
    btnText: {
        color: White,
        padding: 10
    }
});

export default Quiz;