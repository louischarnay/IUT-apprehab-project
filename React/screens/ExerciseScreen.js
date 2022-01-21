import Categories from '../modules/Categories'
import NavigBar from '../modules/NavigBar';

import FilterPicker from '../modules/FilterPicker';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Dimensions, Image } from 'react-native';
import ItemList from '../modules/ItemList';

const ExerciseScreen = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 6}}>
                <ItemList navigation={navigation}/>
            </View>
            <View style={{flex: 1}}>
                <NavigBar navigation={navigation}/>
            </View>
        </View>
    );
}

export default ExerciseScreen