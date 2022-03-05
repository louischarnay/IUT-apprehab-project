import React from 'react';
import { View } from 'react-native';
import ItemList from '../modules/ItemList';
import NavigBar from '../modules/NavigBar';
import ThemeSelected from '../modules/ThemeSelected';

const ExercisesPage = ({route, navigation}) => {
    const title = route.params.title;
    const DATA = route.params;
    const color = route.params.color;

    return (
        <View style={{flex: 2}}>
            <View style={{flex: 1}}>
                <ThemeSelected navigation={navigation} title={"< " + title} color={color}/>
            </View>
            <View style={{flex: 5, marginTop: -40}}>
                <ItemList navigation={navigation} DATA={DATA.DATA.DATA} color={color}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
};

export default ExercisesPage;