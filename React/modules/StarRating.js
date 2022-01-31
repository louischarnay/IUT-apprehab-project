import React, { useState }  from 'react';
import { View,Component,StyleSheet, SafeAreaView, FlatList } from 'react-native'

// Use prebuilt version of RNVI in dist folder
//import Icon from 'C:/Users/admin/Documents/appRehab/React/node_modules/react-native-vector-icons/FontAwesome.js';

const RowStar=[
    {   
        id:1,
        icon:require('../assets/icones/star-regular.png'),

    },
    {
        id:2,
        icon:require('../assets/icones/star-regular.png'),
        
    },
    {   
        id:3,
        icon:require('../assets/icones/star-regular.png'),
        
    },
    {   
        id:4,
        icon:require('../assets/icones/star-regular.png'),
        
    },
    {
        id:5,
        icon:require('../assets/icones/star-regular.png'),
        
    }

]

const Item = (item) => (
    <View style={styles.item}>
      <Image
        style={styles.icon}
        source={item.icon}  
      />
      
    </View>
  );


const GlobalStarRating =()=>{
    const renderItem = ({item}) => (
        <Item id={item.id}  icon={item.icon}/>
      );
    <SafeAreaView>
        <FlatList>
            data={RowStar}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        </FlatList>
    </SafeAreaView>

    
        

        
        
    

   

        }


    const styles=StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
           // paddingTop: Constants.statusBarHeight,
            backgroundColor: '#ecf0f1',
          },
          tite: {
            fontSize: 24,
            textAlign: 'center',
            color: '#34495e'
          },
          paragraph: {
            margin: 10,
            marginTop: 40,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#34495e',
          },
    });
    
export default GlobalStarRating






















/*const WATER_IMAGE = require('./water.png');



<><AirbnbRating /><><AirbnbRating
    count={11}
    reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
    defaultRating={11}
    size={20} />
    <Rating
        showRating
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10 }} />
    <Rating
        type='heart'
        ratingCount={3}
        imageSize={60}
        showRating
        onFinishRating={this.ratingCompleted} />
    <Rating
        type='custom'
        ratingImage={WATER_IMAGE}
        ratingColor='#3498db'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={10}
        imageSize={30}
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10 }} 
    />
        </>
        </>*/

