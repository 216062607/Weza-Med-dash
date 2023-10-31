import React from 'react'
import { Linking } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View , Image} from 'react-native'

export default function BannerSlider({data}) {
  return (
    <View>
        <TouchableOpacity onPress={() =>{
            Linking.openURL('https://www.google.com/search?q=emergency+services+near+me&oq=emergency+services+ne&aqs=chrome.1.69i57j0i512l9.29127j0j15&sourceid=chrome&ie=UTF-8')
        }} >
        <Image source={data.image} style={{height:150 , width:300, borderRadius:10, borderColor: 'blue'}}/>
        </TouchableOpacity>
    </View>
    
  )
}
