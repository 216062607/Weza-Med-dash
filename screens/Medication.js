import React from 'react'
import { SafeAreaView, ScrollView, Text , Image, View, TextInput, TouchableOpacity, Linking} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import Feather  from 'react-native-vector-icons/Feather'
import { sliderData } from '../model/data'
import BannerSlider from '../components/BannerSlider'
import { windowWidth } from '../utils/Dimensions'

function Medication ({navigation}) {
    const renderBanner = ({item, index}) =>{
        return <BannerSlider data={item} />
    } 
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#EBEBFFFF'}}>
        <ScrollView style={{padding: 20}}
            scrollEnabled={true}
        
        >
            <View style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 150,
                marginTop: 25
               // marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
                     <View style={{
                flexDirection:'row',
                //justifyContent:'space-between', 
                //marginBottom:'20',
               // paddingBottom: 20
                
            }} >
            <Text style={{
                color:'#A41CE5',
                fontSize:30,
                fontWeight:'bold',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent:'center',
                marginTop: 30
            }}>
                    Get over the counter medication
            </Text>

                
                <Image source={require("../assets/cards/Pills3.png")}
                        style={{
                           //marginTop: 20,
                            height:130,
                            width:150
                        }}
                />
                
                </View>
            
            </View>
            <View style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 150,
                marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
              
                <View
                    style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', alignContent: 'center'}}
                
                >
                <TouchableOpacity onPress={() =>{
            Linking.openURL('https://clicks.co.za/health-and-pharmacy/-otc-medication-/c/OH20223?clppage=sc')
        }} style={{ 
                backgroundColor:'#A41CE5', 
                marginTop: 10,
                padding:10, 
                borderRadius:10, 
                marginBottom:30,
                marginEnd:30,
                flex:1 
               // marginRight: 'auto'

                }}>
                <Text style={{
                    fontSize:20,
                    textAlign:'center',
                    fontWeight:'700',
                    color:'#fff'
                }}>
                    Get Medication
                
                 </Text>

                </TouchableOpacity>
                <Image source={require("../assets/cards/doc4.png")}
                        style={{
                            
                            height:120,
                            width:80
                        }}
                />
                
                </View>
            </View>
            <View style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 150,
                marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
              
                <View
                    style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', alignContent: 'center'}}
                
                >
                <TouchableOpacity onPress={() =>{
            Linking.openURL('https://clicks.co.za/health-and-pharmacy/-otc-medication-/c/OH20223?clppage=sc')
        }} style={{ 
                backgroundColor:'#A41CE5', 
                marginTop: 10,
                padding:10, 
                borderRadius:10, 
                marginBottom:30,
                marginEnd:30,
                flex:1 
               // marginRight: 'auto'

                }}>
                <Text style={{
                    fontSize:20,
                    textAlign:'center',
                    fontWeight:'700',
                    color:'#fff'
                }}>
                    Get Prescription
                
                 </Text>

                </TouchableOpacity>
                <Image source={require("../assets/cards/woman.png")}
                        style={{
                            
                            height:120,
                            width:80
                        }}
                />
                
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Medication