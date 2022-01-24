import React from 'react';
import {AsyncStorage, SafeAreaView, View, StyleSheet, FlatList, Text} from 'react-native';

async function navigation(params) {
    var DATA = []
    if (params.title === 'Lexique') {
        const tabMots = await JSON.parse(await AsyncStorage.getItem('allMots'))
        for (var cpt = 0; cpt < tabMots.length; cpt++) {
            DATA[DATA.length] = {
                id: tabMots[cpt].idMot,
                title: tabMots[cpt].mot,
                link: 'LessonPage',
            }
        }
    } else if (params.link === 'ExercisesPage') {
        var idTheme = -1;
        cpt = 0;
        while (idTheme === -1) {
            var theme = JSON.parse(await AsyncStorage.getItem('theme' + cpt));
            if (theme.nomTheme === params.title) {
                idTheme = theme.idTheme
            }
            cpt++
        }
        var allExercices = JSON.parse(await AsyncStorage.getItem('allExercices'))
        var matchExercices = []
        for (cpt = 0; cpt < allExercices.length; cpt++) {
            if (allExercices[cpt].themeId === idTheme) {
                matchExercices[matchExercices.length] = allExercices[cpt];
            }
        }
        for (cpt = 0; cpt < matchExercices.length; cpt++) {
            DATA[DATA.length] = {
                id: matchExercices[cpt].idExercice,
                title: matchExercices[cpt].nomExercice,
                link: 'LessonPage'
            }
        }
    } else if (params.link === 'LessonPage') {
        if (params.color === mainColor) {
            var allMots = JSON.parse(await AsyncStorage.getItem('allMots'))
            for (cpt = 0; cpt < allMots.length; cpt++) {
                if (allMots[cpt].mot === params.title) {
                    var content = [];
                    content[0] = allMots[cpt].definition
                    DATA[0] = {
                        id: allMots[cpt].idMot,
                        title: allMots[cpt].mot,
                        content: content
                    };
                }
            }
        }
        else{
            var idExercice = -1;
            var matchExercice;
            cpt = 0;
            while (idExercice === -1){
                matchExercice = JSON.parse( await AsyncStorage.getItem('exercice' + cpt))
                if(matchExercice.nomExercice === params.title){
                    idExercice = matchExercice
                }
                cpt++
            }
            console.log(matchExercice)
            var allItems = JSON.parse(await AsyncStorage.getItem('allItems'))
            content = [];
            for (cpt = 0; cpt < allItems.length; cpt++){
                if(allItems[cpt].exerciceId === matchExercice.idExercice){
                    content[content.length] = {
                        type: allItems[cpt].typeItem,
                        data: allItems[cpt].pathItem
                    }
                }
            }
            DATA[0] = {
                id: matchExercice.idExercice,
                title: matchExercice.nomExercice,
                content: content
            }
            console.log(DATA[0])
        }
    }
    params.nav.navigate(params.link, {DATA: {DATA}, color: params.color, title: params.title});
}

const Item = (item) => (
    <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={() => navigation(item)}>
        <Text style={styles.title}>{item.title}</Text>
    </View>
)

const ItemList = (props) => {
    const renderItem = ({item}) => (
        <Item title={item.title} color={props.color} link={item.link} nav={props.navigation}/>
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={props.DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
    },
    title: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ItemList;