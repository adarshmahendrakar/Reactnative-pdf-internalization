import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import YourApp from "./Card";

class Submit extends Component {
  state = { isHungry: true };

  render(props) {
    return (
      <View>
       <YourApp/>
        <Button
          onPress={() => {
            this.setState({ isHungry: false });
          }}
          
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? "Submit" : "Thank you!"
          }
        />
        <Button
          
         
          title="send"
        />

      </View>
    );
  }
}

class SubmitButton extends Component {
  render() {
    return (
      <>
        <Submit name="Munkustrap" />
        
       
      </>
    );
  }
}

export default  SubmitButton;