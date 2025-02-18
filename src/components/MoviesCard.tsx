// @ts-nocheck
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromShortlist } from '../redux/movieSlice';
import Ionicons from "react-native-vector-icons/Ionicons";

const MoviesCard = ({ data, onPress, shortlist }: any) => {
    const dispatch = useDispatch();

    const handleRemoveFromShortlist = () => {
        Alert.alert(
            "Remove Movie",
            "Are you sure you want to remove this movie from your shortlist?",
            [
                {
                    text: "Cancel",
                    style: "cancel", 
                },
                {
                    text: "Remove",
                    onPress: () => dispatch(removeFromShortlist(data?.imdbID)), 
                    style: "destructive", 
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.movieContainer}>
            <Image
                source={{ uri: data.Poster }}
                style={styles.posterImage}
                resizeMode="cover"
            />
            <View style={{ paddingVertical: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                <View>
                    <Text style={styles.movieTitle}>{data.Title}</Text>
                    <Text>Year: {data.Year}</Text>
                    <Text>IMDb ID: {data.imdbID}</Text>
                </View>
                <View>
                    {shortlist ? (
                        <TouchableOpacity onPress={handleRemoveFromShortlist}>
                            <Ionicons name={"trash"} size={20} color={"gray"} />
                        </TouchableOpacity>
                    ) : null}
                </View>
            </View>
            {!shortlist ? <Button title="Add to Shortlist" onPress={onPress} /> : null}
        </View>
    );
};

export default MoviesCard;

const styles = StyleSheet.create({
    movieContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '90%',
    },
    posterImage: {
        height: 150,
        width: '100%', 
        borderRadius: 5, 
    },
    movieTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});