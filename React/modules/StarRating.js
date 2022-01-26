import React, { Component } from 'react';


import StarRating from 'react-native-star-rating'

class GlobalStarRating extends Component{
    constructor(props){
        super(props);
        this.state={
            starCount:1
        }
    }

    onStarRatingPress(rating){
        this.setState({
            starCount:rating
        })
    }

    render(){
        return(
        <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating)=>this.onStarRatingPress(rating)}
            
        />)
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

