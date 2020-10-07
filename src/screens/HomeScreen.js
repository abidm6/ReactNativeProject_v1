import React from "react";
import {Text, StyleSheet, View, Image, TouchableOpacity, Button} from "react-native";

const HomeScreen = (props)=>{
    return(
      <View style={styles.outerViewStyle}>
        <Image source={require('../../assets/IUT.png')} style={styles.logoStyle}/>
         <View style={{marginVertical: 20,alignItems:"center"}}>
          <Text style={styles.textStyle}>Department of CSE</Text>
          <Text style={styles.textStyle}>Program: SWE</Text>
         </View>
         
          <View style={styles.opacityViewStyle}>
            <TouchableOpacity 
              style={{alignSelf: "center",}}
              onPress={function () {
                  props.navigation.navigate("Profile");
                }}
              >
                <Text style={styles.opacityTextStyle}>My Profile</Text>
              </TouchableOpacity>
          </View>

          <View style={{marginVertical: 40,alignItems:"center"}}>
          
          <Button
        title="Semester Wise Course List"
        color="blue"
        onPress={function () {
          props.navigation.navigate("Semester");
        }}
      />
      </View>

      <View style={{alignItems:"center"}}>
         <Button
        title="List of Faculty Members"
        color="blue"
        onPress={function () {
          props.navigation.navigate("Faculty List");
        }}
      />
      </View>

      </View>
    );
};

const styles = StyleSheet.create({
    outerViewStyle:{
      alignItems: "center",
      backgroundColor: '#c4bed4',
      height: 700,
    },
    textStyle:{
        fontSize: 18,
        color: 'black',
        fontWeight: "bold",
    },
    opacityViewStyle:{
        backgroundColor:'#36128a',
        marginTop: 10,
        padding: 10,
        width: 300,
        borderRadius: 30,
  
      },
    logoStyle:{
      height: 200,
      width: 200,
      resizeMode:"contain",
    },
    opacityTextStyle:{
      fontSize: 15,
      color: "white",
      fontWeight: "bold",
    },
});

export default HomeScreen;