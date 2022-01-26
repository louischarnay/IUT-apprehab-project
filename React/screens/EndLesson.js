import React, { useState } from 'react';
import { AsyncStorage, Alert, Modal, Pressable,View, SafeAreaView, StyleSheet, Dimensions, FlatList, Text, Image } from 'react-native';
import CommentTextInput from '../modules/CommentSection';
import GlobalStarRating from '../modules/StarRating';
import Header from '../modules/Header';
import NavigBar from '../modules/NavigBar';

/*const EndLesson=({navigation})=>{
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Header navigation={navigation}/>
            </View>
            <View style={{flex:1}}>
                <GlobalStarRating navigation={navigation}/>
            </View>

            <View style={{flex: 4}}>
                <CommentTextInput navigation={navigation}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
}
export default EndLesson;*/

const EndLesson=()=>{
    const [modalVisible,setModalVisible] = useState(false);
    return(
        <View style={styles.centeredView}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={()=>{
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Exercice Fini !
                        </Text>
                        <View style={{flex:1}}>
                            <GlobalStarRating/>
                        </View>
                        <View style={{flew:4}}>
                            <CommentTextInput/>
                        </View>
                        <Pressable
                            style={[styles.button,styles.buttonClose]}
                            onPress={()=>setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>Terminer</Text>

                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

  export default EndLesson;