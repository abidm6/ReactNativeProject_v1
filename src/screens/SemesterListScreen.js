import React from "react";
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from "react-native";

const SemesterListScreen = (props) =>{

    const sem = [
        { name: "First Semester", key : '1'},
        { name: "Second Semester", key : '2'},
        { name: "Third Semester", key : '3'},
    ];

    return(
        <View style = {{alignItems :"center"}}>
            <FlatList
                horizontal = {false}
                showsHorizontalScrollIndicator = {false}
                showsVerticalScrollIndicator = {false}
                data = {sem}

                renderItem = {function({item}) {
                    return(
                        <TouchableOpacity>
                            <Text style = {styles.textStyle} >
                                {item.name}
                            </Text>
                            
                        </TouchableOpacity>
                    );
                }
                }
            />
        </View>
    );
            };

    const styles = StyleSheet.create({
        textStyle: {
            fontSize: 20,
            color: "black",
            fontWeight: "bold",
            marginVertical: 10,

        }
    });
 export default SemesterListScreen;