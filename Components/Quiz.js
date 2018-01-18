import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {BackgroundColor, BlackLight, SubTextColor, White} from "../Utils/Colors";
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {NavigationActions} from 'react-navigation';
import {setLocalNotification, clearLocalNotifications} from "../helper/notifications";

class Quiz extends React.Component{
    state={
        ansMode: false,
        cards: null,
        noOfCards: 0,
        solution: false,
        currentQuestion: 0,
        correct: 0,
    };

    componentWillMount(){
        //initializing variables
        const cards = this.props.navigation.state.params.cards;
        const noOfCards = cards.length;
        this.setState({cards, noOfCards, currentQuestion: 1, solution: (noOfCards===0)});
    }

    //when correct button is pressed
    handleCorrect = ()=>{
      this.setState((state=>({
          currentQuestion: state.currentQuestion + 1,
          correct: state.correct + 1,
          ansMode: false,
          solution: (state.currentQuestion===state.noOfCards),
      })));
    };

    //when incorrect is pressed
    handleIncorrect = ()=>{
        this.setState((state=>({
            currentQuestion: state.currentQuestion + 1,
            ansMode: false,
            solution: (state.currentQuestion===state.noOfCards),
        })));
    };

    // will toggle question mode and answer mode
    toggleQAMode =()=>{
        if(this.state.ansMode)
            this.setState({ansMode:false});
        else
            this.setState({ansMode:true});
    };

    //when user want to restart the quiz
    retry =()=>{
      this.setState((state)=>({
          ansMode: false,
          cards: state.cards,
          noOfCards: state.noOfCards,
          solution: state.noOfCards===0,
          currentQuestion: 1,
          correct: 0,
      }));
    };

    //navigation to home page
    goHome=()=>{
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'home'})
            ]
        });
        this.props.navigation.dispatch(resetAction);
    };

    render(){
        const {ansMode, cards, currentQuestion, solution, noOfCards, correct} = this.state;

        if(solution){
            //clearing notification
            clearLocalNotifications().then(setLocalNotification());
            return(
                <View style={Style.container}>
                    <View style={Style.subContainer}>
                        <Text style={Style.solText}>
                            Congratulations, you have successfully completed the quiz
                        </Text>
                        <Text style={Style.solText}>
                            {noOfCards===0?'No cards saved please save any card to play the quiz'
                                :`Your Score: ${((correct/noOfCards)*100).toPrecision(3)}%`}
                        </Text>
                        <TouchableOpacity style={Style.btn} onPress={this.retry}>
                            <MaterialCommunityIcons
                                name='restart'
                                size={30}
                                color={White}
                            />
                            <Text style={Style.btnText}>Retry !</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.btn} onPress={this.goHome}>
                            <Ionicons
                                name='md-home'
                                size={30}
                                color={White}
                            />
                            <Text style={Style.btnText}>Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        const ques = cards[currentQuestion-1].question;     //current question
        const ans = cards[currentQuestion-1].answer;        //current answer

        return(
            <View style={Style.container}>
                <View style={Style.subContainer}>
                    <View style={Style.qnaView}>
                        <Text style={Style.qMeter}>{`${currentQuestion}/${noOfCards}`}</Text>
                        <Text style={Style.qna}>
                            {ansMode?(`Answer: ${ans}`):(`Question: ${ques}`)}
                        </Text>
                        <TouchableOpacity onPress={this.toggleQAMode}>
                            <Text style={Style.qnaBtn}>{ansMode?'show question':'show answer'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.btnView}>
                        <TouchableOpacity style={Style.btn} onPress={this.handleCorrect}>
                            <Ionicons
                                name='md-happy'
                                size={30}
                                color={White}
                            />
                            <Text style={Style.btnText}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.btn} onPress={this.handleIncorrect}>
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
        minHeight: 400,
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
    qMeter: {
        color: SubTextColor,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
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
    },
    solText:{
        color: White,
        fontSize: 35,
        fontWeight: 'bold'
    },
});

export default Quiz;