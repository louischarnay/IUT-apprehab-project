import React from 'react';
import { View } from 'react-native';
import ThemeSelected from '../modules/ThemeSelected';
import Lesson from '../modules/Lesson';
import NavigBar from '../modules/NavigBar';

const LessonPage = ({route, navigation}) => {
    const title = route.params.title;
    const color = route.params.color;
    const content = route.params.DATA.DATA;
    
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <ThemeSelected navigation={navigation} title={"< "+ title} color={color}/>
            </View>
            <View style={{flex: 5}}>
                <Lesson content={content} color={color} />
                
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
};

export default LessonPage;