import { Alert,SafeAreaView, View, StyleSheet, Dimensions, Pressable, FlatList, Image, Text, Modal } from 'react-native';
import Myapp from '../modules/StarRating';
import React, { useState } from 'react';
import CommentTextInput from '../modules/CommentSection';



  const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable onPress={()=>setModalVisible(!modalVisible)}>
                <Image source={require('../assets/icones/cross.png')}
                        style={styles.cross}
                />
                
              </Pressable>
              <Text style={styles.modalText}>Exercice terminé ! Bien joué !</Text>
              <Myapp/>
              <CommentTextInput/>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Terminer</Text>
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
  
  export default App;