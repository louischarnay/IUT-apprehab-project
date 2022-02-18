import React from 'react';
import {SafeAreaView, StyleSheet,TextInput } from 'react-native';



const CommentTextInput =()=>{

    return(
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={newText => global.comment = newText}
                placeholder='Entrez votre commentaire...'
            />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  export default CommentTextInput;
