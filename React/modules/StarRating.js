/*import React from 'react';
import { View,StyleSheet, SafeAreaView, FlatList, Text,Image,Dimensions } from 'react-native'

// Use prebuilt version of RNVI in dist folder

const rate={};
const RowStar=[
    {   
        id:'1',
        icon: require('../assets/icones/star-solid.png'),
        color: "#00000"

    },
    {
        id:'2',
        icon: require('../assets/icones/star-solid.png'),
        color: "#00000"
    },
    {   
        id:'3',
        icon: require('../assets/icones/star-solid.png'),
        color: "#00000"
        
    },
    {   
        id:'4',
        icon: require('../assets/icones/star-solid.png'),
        color: "#00000"
        
    },
    {
        id:'5',
        icon: require('../assets/icones/star-solid.png'),
        color: "#00000"
        
    }

]

const Item = (item) => (
    <View style={styles.item} backgroundColor={item.color} onStartShouldSetResponder={rate}>
        <Image
        style={styles.icon}
        source={item.icon}  
        />
    </View>
  );


const GlobalStarRating = () =>{
    const renderItem = ({item}) => (
        <Item rate={item.id} color={item.color} icon={item.icon}/>
      );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data= {RowStar}
                horizontal ={true}
                renderItem= {renderItem}
                 keyExtractor= {item => item.id}
            />
        </SafeAreaView>
      );
}


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            marginTop: 20,
          },
          item: {
            flex: 1,
            width: Dimensions.get('window').width/3.1,
            height: Dimensions.get('window').height/10,
            margin: 2,
            marginTop: 7,
            padding: 0,
            borderRadius: 10,
            justifyContent: 'flex-end',
            alignItems: 'center',
          },
          icon: {
            width:  Dimensions.get('window').width/10,
            height:  Dimensions.get('window').width/10
          },
    });
    
export default GlobalStarRating;
*/

import React, { Component } from 'react';
import { StyleSheet,View, Platform, Text, Image, TouchableOpacity } from 'react-native';

export default class StarRating extends Component {
  constructor() {
    super();
    global.rate = 5
    this.state = {
      Default_Rating: 5,
      Max_Rating: 5,
    };
  }
  UpdateRating(key) {
    this.setState({ Default_Rating: key });
    global.rate = key
  }
  render() {
    let React_Native_Rating_Bar = [];
    for (let i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating
                  ? require('../assets/icones/star_filled.png')
                  : require('../assets/icones/star_corner.png')
            }
          />
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.textStyle}>Avez-vous apprécié l'exercice ?</Text>
        
        {}
        <View style={styles.childView}>{React_Native_Rating_Bar}</View>
        
        <Text style={styles.textStyle}>
        {}
          {this.state.Default_Rating} / {this.state.Max_Rating}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  StarImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,

    color: '#000',
    marginTop: 15,
  },
});

