import React, { useState } from 'react';
import {View,
    StyleSheet,
    Image,
    TouchableOpacity,} from 'react-native';
import Grid from 'react-native-grid-component';
import { useNavigation } from '@react-navigation/native';
const COLOR_COUNT = 10;
const All_Images = () => {

    const navigation = useNavigation();

    const[data,setData]=useState(addColorOnGrid(COLOR_COUNT));
    const[refreshing,setrefreshing]=useState(false);


    const   dorenderItem = (item,index) => (
        <TouchableOpacity 
        onPress={()=> navigation.navigate("ImageSlider",{images:data,position:index})}
        style={[{ backgroundColor: item,padding:10 }, styles.item]} >
            <Image
            source={require('../Assets/avatar1.png')}
            style={{
                height:100,
                width:100,
                resizeMode:"cover"
            }}
            />
        </TouchableOpacity>

    );
    const dorenderPlaceholder = (item,n) => <View style={styles.item} />
       

  return (
    <>
    <Grid
                style={styles.list}
                renderItem={(item,index)=>dorenderItem(item,index)}
                renderPlaceholder={dorenderPlaceholder}
                data={data}
                numColumns={3}
                keyExtractor={(item, n) => n.toString()}
                refreshing={refreshing}
                onRefresh={() => {
                    setData(addColorOnGrid(COLOR_COUNT));
                    setrefreshing(false)
                }}
            />
      </>
  )
}

export default All_Images

const styles = StyleSheet.create({
    item: {
        flex: 2,
        height: 120,
        margin: 1.5,
        justifyContent:"center",
        alignItems:"center"
    },
    list: {
        flex: 1,
    },
    fabStyle: {
        bottom: 16,
        right: 16,
        position: 'absolute',
      },
});
// Helper functions
// thanks materialuicolors.co
const colors_arr = [
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722'
];
function addColorOnGrid(length) {
    return Array.from(Array(length)).map(
        () => colors_arr[Math.floor(Math.random() * colors_arr.length)]
    );
}