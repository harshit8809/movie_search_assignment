
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../api/movieApi';
import { addToShortlist } from '../redux/movieSlice';
import MoviesCard from '../components/MoviesCard';
import NotFound from '../components/NotFound';
import CustomButton from '../components/CustomButton';

const MovieListScreen = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [year, setYear] = useState('');
    const dispatch = useDispatch();

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['movie', movieTitle, year],
        queryFn: () => fetchMovie(movieTitle, year),
        enabled: false,
    });

    const handleSearch = () => {
        if (!movieTitle) {
            Alert.alert('Error', 'Please enter both movie title and year.');
            return;
        }
        
        refetch();
    };

    const handleShortlist = () => {
        if (data && data.Title) {
            dispatch(addToShortlist(data));
            Alert.alert('Success', 'Movie added to shortlist!');
            
        } else {
            Alert.alert('Error', 'No movie found to shortlist.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Text style={styles.title}>Search your Movies / Series</Text>
            </View>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter movie to search"
                    value={movieTitle}
                    onChangeText={setMovieTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Year"
                    value={year}
                    onChangeText={setYear}
                    keyboardType="numeric"
                />
                <CustomButton btnTitle="Search" onPress={handleSearch} />
            </View>

            {isLoading && <Text>Loading...</Text>}
            {error && <Text>Error: {error.message}</Text>}
            {data && data.Response === 'True' ? (
                <MoviesCard data={data} onPress ={handleShortlist}/>
            ):(data && data.Response === 'False' ?<NotFound data={data}/> :null)
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    searchContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    formContainer: {
        width: '90%',
        marginTop: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    movieTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MovieListScreen;

