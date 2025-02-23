// @ts-nocheck
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieListScreen from '../screens/MovieListScreen';
import ShortlistedMoviesScreen from '../screens/ShortlistedMoviesScreen';
import MoviesStackNavigator from './StackNav';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {

    const linking: LinkingOptions<ReactNavigation.RootParamList> = {
        prefixes: ['myapp://', 'https://myapp.com'],
        config: {
          screens: {
            Movies: {
              screens: {
                MovieList: 'movies',
                MoviesDetails: 'movies/:id',
              },
            },
            Shortlist: 'shortlist',
          },
        },
      };

    return (
        <NavigationContainer linking={linking}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName: string;

                        if (route.name === 'Movies') {
                            iconName = 'film-outline';
                        } else if (route.name === 'Shortlist') {
                            iconName = 'heart-outline';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#007AFF',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { backgroundColor: '#fff' },
                })}
            >
                <Tab.Screen name="Movies" component={MoviesStackNavigator} />
                <Tab.Screen name="Shortlist" component={ShortlistedMoviesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;
