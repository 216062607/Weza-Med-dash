import React from 'react'
import { SafeAreaView, ScrollView, Text , Image, View, TextInput, TouchableOpacity, Linking} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import Feather  from 'react-native-vector-icons/Feather'
import { sliderData } from '../model/data'
import BannerSlider from '../components/BannerSlider'
import { windowWidth } from '../utils/Dimensions'

function Dentist({navigation}) {
    const renderBanner = ({item, index}) =>{
        return <BannerSlider data={item} />
    } 
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#EBEBFFFF'}}>
        <ScrollView style={{padding: 20}}
            scrollEnabled={true}
        
        >
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginBottom: 20,
                    marginTop:20
                }}
            
            >
                Specialist Profile
            </Text>
            <View style={{
               flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 170,
                marginTop: 25,
               // marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
                     
            
                <Image source={require("../assets/cards/doc3.png")}
                        style={{
                           //marginTop: 20,
                            height:130,
                            width:80
                        }}
                />

<Text style={{
                color:'#A41CE5',
                fontSize:15,
                fontWeight:'bold',
                paddingLeft: 80,
                marginTop: 30
            }}>
                    Dr Karrin Smith has ten years worth of experience working as a dentist.
                    <TouchableOpacity onPress={() => navigation.navigate('Specialist')} style={{ 
                backgroundColor:'#A41CE5', 
                //marginTop: 10,
                padding:10, 
                borderRadius:10, 
                marginBottom:30,
                marginEnd:70,
                flex:1, 
                marginTop: 20
               //marginRight: 'auto'

                }}>
                <Text style={{
                    fontSize:20,
                    textAlign:'center',
                    fontWeight:'700',
                    color:'#fff'
                }}>
                    Set Appointment
                
                 </Text>

                </TouchableOpacity>
                    
            </Text>
            
                </View>
                <View style={{
                    flexDirection:'row', //alignSelf:'center', 
                    justifyContent:'space-between',
                    marginBottom:10,
                    marginTop:10
            
            }}>
            <TouchableOpacity onPress={() =>{
            Linking.openURL('https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1')
        }} style={{ 
                borderColor:'#ddd', 
                borderWidth:2,
                backgroundColor: 'white',
                borderRadius:10, 
                paddingHorizontal:30, 
                paddingVertical:10, 
               // marginEnd:30, 
                marginLeft:30
            }}>
                <Image source={require("../assets/google.png")}
                        style={{
                            height:24,
                            width:24,
                            //marginLeft:30,
                        }}      
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>{
            Linking.openURL('https://www.facebook.com/')
        }} style={{ 
                borderColor:'#ddd', 
                borderWidth:2,
                backgroundColor: 'white',
                borderRadius:10, 
                paddingHorizontal:30, 
                paddingVertical:10, 
               // marginEnd:5, 
               // marginLeft:5
            }}>
                <Image source={require("../assets/facebook.png")}
                        style={{
                            height:24,
                            width:24,
                            //marginLeft:30,
                        }}      
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>{
            Linking.openURL('https://support.zoom.us/hc/en-us/articles/201362193-Joining-a-Zoom-meeting')
        }} style={{ 
                borderColor:'#ddd', 
                borderWidth:2,
                backgroundColor: 'white',
                borderRadius:10, 
                paddingHorizontal:30, 
                paddingVertical:10, 
                marginEnd:30, 
               // marginLeft:30
            }}>
                <Image source={require("../assets/cards/Zoom-Icon.png")}
                        style={{
                            height:30,
                            width:30,
                            //marginLeft:30,
                        }}      
                />
            </TouchableOpacity>
            </View>
                <View style={{
                flexDirection:'row',
                backgroundColor: 'white', 
                borderColor:'white', 
                borderWidth:1, borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                paddingTop: 10,
                //marginTop: 20
                }}>
                
                <TextInput placeholder='Name and Surname' style={{flex:1}}/>
            </View>
            <View style={{
                flexDirection:'row',
                backgroundColor: 'white', 
                borderColor:'white', 
                borderWidth:1, borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                paddingTop: 10,
                marginTop: 20
                }}>
                
                <TextInput placeholder='DD/MM/YY' style={{flex:1}}/>
            </View>
            <View style={{
                flexDirection:'row',
                backgroundColor: 'white', 
                borderColor:'white', 
                borderWidth:1, borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                paddingTop: 10,
                marginTop: 20
                }}>
                
                <TextInput placeholder='email address' style={{flex:1}}/>
            </View>
            <View style={{
                flexDirection:'row',
                backgroundColor: 'white', 
                borderColor:'white', 
                borderWidth:1, borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                paddingTop: 10,
                height: 150,
                marginTop: 20
                }}>
                
                <TextInput placeholder='Summary of condition' style={{flex:1, }}/>
            </View>
            <TouchableOpacity onPress={() => alert('Appointment')} style={{ 
                backgroundColor:'#A41CE5', 
                //marginTop: 10,
                padding:10, 
                borderRadius:10, 
                marginBottom:30,
                marginEnd:70,
                flex:1, 
                marginTop: 20
               //marginRight: 'auto'

                }}>
                <Text style={{
                    fontSize:20,
                    textAlign:'center',
                    fontWeight:'700',
                    color:'#fff'
                }}>
                    Set Appointment
                
                 </Text>

                </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Dentist