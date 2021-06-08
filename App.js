import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home/Home';

class App extends React.Component {
  


  render() {



    return (

      // <View style={styles.container}>
      //   <View>
      //     <Text>Ölkələrin siyahısı</Text>
          
      //   </View>
      //   <View>
      //     <Home />
      //   </View>
      //   <StatusBar style="auto" />
      // </View>
      <Home />

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default App