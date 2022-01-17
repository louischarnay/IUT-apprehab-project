import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import React from 'react';
import Categories from './modules/Categories'
import Lessons from './modules/Lessons'
import Header from './modules/Header';

export default class App extends React.Component {
  render() {
    return (
      <Header/>
    )
  }
}