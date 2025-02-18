import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({btnTitle, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{fontSize: 16, color: "#FFF"}}>{btnTitle}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 30,
        backgroundColor: "#000",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})