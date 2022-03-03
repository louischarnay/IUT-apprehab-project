import { Alert,SafeAreaView, View, StyleSheet, Dimensions, Pressable, FlatList, Image, Text, Modal } from 'react-native';
import StarRating from '../modules/StarRating';
import React, { useState } from 'react';
import CommentTextInput from '../modules/CommentSection';

async function sendComment(rate: string, comment: string, exerciceId: string) {
  let url = 'https://apprehab.000webhostapp.com/api/apiTraitement.php?rate=' + rate + '&comment='
      + comment + '&exerciceId=' + exerciceId
  await fetch(url)
}

const ModalRate = (params) => {
  global.comment = "Aucun commentaire"
  function closeModal(rate, comment, exerciceId){
    setModalVisible(!modalVisible)
    sendComment(rate, comment, exerciceId)
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable onPress={()=>setModalVisible(!modalVisible)}>
              <Image source={require('../assets/icones/cross.png')}
                      style={styles.cross}
              />

            </Pressable>
            <Text style={styles.modalText}>Exercice terminé ! Bien joué !</Text>
            <StarRating/>
            <CommentTextInput/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeModal(global.rate, global.comment, params.idExercice)}>
              <Text style={styles.textStyle}>Envoyer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Finir l'exercice</Text>
      </Pressable>
    </View>
  );
};

const styleByPlatform = Platform.select({
  ios: {
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 10,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 30,
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
      marginTop:200,
      backgroundColor: "#88bd28",
      width: Dimensions.get('window').width/2,
      height: Dimensions.get('window').width/8
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 18
    },
    modalText: {
      marginTop:15,
      marginBottom: 15,
      textAlign: "center"
    },
    cross: {
      width: 30,
      height: 30,
      marginLeft:200,
      marginTop:-5
    }
  },
  android: {
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 10,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 30,
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
      marginTop:200,
      backgroundColor: "#88bd28",
      width: Dimensions.get('window').width/2,
      height: Dimensions.get('window').width/8
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
      marginTop:15,
      marginBottom: 15,
      textAlign: "center"
    },
    cross: {
      width: 30,
      height: 30,
      marginLeft:200,
      marginTop:-5
    }
  }
});

const styles = StyleSheet.create(styleByPlatform);

export default ModalRate;