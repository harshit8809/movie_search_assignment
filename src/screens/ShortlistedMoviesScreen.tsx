import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import MoviesCard from '../components/MoviesCard';
import EmptyList from '../components/EmaptyList';

const ShortlistedMoviesScreen = () => {
    const shortlistedMovies = useSelector((state: RootState) => state.movie.shortlistedMovies);

    return (
        <>
        {shortlistedMovies.length === 0 ? 
<EmptyList  />      : 
        <FlatList
                data={shortlistedMovies}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <MoviesCard data={item} shortlist={true} />
                    </View>
                )}
            />}
        </>
    )
}

export default ShortlistedMoviesScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // padding: 10,
    },
})