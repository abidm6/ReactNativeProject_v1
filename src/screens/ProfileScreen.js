import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";

const ProfileScreen = (props)=>{
    return(
      <View style={styles.viewStyle}>
          <View style={{marginVertical: 30}}>
            <Image source={require('../../assets/dp.jpg')} style={styles.logoStyle}/>
         </View>
         <View style={{alignItems : 'center'}}>
          <Text style={styles.textStyle}>Name: Muhtasim Abid</Text>
          <Text style={styles.textStyle}>Student ID: 170042035</Text>
          <Text style={styles.textStyle}>Non-res</Text>
          <Text style={styles.textStyle}>Email: muhtasimabid@iut-dhaka.edu</Text>
         </View>
      </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: '#c4bed4',
        height: 700,
        width: 500,
    },
    logoStyle:{
        height: 350,
        width: 200,
        resizeMode:"contain",
    },
    textStyle:{
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        color: 'black',
        borderBottomColor: "white",
        borderBottomWidth: 1,
        width: 300,
    },


});

export default ProfileScreen;