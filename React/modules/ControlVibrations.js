import React, {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, StatusBar, Vibration } from "react-native";


let color
let text

async function checkParams() {
    let tmp
    try {
        tmp = await AsyncStorage.getItem('VibrationOn')
    }catch (e){}
    tmp = Boolean(tmp)
    if (tmp === true) {
        color = mainColor
        text = 'Désactiver les vibrations'
    }
    else {
        color = '#6D7070'
        text = 'Activer les vibrations'
    }
}

function changeParams() {
    if (color === mainColor) {
        color = '#6D7070'
        text = 'Activer les vibrations'
    }
    else {
        color = mainColor
        text = 'Désactiver les vibrations'
    }
}

const ControlVibrations = () => {
    const [color, onChangeValues] = useState(true);
    checkParams()
    return (
        <View style={styles.item} backgroundColor={color} onStartShouldSetResponder={() => {Vibration.vibrate(VibrationTime), changeParams(), onChangeValues()}}>
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      padding: 30,
      borderRadius: 10,
      justifyContent: 'center',
      textAlign: 'center',
      marginHorizontal: 10,
      marginVertical: 10
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'justify'
    },
});

export default ControlVibrations;