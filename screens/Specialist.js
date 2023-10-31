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
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginBottom: 20,
                    marginTop:20
                }}
            
            >
                Search for your specialist
            </Text>
             <View style={{
                flexDirection:'row', 
                borderColor:'grey', 
                borderWidth:1, borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8
                }}>
                <Feather name='search' size={20} color='#C6C6C6' style={{marginRight:5}}/>
                <TextInput placeholder='Search' style={{flex:1}}/>
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
                    Book the best Specialist arounds you!
            </Text>

                
                <Image source={require("../assets/cards/doc1.png")}
                        style={{
                           //marginTop: 20,
                            height:130,
                            width:80
                        }}
                />
                
                </View>
            
            </View>
            <View
            style={{
                flexDirection:'row', //alignSelf:'center', 
                justifyContent:'space-between',
                marginBottom:10,
        
        }}
            
            >
            <TouchableOpacity onPress={()=>navigation.navigate('Dentist')}
             style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 120,
                width: 120,
                marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
              <Image source={require('../assets/cards/tooth.png')}
                        style={{
                            height:50,
                            width: 50,
                        }}
              
              />
              <Text
                 style={{
                    fontWeight:'bold',
                    fontSize: 15,
                    paddingTop:20,
                    paddingLeft: 20
                }}
              >Dentist</Text>
               
            
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Dentist')}
            style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 120,
                width: 120,
                marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
              <Image source={require('../assets/cards/selfcare.png')}
                        style={{
                            height:50,
                            width: 50,
                        }}
              
              />
              <Text
                 style={{
                    fontWeight:'bold',
                    fontSize: 15,
                    paddingTop:20,
                    paddingLeft: 20
                }}
              
              >Pschologist</Text>
               
            
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Dentist')}
             style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 120,
                width: 120,
                marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
              <Image source={require('../assets/cards/physio.png')}
                        style={{
                            height:50,
                            width: 50,
                        }}
              
              />
              <Text
                 style={{
                    fontWeight:'bold',
                    fontSize: 15,
                    paddingTop:20,
                    paddingLeft: 12
                }}
              >Physiotherapy</Text>
               
            
            </TouchableOpacity>
            </View>
            <View
            style={{
                flexDirection:'row', //alignSelf:'center', 
                justifyContent:'space-between',
                marginBottom:10,
        
        }}
            
            >
            <TouchableOpacity onPress={()=>navigation.navigate('Dentist')}
             style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 120,
                width: 120,
                marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
              <Image source={require('../assets/cards/abortion.png')}
                        style={{
                            height:50,
                            width: 50,
                        }}
              
              />
              <Text
                 style={{
                    fontWeight:'bold',
                    fontSize: 15,
                    paddingTop:20,
                    paddingLeft: 20
                }}
              >Antenatal Care</Text>
               
            
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Dentist')}
            style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 120,
                width: 120,
                marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
              <Image source={require('../assets/cards/cardiology.png')}
                        style={{
                            height:50,
                            width: 50,
                        }}
              
              />
              <Text
                 style={{
                    fontWeight:'bold',
                    fontSize: 15,
                    paddingTop:20,
                    paddingLeft: 20
                }}
              >Cardiologist</Text>
               
            
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Dentist')}
             style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 120,
                width: 120,
                marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
              <Image source={require('../assets/cards/medicine.png')}
                        style={{
                            height:50,
                            width: 50,
                        }}
              
              />
              <Text
                 style={{
                    fontWeight:'bold',
                    fontSize: 15,
                    paddingTop:20,
                    paddingLeft: 12
                }}
              >Traumalogical Services</Text>
               
            
            </TouchableOpacity>
            </View>
            <View
            style={{
                flexDirection:'row', //alignSelf:'center', 
                justifyContent:'space-between',
                marginBottom:30,
        
        }}
            
            >
            <TouchableOpacity onPress={()=>navigation.navigate('Dentist')}
             style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 120,
                width: 120,
                marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
              <Image source={require('../assets/cards/gynecology.png')}
                        style={{
                            height:50,
                            width: 50,
                        }}
              
              />
              <Text
                 style={{
                    fontWeight:'bold',
                    fontSize: 15,
                    paddingTop:20,
                    paddingLeft: 20
                }}
              >Gynecology</Text>
               
            
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Dentist')}
            style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 120,
                width: 120,
                marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
              <Image source={require('../assets/cards/doctor.png')}
                        style={{
                            height:50,
                            width: 50,
                        }}
              
              />
              <Text
                 style={{
                    fontWeight:'bold',
                    fontSize: 15,
                    paddingTop:20,
                    paddingLeft: 20
                }}
              
              >Neurologist</Text>
               
            
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Dentist')}
             style={{
                //flexDirection:'row', 
                borderColor:'white', 
                borderWidth:1, 
                borderRadius:8, 
                paddingHorizontal:10, 
                paddingVertical:8,
                backgroundColor: 'white',
                height: 120,
                width: 120,
                marginTop:20,
                //flexDirection:'row',
                //justifyContent:'space-between', 
                //alignItems: 'center'
                }}>
              <Image source={require('../assets/cards/orthopedics.png')}
                        style={{
                            height:50,
                            width: 50,
                            marginEnd: 20
                        }}
              
              />
              <Text
                style={{
                    fontWeight:'bold',
                    fontSize: 15,
                    paddingTop:20,
                    paddingLeft: 20
                }}
              
              >Orthopedic</Text>
               
            
            </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default LandingPage