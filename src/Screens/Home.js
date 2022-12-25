import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Grid from 'react-native-grid-component';
import { ModalController, ModalData } from "react-native-global-modal-2"

const COLOR_COUNT = 10;
export default function Home() {

    const[data,setData]=useState(addColorOnGrid(COLOR_COUNT));
    const[refreshing,setrefreshing]=useState(false);

    const showMessages = ()=>{
        ModalController.show(ModalDataD);
        // showMessage({
        //     message: "Simple message",
        //     type: "info",
        //   });

        // showMessage({
        //     message: "Hello World",
        //     description: "This is our second message",
        //     type: "success",
        //     autoHide:true
        //   });    
    }

    const ModalDataD: ModalData = {
        title: 'Update available',
        description: 'A new software version is available for download',
        primaryButtonText: 'Update',
        outlineButtonText: 'Not now',
        // titleProps: {
        //   imageSource: require('./assets/cross.png'),
        // },
        onPrimaryButtonPress: () => {ModalController.hide()},
        onOutlineButtonPress: () => {ModalController.hide()},
      };

      const CustomModal: ModalData = {
        customLayout: (
          <View
            style={{
              borderRadius: 16,
              paddingTop: 24,
              paddingLeft: 24,
              paddingRight: 24,
              paddingBottom: 16,
              backgroundColor: '#fff',
            }}>
            <Text>Hello</Text>
            <Button title='close' onPress={()=> ModalController.hide()} />
          </View>
        ),
      };
      

    const   dorenderItem = data => (
        <View style={[{ backgroundColor: data }, styles.item]} >
            <Text style={{textAlign:"center",color:"white"}}>{data}</Text>
            <Button title='Click me' onPress={showMessages}/>
            </View>
    );
    const dorenderPlaceholder = (item,n) => <View style={styles.item} />
        

        return (
            <Grid
                style={styles.list}
                renderItem={dorenderItem}
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
        );
    }

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
