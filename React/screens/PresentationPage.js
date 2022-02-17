import React from 'react';
import Presentation from '../modules/Presentation';
import NavigBar from '../modules/NavigBar';
import { View, StyleSheet, Text} from 'react-native';


const PresentationPage=({navigation})=>{
    
    return(
        <View>
                <View>
                    <Presentation/>
                </View>
              <View style={{flex:1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
      

    )

}
export default PresentationPage;