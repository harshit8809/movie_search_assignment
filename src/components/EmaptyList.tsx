import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EmptyList = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/empaty.jpg')} 
                style={styles.image} 
            />
            <Text style={styles.text}>No items available</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: "contain",
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: '#888',
    },
});

export default EmptyList;