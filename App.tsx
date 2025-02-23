
import { Provider } from 'react-redux';
import BottomTabNavigator from './src/appRoute/BottomTabNavigator';
import store from './src/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LinkingOptions } from '@react-navigation/native';

const App: React.FC = () => {
  const queryClient = new QueryClient();

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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BottomTabNavigator />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
