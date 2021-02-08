// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SubmitButton from './Buttons';

import Login from './Pages/SignUp';
import YourApp from './Card';
import FooterTabsBadgeExample from './BottumNav';

import LanguageSelectionScreen from './LanguageSelectionScreen';
import ContentScreen from './ContentScreen';
import HtmlToPdf from './HtmlToPdf';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
     
      <YourApp/>

      <Button
      title="SignUp"
      onPress={() => navigation.navigate('SignUp')}
      />
    
    
   
  
      

    </View>
    
  );
}


function Sign({ navigation }) {
  return (
    <View style={{ flex: 1, marginTop: 50}}>
      <View>
    <Button
      title="Home"
      onPress={() => navigation.navigate('Modicum Technologies')}
      />
      </View>
      <View style={{  marginTop: 20}} >
      <Button
      title="HtmlToPdf"
      onPress={() => navigation.navigate('HtmlToPdf')}
       />
       </View>
       <View style={{  marginTop: 20}} >
     <Button
      title="Select Your Language"
      onPress={() => navigation.navigate('LanguageSelectionScreen')}
      />
      </View>
  
  </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Modicum Technologies" component={HomeScreen} />
        
        <Stack.Screen name="SignUp" component={Sign} />
        <Stack.Screen name="HtmlToPdf" component={HtmlToPdf} />
        <Stack.Screen
          name="LanguageSelectionScreen"
          component={LanguageSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContentScreen"
          component={ContentScreen}
          options={{
            title: 'Content Screen', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        
      </Stack.Navigator>
     

    </NavigationContainer>

   
  );
}

export default MyStack;