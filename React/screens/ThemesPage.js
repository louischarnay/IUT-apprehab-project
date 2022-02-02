import React from 'react';
import {Button, StyleSheet, TextInput, View, StatusBar} from 'react-native';
import ItemList from '../modules/ItemList';
import NavigBar from '../modules/NavigBar';

class ThemesPage extends React.Component{
    constructor(props) {
        super(props);
        this.data = props.route.params.DATA.DATA
        this.color = props.route.params.color
        this.navigation = props.navigation
        this.searchedText = ""
        this.state = {
            data : props.route.params.DATA.DATA
        }
        console.log(this.state.data)
    }

    filterThemes(data){
        if(this.searchedText === ""){
            return
        }
        let newData = Array()
        const regex = new RegExp('[.]*' + this.searchedText + '[.]*')
        for (let cpt = 0; cpt < data.length; cpt++){
            if(regex.test(data[cpt]['title'])){
                newData[newData.length] = data[cpt]
            }
        }
        this.setState({
            data : newData
        })
    }

    updateSearchedText(text) {
        this.searchedText = text
    }

    resetFilters() {
        this.setState({
            data : this.data
        })
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.main_container}>
                    <TextInput style={styles.textinput} onChangeText={(text) => {
                        this.updateSearchedText(text)
                    }}/>
                    <Button style={styles.button} color={this.color} title='Rechercher' onPress={() => this.filterThemes(this.state.data)}/>
                    <Button style={styles.button} color={this.color} title='Effacer' onPress={() => this.resetFilters()}/>
                </View>
                <View style={{flex: 5}}>
                    <ItemList navigation={this.navigation} DATA={this.state.data} color={this.color}/>
                </View>
                <View style={{flex: 1}}>
                    <NavigBar navigation={this.navigation}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderWidth: 1,
        paddingLeft: 5
    },
})

export default ThemesPage;