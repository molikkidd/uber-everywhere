import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from './store';

// setup redux 
export default function App() {
  return (
    // add provider wrapper around App view
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Lets Build Uber!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
