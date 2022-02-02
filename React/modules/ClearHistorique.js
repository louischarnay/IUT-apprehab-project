import AsyncStorage from "@react-native-async-storage/async-storage";

async function setStorage(key: string, value: string){
    if(typeof value === Object){
        value = JSON.stringify(value)
    }
    try {
        await AsyncStorage.setItem(key, value)
    }catch (error){
    }
}

async function clearHistorique(){
    let nbItemsHistorique
    try {
        nbItemsHistorique = await AsyncStorage.getItem('nbItemsHistorique')
    }catch (e){}
    nbItemsHistorique = Number(nbItemsHistorique)
    for (let cpt = 0; cpt < nbItemsHistorique; cpt++){
        await AsyncStorage.removeItem('itemHistorique' + cpt)
    }
    setStorage('nbItemsHistorique', '0')
}

export default clearHistorique()