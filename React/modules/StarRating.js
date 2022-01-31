import React, { View,Component } from 'react';

// Use prebuilt version of RNVI in dist folder
//import Icon from 'C:/Users/admin/Documents/appRehab/React/node_modules/react-native-vector-icons/FontAwesome.js';

import {AirbnbRating} from "react-native-ratings"
import StarRating from 'react-native-star-rating'


const halfStar={
    color:'#00000',
    icon:require('../assets/icones/star-half-alt-solid.png')
}

const emptyStar={
    color:'#00000',
    icon:require('../assets/icones/star-regular.png')
}

const fullStar={
    color:'#00000',
    icon:require('../assets/icones/star-solid.png')
}

class GlobalStarRating extends Component{
    constructor(props){
        super(props);
        this.state={
            starCount:2.5
        }
    }

  ratingCompleted(rating){
      console.log("Rating is :" + rating)
  }
    

    render(){
        return(
         
          
            <AirbnbRating
            ratingCount={5}
            count={5}
            reviews={["1","2","3","4","5"]}
            defaultRating={5}
            size={20}
            style={{paddingHorizontal:10}}
            showRating
            />
        

            
        /*<StarRating
        disabled={false}
        emptyStar={emptyStar}
        halfStar={halfStar}
        fullStar={fullStar}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating)=>this.onStarRatingPress(rating)}
        />*/
        )
    } 




}export default GlobalStarRating

























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

