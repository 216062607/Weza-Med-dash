import React from 'react'
import { View,Text,Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

function OnBoarding({navigation}) {
  return (
    
    <Onboarding
    onSkip={()=> navigation.navigate('LoginScreen')}
    onDone={()=> navigation.navigate('LoginScreen')}
  pages={[
    {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboading/map2.png')} 
            style={{
                height:300,
                width:300,
            }}
        
        />,
        title: 'Emergency Services',
        subtitle: 'Get location of all the emergency services around your area and all registered health professionals',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/care.png')} 
        style={{
            height:300,
            width:300,
        }}

        />,
        title: 'One on one online sessions with registered health practisioners',
        subtitle: '',
     },
    {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/onboading/Pilisi.png')} 
        style={{
            height:300,
            width:300,
        }}
        
        />,
        title: 'Get Prescription pills on the go.',
        subtitle: 'Purchase prescription pills and have them delivered to your door step',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/onboading/pay.png')} 
      style={{
          height:300,
          width:300,
      }}
      
      />,
      title: 'Secure Online Payment',
      subtitle: 'Secure Online payment for your online one on one session, purchase of prescription medication.  You can use your debit card or Medical Aid to pay hasle free',
  },
    
  ]}
/>

  )
}

export default OnBoarding