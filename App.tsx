
import { Provider } from 'react-redux';
import BottomTabNavigator from './src/appRoute/BottomTabNavigator';
import store from './src/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <BottomTabNavigator />
      </QueryClientProvider>
   </Provider>
  );
};

export default App;
