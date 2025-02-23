// @ts-nocheck
import { Provider } from 'react-redux';
import BottomTabNavigator from './src/appRoute/BottomTabNavigator';
import store from './src/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Linking } from 'react-native';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    const handleDeepLink = (event: { url: string }) => {
      console.log('Deep link received:', event.url);
    };
    Linking.addEventListener('url', handleDeepLink);
    
    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
          <BottomTabNavigator />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;


