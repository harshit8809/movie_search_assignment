import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NotFound = ({data}: any) => {
    console.log("DataNot Found_>", data)
  return (
    <View style={styles.container}>
        <View style={{marginTop: 40, width: "80%", height: 50, backgroundColor: "#FFF", alignItems: "center", justifyContent: "center", borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,}}>
      <Text>{data?.Error ?? "Something went wrong"}</Text>
      </View>
    </View>
  )
}

export default NotFound


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',        
        width: "100%",
    },
})