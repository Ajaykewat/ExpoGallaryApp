import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import { Button,FAB, Portal, Provider } from 'react-native-paper';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ImageSlider = ({route}) => {
    const navigation = useNavigation();


    const[image_position,setImage_Position] = useState(-1);
    const[IamgeArray,setImageArray]= useState(route.params.images);
    if(image_position == -1){
        setImage_Position(route.params.position)
    }

    const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
   
    <PagerView style={styles.pagerView} initialPage={image_position}>
      {IamgeArray.map((item,index)=>{
        return(
           
            <View key={index} style={{
            flex:1,backgroundColor:item
                }}>
                     <Provider >
                    <View
                    style={{    height:height-150,
                        width,
                        backgroundColor:item,
                justifyContent:"center",
                alignItems:"center"
                    }}
                    >
                    <Text style={{color:"#000000"}}>{item}</Text>
                    </View>
                

{/* <View style={{
    //  backgroundColor:item,
    flexDirection:"row",
    height:60,
    justifyContent:"space-evenly",
    alignItems:"center"
}}>
<Button icon="download" mode="contained" onPress={() => console.log('download')}>
    download
  </Button>
                <Button icon="share" mode="contained" onPress={() => console.log('share')}>
    Share
  </Button>
</View> */}

<Portal>
        <FAB.Group
          open={open}
          visible
        //   color={item}
          backdropColor={item}
          icon={open ? 'close' : 'plus'}
          actions={[
            {
              icon: 'download',
            //   color:{item},
              label: 'download',
              onPress: () => console.log('Pressed download'),
            },
            {
              icon: 'share',
            //   color:{item},
              label: 'share',
              onPress: () => console.log('Pressed share'),
            },
          ]}
          onStateChange={onStateChange}
        />
      </Portal>
      </Provider>
                </View>
                
        )
      })}

    </PagerView>
    
  )
}

export default ImageSlider

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
      },
})