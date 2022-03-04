import React from 'react';
import Presentation from '../modules/Presentation';
import NavigBar from '../modules/NavigBar';
import { View, StyleSheet, Text} from 'react-native';
import ItemList from '../modules/ItemList';


const PresentationPage=({route,navigation})=>{
    const DATA = route.params;
  const color = route.params.color;
    return(
        <View style={{flex:1}}> 
                <View style={{flex: 5}}>
        <ItemList navigation={navigation} DATA={DATA.DATA.DATA} color={color}/>
        <Text>I'm Stupid</Text>
      </View>
              <View style={{flex:1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
      

    )

}
export default PresentationPage;