import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import Home from './Home';


const MainScreen = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Home/>
      <FlashMessage position="top" />
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({})