import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,  FlatList, TouchableOpacity,ToastAndroid } from 'react-native';
import firestore from '@react-native-firebase/firestore';


const Noticelist = ({ navigation }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getdata();
    }, []);

    const getdata = () => {
        firestore()
            .collection('notices')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                let tempData = [];
                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    tempData.push({ id: documentSnapshot.id, data: documentSnapshot.data() });
                });
                setItems(tempData);
            });
    };
    const deleteannouncement = docId => {
        firestore()
            .collection('notices')
            .doc(docId)
            .delete()
            .then(() => {
                ToastAndroid.show('Deleted', ToastAndroid.SHORT);
                getdata();
            });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notices</Text>
            <FlatList
                data={items}
                renderItem={({ item, index }) => (
                    <View style={styles.itemview}>

                        <Text style={styles.fileDetail}>Title: <Text style={{ fontWeight: '100', color: 'grey' }}>{item.data.title}</Text></Text>
                        <Text style={styles.fileDetail}>
                            Date: <Text style={{ fontWeight: '100', color: 'grey' }}>{item.data.timestamp}</Text>
                        </Text>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('NoticeViewScreen',{
                            data:item.data,
                            id:item.id
                        })}>
                            <Text>View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn1} onPress={()=>deleteannouncement(item.id)}>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C2120',
    },
    text: {
        marginTop: 10,
        alignSelf: "center",
        fontSize: 25,
        fontWeight: "800",
        color: "#FFDB4F"
    },
    fileDetail: {
        marginBottom: 5,
        fontSize: 16,
        color: '#333',// Adjusting text color for better visibility
    },
    itemview: {
        marginBottom: 5,
        backgroundColor: 'white', // Adding a background color to make the details stand out
        padding: 20,
        margin: 15,
        borderRadius: 5,
        shadowColor: 'yellow',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    imgitem: {
        height: 100,
        width: 100,
    },
    textContainer: {
        marginBottom: 5,
        backgroundColor: 'white', // Adding a background color to make the details stand out


        borderRadius: 5,


    },
    btnContainer: {
        marginLeft: -430,
        flex: 1,
        flexDirection: 'row',

        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title: {
        marginBottom: 5,
        fontSize: 16,
        color: '#333'
    },
    title1: {
        fontSize: 16,
        left: 10,
        backgroundColor: "red"
    },
    description: {
        fontSize: 14,
        marginTop: 5,
    },
    editview: {
        flex: 1,
        flexDirection: "column",

    },
    viewimg: {
        height: 25,
        width: 25,
        marginLeft: 10,
        left: 90

    },
    timestamp: {
        fontSize: 14,
        marginTop: 5,
        left: 10,
        color: 'gray' // or any color you prefer
    },
    btn: {

        height: 30,
        left:-5,
        width: 120,
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: "#FFDB4F",
        justifyContent: 'center',
        alignItems: 'center',
       top:10,
       shadowColor: 'yellow',
       shadowOffset: {
         width: 0,
         height: 10,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.5,
       elevation: 5,
    },
    btn1: {

        height: 30,
        left:50,
        width: 120,
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: "#FFDB4F",
        justifyContent: 'center',
        alignItems: 'center',
       top:10,
       shadowColor: 'yellow',
       shadowOffset: {
         width: 0,
         height: 10,
       },
       shadowOpacity: 0.25,
       shadowRadius: 3.5,
       elevation: 5,
    }
});

export default Noticelist;
