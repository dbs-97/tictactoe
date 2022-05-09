import { useState } from "react"
import { Pressable, Text, View } from "react-native"
import { Button, StyleSheet, TouchableOpacity } from "react-native"



export default props => {
  const [squareState, setSquareState] = useState("-") 

  function checkWinner(){
    let b = props.board

    if(
    (b[0] + b[1] + b[2])%3 || 
    (b[3] + b[4] + b[5])%3 || 
    (b[6] + b[7] + b[8])%3 || 
    
    (b[0] + b[3] + b[6])%3 || 
    (b[1] + b[4] + b[7])%3 || 
    (b[2] + b[5] + b[8])%3 || 

    (b[1] + b[4] + b[8])%3 || 
    (b[6] + b[4] + b[2])%3
    ){
      console.warn("Winner!")
      return(-1) //TODO 1. stablish a logic to return the winner 2. break the logic into smaller steps
    }
    return(0)

  }

  function onPress(){
    setSquareState(props.player) //TODO map 0,1 to X and O in the button title
    props.setPlayer( ((props.player+1)%2) )
    props.board[props.index] = props.player
    props.setBoard(props.board)
    console.log(props.board)
    checkWinner()
    
  }

  return(   
      <TouchableOpacity
        style={style.button}
        onPress={onPress}
        //title={squareState}
        index={props.index}>
          <Text style={style.text}>
          {squareState}
          </Text>
        </TouchableOpacity>


  ) 
  }

  const style=StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 19,
    elevation: 0,
    backgroundColor: 'grey',
    height: 30,
    height: 30,
  
    
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  })