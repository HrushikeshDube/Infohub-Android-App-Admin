import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Viewnotice = () => {
    const route = useRoute();
    const { timestamp ,title,description} = route.params.data;

    

    return (
        <ScrollView style={styles.container}>
            <Text style={{color:'black',fontSize:18,top:8,left:5,fontWeight:'bold'}}>
                Date: <Text style={{fontWeight:'100',color:'grey'}}>{timestamp}</Text>
            </Text>
           
            <View style={styles.textedit}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black" }}>Title:</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
            
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "black", top: 20, left: 5 }}>Description:</Text>
            <View style={{ height: 1, width: "100%", backgroundColor: "black", top: 25, marginBottom: 15 }}></View>
            <Text style={styles.description}>{description}</Text>
        </ScrollView>
    );
};

export default Viewnotice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 10,
    },
    image: {
        width: "100%",
        height: 400,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        top: 0.5,
        color: 'black',
        left: 5,
        color: "white"
    },
    description: {
        fontSize: 18,
        top: 20,
        color: 'black',
        left: 5,
        fontWeight: "100",
        marginBottom: 100
    },
    textedit: {
        flex: 1,
        flexDirection: "row",
        marginTop: 15,
        backgroundColor: "#FFDB4F",
        alignItems: "center",
        height: 60,
        padding: 8,
        borderRadius: 10,
        shadowColor: 'yellow',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    textedit1: {
        flex: 1,
        flexDirection: "row",
        marginTop: 15,
        alignItems: "center",
        padding: 8,
    },
    timestamp: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: -3,
        left: 10,
        color: 'gray',
        fontWeight: 'bold' // or any color you prefer
    },
});
