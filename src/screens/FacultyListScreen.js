import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";


const FacultyListScreen = ()=>{
    const faculties = [
        {name: "Mr.A", key:"1" },
        {name: "Mr.B", key:"2" },
        {name: "Mr.C", key:"3" },
        {name: "Mr.D", key:"4" },
        {name: "Mr.E", key:"5" },
        {name: "Mr.F", key:"6" },
    ];

    return(
        <View style={styles.viewStyle}>
            <FlatList
            data = {faculties}
            renderItem = {function({item}){
                return( 
                            <Text
                            style={styles.textStyle}>
                                {item.key}. {item.name}
                            </Text>
                    )
            }}
            
            />
            
        </View>


    );
};

const styles = StyleSheet.create({
    viewStyle:{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: '#c4bed4',
        width: 500,
        height: 700,
        
    },
    textStyle:{
        fontSize: 20,
        fontWeight: "bold",
        color: 'black',
        marginVertical: 30,
    },
    
});

export default FacultyListScreen;
