import React from 'react';
import {AsyncStorage, SafeAreaView, View, StyleSheet, FlatList, Text} from 'react-native';

async function navigation(params) {
    let DATA = []
    if (params.title === 'Lexique') {
        const tabMots = await JSON.parse(await AsyncStorage.getItem('allMots'))
        for (let cpt = 0; cpt < tabMots.length; cpt++) {
            DATA[DATA.length] = {
                id: tabMots[cpt].idMot,
                title: tabMots[cpt].mot,
                link: 'LessonPage',
            }
        }
    } else if(params.title === 'Historique'){
        let historiqueLength = await AsyncStorage.getItem('nbItemsHistorique')
        if(historiqueLength === null){
            DATA = {};
        }else {
            for (let cpt = 0; cpt < historiqueLength; cpt++){
                let tmp = await AsyncStorage.getItem('itemHistorique' + cpt)
                tmp = JSON.parse(tmp)
                DATA[DATA.length] = {
                    title: tmp.title,
                    color: tmp.color
                }
            }
        }
    } else if (params.link === 'ExercisesPage') {
        let cpt = 0;
        let idTheme = -1;
        while (idTheme === -1) {
            let theme = JSON.parse(await AsyncStorage.getItem('theme' + cpt))
            if (theme.nomTheme === params.title) {
                idTheme = theme.idTheme
            }
            cpt++
        }
        let allExercices = JSON.parse(await AsyncStorage.getItem('allExercices'))
        let matchExercices = []
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
        let nbItemsHistorique = await AsyncStorage.getItem('nbItemsHistorique')
        let data = {
            title: params.title,
            color: params.color
        }
        await AsyncStorage.setItem('itemHistorique' + nbItemsHistorique, JSON.stringify(data))
        let tmp = Number(nbItemsHistorique)
        tmp++
        nbItemsHistorique = tmp.toString()
        await AsyncStorage.setItem('nbItemsHistorique', nbItemsHistorique)
        if (params.color === mainColor) {
            let allMots = JSON.parse(await AsyncStorage.getItem('allMots'))
            for (let cpt = 0; cpt < allMots.length; cpt++) {
                if (allMots[cpt].mot === params.title) {
                    let content = [];
                    content[0] = {
                        type: 'Texte',
                        data: allMots[cpt].definition,
                        id: allMots[cpt].idMot
                    }
                    DATA[0] = {
                        id: allMots[cpt].idMot,
                        title: allMots[cpt].mot,
                        content: content
                    };
                }
            }
        }
    else {
            let toIncrease = (await AsyncStorage.getItem("AmountExercicesDoneMonth"))
            if (toIncrease === null) {
                toIncrease = -1;
            }
            toIncrease++;
            toIncrease = toIncrease.toString()
            await AsyncStorage.setItem("AmountExercicesDoneMonth", toIncrease)
            global.amountExerciceDoneMonth = toIncrease

            let idExercice = -1;
            let matchExercice;
            let cpt = 0;
            while (idExercice === -1) {
                matchExercice = JSON.parse(await AsyncStorage.getItem('exercice' + cpt))
                if (matchExercice.nomExercice === params.title) {
                    idExercice = matchExercice
                }
                cpt++
            }
            let allItems = JSON.parse(await AsyncStorage.getItem('allItems'))
            let content = [];
            for (cpt = 0; cpt < allItems.length; cpt++) {
                if (allItems[cpt].exerciceId === matchExercice.idExercice) {
                    content[content.length] = {
                        type: allItems[cpt].typeItem,
                        data: allItems[cpt].pathItem,
                        id: allItems[cpt].idItem
                    }
                }
            }
            DATA[0] = {
                id: matchExercice.idExercice,
                title: matchExercice.nomExercice,
                content: content
            }
        }
    }
    params.nav.navigate(params.link, {DATA: {DATA}, color: params.color, title: params.title});
}

let color = '';

function checkColor(props, item) {
    console.log(props);
    if (props.color === null) {
        color = item.color
    }
    else {
        color = props.color
    }
}

const Item = (item) => (
    <View style={styles.item} backgroundColor={item.color} onMoveShouldSetResponder={() => true} onResponderRelease={() => navigation(item)}>
        <Text style={styles.title}>{item.title}</Text>
    </View>
)

const ItemList = (props) => {
    const renderItem = ({item}) => (
        checkColor(props, item),
        <Item title={item.title} color={color} link={item.link} nav={props.navigation}/>
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