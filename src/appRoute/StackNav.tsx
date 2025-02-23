// @ts-nocheck

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieListScreen from '../screens/MovieListScreen';
import MoviesDetails from '../screens/MoviesDetails';

const Stack = createNativeStackNavigator();

const MoviesStackNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="MovieList">
            <Stack.Screen name="MovieList" component={MovieListScreen} options={{ title: 'Movies' }} />
            <Stack.Screen name="MoviesDetails" component={MoviesDetails} options={{ title: 'Movie Details' }} />
        </Stack.Navigator>
    );
};

export default MoviesStackNavigator;
