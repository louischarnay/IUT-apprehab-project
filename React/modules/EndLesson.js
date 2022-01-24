import React from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions, FlatList, Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

const WATER_IMAGE = require('./water.png');



<><AirbnbRating /><><AirbnbRating
    count={11}
    reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
    defaultRating={11}
    size={20} /><Rating
        showRating
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10 }} /><Rating
        type='heart'
        ratingCount={3}
        imageSize={60}
        showRating
        onFinishRating={this.ratingCompleted} /><Rating
        type='custom'
        ratingImage={WATER_IMAGE}
        ratingColor='#3498db'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={10}
        imageSize={30}
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10 }} /></></>

