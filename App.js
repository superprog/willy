import React from 'react';
import {createAppContainer}from 'react-navigation';
import {createBottomTabNavigator} from  'react-navigation-tabs'
import { StyleSheet, Text, View } from 'react-native';
import Transactionscreen from './screens/Transaction';
import Searchscreen from './screens/Search';



export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
      <AppContainer/>
    
      </View>
    );
  }
 
}
const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:Transactionscreen},
  Search:{screen:Searchscreen},
})
const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
