// // @ts-nocheck

// import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';


// const MoviesDetails = ({ route }: any) => {
//     console.log("PramasData->", route.params)
//     const data = route.params || {}
//     return (
//         <ScrollView style={{flex: 1}}>
//         <View style={styles.container}>
//             <View style={{}}>
//                 <Image
//                     source={{ uri: data?.Poster || 'https://via.placeholder.com/300' }}
//                     style={styles.posterImage}
//                     resizeMode="stretch"
//                 />
//                 <View style={{ position: "absolute", bottom: 10, left: 10, flexDirection: "row", justifyContent: "space-between", width: "95%", alignItems: "center" }}>
//                     <View>
//                         <Text style={{ fontSize: 20, color: "#FFF", fontWeight: "500" }}>{data?.Title} ({data?.Year})</Text>
//                     </View>
//                     <View style={{ flexDirection: "row", alignItems: "center" }}>
//                         <FontAwesome name="imdb" color="yellow" size={30} />
//                         <Text style={{ fontSize: 16, color: "#FFF", fontWeight: "500", marginLeft: 10 }}>{data?.imdbRating}/10</Text>
//                     </View>

//                 </View>
//             </View>
//         </View>
//      </ScrollView>
//     )
// }

// export default MoviesDetails

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10,
//     },
//     posterImage: {
//         flex: 1,
//         height: "70%",
//         width: '100%',
//         borderRadius: 10,
//     },
// })

// @ts-nocheck
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface MovieDetailsProps {
    route: {
        params: {
            Poster?: string;
            Title?: string;
            Year?: string;
            imdbRating?: string;
        };
    };
}

const MoviesDetails: React.FC<MovieDetailsProps> = ({ route }) => {
    const data = route.params || {};

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: data?.Poster || 'https://via.placeholder.com/300' }}
                        style={styles.posterImage}
                        resizeMode="stretch"
                    />
                    <View style={styles.overlay}>
                        <Text style={styles.title}>
                            {data?.Title} ({data?.Year})
                        </Text>
                        <View style={styles.ratingContainer}>
                            <FontAwesome name="imdb" color="yellow" size={30} />
                            <Text style={styles.ratingText}>{data?.imdbRating}/10</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                    <Text>Directed By:-</Text>
                    <Text>{data?.Director}</Text>
                </View>

                <View style={{ height: 1, backgroundColor: "gray", width: "100%", alignSelf: "center" }}></View>
                <View style={{
                    backgroundColor: "#FFF", shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10
                }}>
                    <Text style={{ textAlign: 'justify'}}><Text style={{fontSize: 15, fontWeight: "500",}}>Plot :- </Text>{data?.Plot}</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                    <Text>Writen By:-</Text>
                    <Text>{data?.Writer}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                    <Text>Genre:-</Text>
                    <Text>{data?.Genre}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                    <Text>Language:-</Text>
                    <Text>{data?.Language}</Text>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                    <Text>Metascore:-</Text>
                    <Text>{data?.Metascore}</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                    <Text>BoxOffice:-</Text>
                    <Text>{data?.BoxOffice}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                    <Text>imdbVotes:-</Text>
                    <Text>{data?.imdbVotes}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default MoviesDetails;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, // Ensures the ScrollView expands to fill the screen
    },
    container: {
        flex: 1,
        padding: 10,
    },
    imageContainer: {
        position: 'relative', // Ensures the overlay is positioned correctly
    },
    posterImage: {
        height: 400, // Set a fixed height for the image
        width: '100%',
        borderRadius: 10,
        opacity: 0.8, // Reduced opacity for the overlay
    },
    overlay: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10, // Ensures the overlay doesn't overflow
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '500',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: '500',
        marginLeft: 10,
    },
});