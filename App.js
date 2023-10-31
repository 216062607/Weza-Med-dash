import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, Image, TouchableOpacity} from 'react-native';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import onBoarding from './screens/onBoarding';
import Register from './screens/Register';
import LandingPage from './screens/LandingPage';
import Specialist from './screens/Specialist';
import Medication from './screens/Medication';
import Dentist from './screens/Dentist';


function Main({navigation}) {
  return (
    <SafeAreaView style={{
      flex:1,
      justifyContent:'center', 
      alignItems:'center',
      backgroundColor:'#fff'
      }}>

      <View>
        <Image source={require('./assets/wezalogo.png')}
            style={{
              marginTop:30,
              height:300,
              width:300,
              resizeMode:'center',
              marginBottom:50, 
            }}
        />
      </View>
      <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>
      <Image source={require('./assets/homelogo.png')}
        style={{
          height:400,
          width:400,
          marginBottom:100,
          marginTop:100,
          //justifyContent: 'center',
          marginLeft:70,
          //resizeMode: 'center',
        }}
      />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('onBoarding')} 
          style={{
          backgroundColor: '#A41CE5',
          padding:20, 
          width:'90%', 
          borderRadius:20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom:15,
          marginTop:100,

        }}>

        <Text style={{
            fontWeight:'bold', 
            fontSize:18, 
            color:'#fff'
          }}>
            Lets Get Started
          </Text>
        <MaterialIcons name='arrow-forward-ios' size={22} color='#fff'/>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}

const Stack = createNativeStackNavigator();

const App =() =>{
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen component={Main} name="Main" options={{headerShown: false}}/>
          <Stack.Screen name="onBoarding" component={onBoarding}  options={{headerShown: false}}/>
          <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false}}/>
          <Stack.Screen name='Register' component={Register} options={{ headerShown: false}}/>
          <Stack.Screen name='LandingPage' component={LandingPage} options={{ headerShown: false}}/>
          <Stack.Screen name='Specialist' component={Specialist} options={{ headerShown: false}}/>
          <Stack.Screen name='Medication' component={Medication} options={{ headerShown: false}}/>
          <Stack.Screen name='Dentist' component={Dentist} options={{ headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
