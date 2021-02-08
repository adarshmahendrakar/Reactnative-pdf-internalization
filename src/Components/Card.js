import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { Container, Content, Thumbnail, Input, Label, Item, Form, Button, Icon } from 'native-base';
import FooterTabsBadgeExample from './BottumNav';
import ReactProject from './Internalistion';
import Translator from './Translater';




const YourApp = () => {
  const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
  return (
    <>
    <Container >
    <ScrollView >
     
      <View>
   
        
        <Content >
        <Thumbnail small source={{uriaq: uri}} style={{alignItems:"center",justifyContent:"center",marginLeft:"45%",marginTop:"25%"}} />
         <View style={{backgroundColor:"yellow",height:60,width:60,marginLeft:155,borderRadius:50,backgroundColor:"red"}}>
          <Icon type="MaterialIcons" name="lock-outline" style={{alignItems:"center",justifyContent:"center",marginLeft:"25%",marginTop:"25%",color:"white"}}/>
          </View>
        <Text style={{textAlign:"center",marginTop:"10%",fontWeight:"bold",fontSize:30}}>Sign In</Text>
        </Content>

       
      </View>

        
      <Form>
      <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label> 
              <Input />
            </Item>

            <Button full style={{marginLeft:"8%",marginRight:"8%",marginTop:"5%"}}>
            <Text style={{color:"white",fontWeight:"bold"}} >Sign In</Text>
          </Button>
    
          </Form>
    </ScrollView>
   
    <FooterTabsBadgeExample />
    
    </Container>
    </>
  );
}

export default YourApp;