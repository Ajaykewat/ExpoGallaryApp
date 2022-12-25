import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from 'react-native-grid-component';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { FAB, Portal, Provider,Button  } from 'react-native-paper';
const COLOR_COUNT = 10;
const Albums = () => {

    const[data,setData]=useState(addColorOnGrid(COLOR_COUNT));
    const[refreshing,setrefreshing]=useState(false);

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;

    const   dorenderItem = data => (
        <View style={[{ backgroundColor: "#acacac" }, styles.item]} >
            <Ionicons name='md-folder-open-sharp' size={100} color="orange"/>
            <Text style={{marginBottom:10}}>{data}</Text>
            </View>
    );
    const dorenderPlaceholder = (item,n) => <View style={styles.item} />
  return (
    <Provider>
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

<Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
      </Provider>
  )
}

export default Albums

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