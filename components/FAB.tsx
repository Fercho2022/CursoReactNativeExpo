import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'


interface Props{
    label:string;
    position?: 'left' | 'right'; //position of the FAB

    //methods
    onPress: () => void;
    onLongPress: () => void;

}
export default function FAB({ label, onPress, onLongPress, position='right' }: Props) {
  return (
     <Pressable 
        style={[styles.floatingButton, 
            position==='right' ? styles.PositionRight : styles.PositionLeft]}    
         onPress={onPress}
          onLongPress={onLongPress}
          >
            <Text style={{color:'white',fontSize:20}}>{label}</Text>
          </Pressable>
  )
}

const styles = StyleSheet.create({
    floatingButton: {
    position: 'absolute',
    bottom: 30,
    
    backgroundColor: '#65558F',
    borderRadius: 15,
    padding: 20,
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  PositionRight:{
    right: 30,
  },
      
  PositionLeft:{
    left: 30,
  }
});