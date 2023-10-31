import React from 'react'
import { SafeAreaView, ScrollView, Text , Image, View, TextInput, TouchableOpacity} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import Feather  from 'react-native-vector-icons/Feather'
import { sliderData } from '../model/data'
import BannerSlider from '../components/BannerSlider'
import { windowWidth } from '../utils/Dimensions'

function LandingPage({navigation}) {
    const renderBanner = ({item, index}) =>{
        return <BannerSlider data={item} />
    } 
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#EBEBFFFF'}}>
        <ScrollView style={{padding: 20}}
            scrollEnabled={true}
        
        >
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between', 
                marginBottom:'20'
                
            }}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Hello Yamito</Text>
            <Image source={ require ('../assets/avatar.png')}
                style={{
                    width:35,
                    height:35,
                }}
                imageStyle={{borderRadius: 20}}
            />
            </View>

            <View style={{
                flexDirection:'row', 
                borderColor:'C6C6', 
                borderWidth:1, borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8
                }}>
                <Feather name='search' size={20} color='#C6C6C6' style={{marginRight:5}}/>
                <TextInput placeholder='Search' style={{flex:1}}/>
            </View>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between', 
                marginBottom:'20',
                paddingTop: 20
                
            }} >
            <Text style={{
                color:'#A41CE5',
                fontSize:20,
                fontWeight:'bold',
            }}>
                    Emergency Services
            </Text>
            
            </View>
            <View style={{
                paddingTop: 20,
                paddingBottom:10,
            }}>
            <Carousel
                 ref={(c) => { this._carousel = c; }}
                 data={sliderData}
                 renderItem={renderBanner}
                 sliderWidth={windowWidth - 40}
                 itemWidth={300}
                 itemHeight={900}
                 loop={true}
            />
            </View>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between', 
                //marginBottom:'20',
                paddingBottom: 20
                
            }} >
            <Text style={{
                color:'#A41CE5',
                fontSize:20,
                fontWeight:'bold',
            }}>
                    Select a service
            </Text>
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
               // marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
                     <View style={{
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //marginBottom:'20',
               // paddingBottom: 20
                
            }} >
            <Text style={{
                color:'#A41CE5',
                fontSize:20,
                fontWeight:'bold',
            }}>
                    Lets Find You A Specialist
            </Text>
            
            </View>
              
                <View
                    style={{flexDirection: 'row', //justifyContent: 'space-between', 
                    alignItems:'center', alignContent: 'center',}}
                
                >
                <TouchableOpacity onPress={() => navigation.navigate('Specialist')} style={{ 
                backgroundColor:'#A41CE5', 
                //marginTop: 10,
                padding:10, 
                borderRadius:10, 
                marginBottom:30,
                marginEnd:70,
                flex:1 
               //marginRight: 'auto'

                }}>
                <Text style={{
                    fontSize:20,
                    textAlign:'center',
                    fontWeight:'700',
                    color:'#fff'
                }}>
                    Specialist Near Me
                
                 </Text>

                </TouchableOpacity>
                <Image source={require("../assets/cards/woman.png")}
                        style={{
                           // marginBottom: 20,
                            height:120,
                            width:95
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
              <Text
                style={{
                    color:'#A41CE5',
                    fontSize:20,
                    fontWeight:'bold',
                }}
              >Medication Delivered To Your Door Step</Text>
                <View
                    style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', alignContent: 'center'}}
                
                >
                    
                <TouchableOpacity onPress={() => navigation.navigate('Medication')} style={{ 
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
                Prescription Medication
                
                 </Text>

                </TouchableOpacity>
                <Image source={require("../assets/cards/Pills2.png")}
                        style={{
                            
                            height:120,
                            width:120
                        }}
                />
                
                </View>
            </View>
          
        </ScrollView>
    </SafeAreaView>
  )
}

export default LandingPage