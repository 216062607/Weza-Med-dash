import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



const LoginScreen = ({navigation}) =>{
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH

    const handleAuth = async () =>{
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth,email,password);
            console.log(response);
            alert('Signed In Succesfully')
        } catch (error){
            alert('Sign in failed' + error.message);
        }finally{
            setLoading(false);
            navigation.navigate('LandingPage')
        } 
    }


    return (
       <View style={{flex:1,justifyContent:'center',//alignItems:'center'
       backgroundColor:'#fff',
    }}>
       <Image
       source={require("../assets/login2.png")}
       style={{
            height:300,
            width:400,
            alignItems: 'center',
            justifyContent: 'center',
            //transform:[{rotate: '-4deg'}]
       }}
       
       
       /> 
       
        <Text style={{
            fontSize:28, 
            color:'#333', 
            fontWeight: '500', 
            marginBottom: 30,
            alignContent: 'center',
            textAlign:'center',
            }}>
            Login
            </Text>

           <View style={{flexDirection:"row",
                    borderBottomColor:'#CCC', 
                    borderBottomWidth:1, 
                    paddingBottom:8, 
                    marginBottom: 25,
                    marginLeft:30,
                    marginEnd:30,
                    }}>
            <MaterialIcons name="alternate-email" size={30} color="#666"/>

            <TextInput placeholder='Email ID' value={email} onChangeText={text => setEmail(text)} keyboardType='email-address' style={{
                flex:1,
                paddingVertical:0,
                fontSize: 20,  
            }}
            
            />
            </View>

            <View style={{flexDirection:"row",
                    borderBottomColor:'#CCC', 
                    borderBottomWidth:1, 
                    paddingBottom:8, 
                    marginBottom: 25,
                    marginLeft:30,
                    marginEnd:30,
                    }}>
            <Ionicons name="ios-lock-closed-outline" size={30} color="#666"/>

            <TextInput placeholder='Password' value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} style={{
                flex:1,
                paddingVertical:0,
                fontSize: 20,  
            }}
            />
            <TouchableOpacity onPress={() =>{
                console.log("hey");
            }}>
                <Text style={{color:'#A41CE5', fontWeight:'700', fontSize:20, }}>Forgot ?</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleAuth} style={{ 
                backgroundColor:'#A41CE5', 
                padding:20, 
                borderRadius:10, 
                marginBottom:30,
                marginEnd:30, 
                marginLeft:30}}>
                <Text style={{
                    fontSize:20,
                    textAlign:'center',
                    fontWeight:'700',
                    color:'#fff'
                }}>
                    Login
                </Text>
            </TouchableOpacity>
             
             <Text style={{textAlign:'center', marginBottom:30, color:'#666'}}>Or login with...</Text>

            <View style={{
                    flexDirection:'row', //alignSelf:'center', 
                    justifyContent:'space-between',
                    marginBottom:30,
            
            }}>
            <TouchableOpacity onPress={()=>{}} style={{ 
                borderColor:'#ddd', 
                borderWidth:2,
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

            <TouchableOpacity onPress={()=>{}} style={{ 
                borderColor:'#ddd', 
                borderWidth:2,
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

            <TouchableOpacity onPress={()=>{}} style={{ 
                borderColor:'#ddd', 
                borderWidth:2,
                borderRadius:10, 
                paddingHorizontal:30, 
                paddingVertical:10, 
                marginEnd:30, 
               // marginLeft:30
            }}>
                <Image source={require("../assets/twitter.png")}
                        style={{
                            height:24,
                            width:24,
                            //marginLeft:30,
                        }}      
                />
            </TouchableOpacity>
            </View>
           <View style={{
                flexDirection:'row', 
                justifyContent:'center', 
                marginBottom:30,
                }}>
                <Text style={{fontSize:20}}>New to the app?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
                <Text style={{color:'#A41CE5', fontWeight:'700', fontSize:20}}> Register</Text>
            </TouchableOpacity>
           </View>
            
       </View>
    );
}

export default LoginScreen;