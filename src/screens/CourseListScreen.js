import React from "react";
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";

const CourseListScreen = (props) =>{
    const semester1 = [
        {name : "CSE 4041", key : "1"},
        {name : "SWE 4044", key : "2"},
        {name : "HUM 4000", key : "3"},
        {name : "EEE 4444", key : "4"},
        {name : "CSE 4321", key : "5"},
        ];
    
    const semester2 = [
        {name : "CSE 4241", key : "1"},
        {name : "SWE 4444", key : "2"},
        {name : "HUM 4300", key : "3"},
        {name : "EEE 4443", key : "4"},
        {name : "CSE 4320", key : "5"},
    ];

    const semester3 = [
        {name : "CSE 4103", key : "1"},
        {name : "SWE 4844", key : "2"},
        {name : "HUM 4110", key : "3"},
        {name : "EEE 4454", key : "4"},
        {name : "CSE 4721", key : "5"},
    ];

    const semester = props.route.params.semester;
    let courseList = semester1;

    if (semester == "First Semester"){
        courseList = semester1;
    }
    else if (semester == "Second Semester"){
        courseList = semester2;
    }
    else if (semester == "Third Semester"){
        courseList = semester3;
    }

    return(
        <View style = {{alignItems: "center"}}>
            <Text style ={styles.textStyle2}>{semester}</Text>
            <FlatList 
                horizontal = {false}
                showsHorizontalScrollIndicator = {false}
                showsVerticalScrollIndicator = {false}
                data = {courseList}
                renderItem = {function({item}) {
                    return <Text style = {styles.textStyle1}>
                        {item.name}
                    </Text>
                }
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        marginVertical: 10,
},
    textStyle2: {
        fontSize: 40,
        color: "blue",
        fontWeight: "bold",
        marginVertical: 30,
    }

});

export default CourseListScreen;