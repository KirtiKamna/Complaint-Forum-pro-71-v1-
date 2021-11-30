import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadComplaint from './screens/readComplaint';
import WriteComplaint from './screens/writeComplaint';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ReadComplaint: {screen: ReadComplaint},
  WriteComplaint: {screen: WriteComplaint},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "ReadComplaint"){
        return(
          <Image
          source={require("./assets/readC.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "WriteComplaint"){
        return(
          <Image
          source={require("./assets/complaint.webp")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  
});