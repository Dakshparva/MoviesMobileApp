
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/appNavigation';
// import * as Progress from 'react-native-progress';

export default function App() {
  return (
    <>
      <AppNavigation/>
    {/* <Progress.Circle size={30} indeterminate={true} /> */}
    </>
    
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
