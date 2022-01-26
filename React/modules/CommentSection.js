import React from 'react';
import {SafeAreaView, StyleSheet,TextInput } from 'react-native';



const CommentTextInput =()=>{
    const [text, onChangeText] = React.useState(null);


    return(
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
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
