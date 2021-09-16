import React, {useState} from 'react'
import {View, 
Text,
StyleSheet,
TextInput,
Modal,
SafeAreaView,
StatusBar,
Image,
ActivityIndicator,
TouchableOpacity} from 'react-native'
import { fontSize, marginTop } from 'styled-system';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { dimension } from '../../utils';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
    
    
  } from 'react-native-confirmation-code-field'; 
import OtpVerification from './OtpVerification';
import axios from 'axios';

GoogleSignin.configure({
  webClientId: '58783453322-n44m292t76a818kmpbrr3ekk859c3mvg.apps.googleusercontent.com',
});


const CELL_COUNT = 6

const LoginSignUp = ({navigation,route}) =>{
    const [login , setLogin] = useState(false)
    const [value, setValue] = useState()
    const [signUp , setSignUp] = useState(true)
    const [otpValidate, setOtpValidate] = useState(false)
    const [loading , setLoading] = useState(false)
    const [confirm , setConfirm] = useState(null)
    const [email , setEmail] = useState('');
    const [otpVerification , setOtpVerification] = useState(false)
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });



  async function onFacebookButtonPress() {
    LoginManager.logOut()
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }





  async function confirmCode(value) {

    try {
      await confirm.confirm(value);
      console.log('phone Verification Success')
      setOtpValidate(false)
      navigation.navigate('Dashboard')
      
    } catch (error) {
      console.log(error);
    }
  }
   
    async function signInWithPhoneNumber(phoneNumber) {
        try {

            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
        console.log(confirm)
        console.log('Otp Sent Successful')
        setOtpVerification(true)
        setLoading(false)
        } catch (error) {
            
        }
        
      }

      
   
const register =(email)=> {
  var body = {
    email:email,
    username: '',
    password:'',
    phoneNumber:''
  }
  
  axios({
    method: 'POST',
    url: 'https://ceplbackend.herokuapp.com/signup',
    data: body
  })
  .then(function (response) {
   alert('kaam ho gya')
   navigation.navigate('Dashboard') 
  })
  .catch(function (error) {
   console.log(error)
  });
  
  }
  
   
    async function onGoogleButtonPress() {
        try {
             // Get the users ID token
        const info = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(info.idToken);
        register(info.user.email);
      console.log(info)
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log(error)
        }
       
      }


    const Login = () => {
        
        <View>
        <Text>ff</Text>
        </View>
        
    }
    return(
        <>

        <View>
        <View
        style={{
            flexDirection : "row",
            alignSelf : "center",
            marginTop : "40%",
        }}>
        <TouchableOpacity
        onPress = {()=> {
          
            setLogin(true)
            setSignUp(false)
        }}>
        <Text
        style = {{
            paddingHorizontal : 20,
            color : login ? "#03dbfc" : "grey",
            fontSize  : 20,
        }}
        >Login</Text>
        </TouchableOpacity>
        
        <View
        style= {{
            width: 1,
            backgroundColor : "grey",
        }}></View>
        <TouchableOpacity
        onPress = {()=> {
            setLogin(false)
            setSignUp(true)
        }}>
        <Text
        style = {{
            paddingHorizontal : 20,
            color :  signUp ? "#03dbfc" : "grey",
            fontSize : 20,
        }}>
        SignUp
        </Text>
        </TouchableOpacity>


        </View>
        {login ? ( 
        <View
        style={{
            
            alignSelf : "center",
            marginTop : "4%",
            padding : 10,
            backgroundColor : "white",
            elevation : 2,
            borderRadius : 10,
            height : "50%"
            
        }}>
        <View 
          style={{
              flexDirection : "row",
              borderWidth: 1,
              borderColor: 'grey',
              alignItems: 'center',
              borderRadius: 10,
              marginTop : 10,
              
          }}>
          <Icon
          style = {{
              marginHorizontal: 10,
              color : 'grey'
          }}
              name = 'user-alt' size = {16}/>
          <TextInput
          style = {{
              width : '70%'
          }}
          placeholder="email"
            onChangeText={(val) => {}}
            />
          
          </View>
        <View 
          style={{
              flexDirection : "row",
              borderWidth: 1,
              borderColor: 'grey',
              alignItems: 'center',
              borderRadius: 10,
              marginTop : 25,
              
          }}>
          <Icon
          style = {{
              marginHorizontal: 10,
              color : 'grey'
          }}
              name = 'lock' size = {16}/>
          <TextInput
          style = {{
              width : '70%'
          }}
          placeholder="password"
            onChangeText={(val) => {}}
            />
          
          </View>
          <View
          style = {{
              
              marginTop : "15%",
              height : 50,
              borderRadius : 8,
              elevation : 2,
              alignItems : "center",
              justifyContent : "center",
              backgroundColor : "#4cd4ca"
          }}>
          <Text
          style = {{
              color : "white", 
              fontSize : 18,
          }}>
          Login
          </Text>
          </View>
        </View>
        ): (
            null
        )}

        {signUp ? ( 
            <View
            style={{
                
                alignSelf : "center",
                marginTop : "4%",
                padding : 10,
                backgroundColor : "white",
                elevation : 2,
                borderRadius : 10,
                
                
            }}>
            <View 
              style={{
                  flexDirection : "row",
                  borderWidth: 1,
                  borderColor: 'grey',
                  alignItems: 'center',
                  borderRadius: 10,
                  marginTop : 10,
                  
              }}>
              <Icon
              style = {{
                  marginHorizontal: 10,
                  color : 'grey'
              }}
                  name = 'user-alt' size = {16}/>
              <TextInput
              style = {{
                  width : '70%'
              }}
              placeholder="Full name"
                onChangeText={(val) => {}}
                />
              
              </View>
            <View 
              style={{
                  flexDirection : "row",
                  borderWidth: 1,
                  borderColor: 'grey',
                  alignItems: 'center',
                  borderRadius: 10,
                  marginTop : 25,
                  
              }}>
              <Icon2
              style = {{
                  marginHorizontal: 10,
                  color : 'grey'
              }}
                  name = 'email' size = {16}/>
              <TextInput
              style = {{
                  width : '70%'
              }}
              placeholder="email"
                onChangeText={(val) => {}}
                />
              
              </View>

              <View 
              style={{
                  flexDirection : "row",
                  borderWidth: 1,
                  borderColor: 'grey',
                  alignItems: 'center',
                  borderRadius: 10,
                  marginTop : 25,
                  
              }}>
              <Icon
              style = {{
                  marginHorizontal: 10,
                  color : 'grey'
              }}
                  name = 'phone-alt' size = {16}/>
              <TextInput
              style = {{
                  width : '70%'
              }}
              placeholder="Phone no"
                onChangeText={(val) => {}}
                />
              
              </View>
              <View 
              style={{
                  flexDirection : "row",
                  borderWidth: 1,
                  borderColor: 'grey',
                  alignItems: 'center',
                  borderRadius: 10,
                  marginTop : 25,
                  
              }}>
              <Icon
              style = {{
                  marginHorizontal: 10,
                  color : 'grey'
              }}
                  name = 'lock' size = {16}/>
              <TextInput
              style = {{
                  width : '70%'
              }}
              placeholder="password"
                onChangeText={(val) => {}}
                />
              
              </View>

              <TouchableOpacity
              onPress = {()=>
                {setLoading(true)
                signInWithPhoneNumber('+91 9105769851')}}>
              <View
              style = {{
                  
                  marginTop : "10%",
                  height : 50,
                  borderRadius : 8,
                  elevation : 2,
                  alignItems : "center",
                  justifyContent : "center",
                  backgroundColor : "#4cd4ca"
              }}>
              <Text
              style = {{
                  color : "white", 
                  fontSize : 18,
              }}>
              Get Otp
              </Text>
              </View>
              </TouchableOpacity>
            </View>
            ): (
                null
            )}
            
            <TouchableOpacity
            onPress = {()=> onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
                            .then(()=> navigation.navigate("Dashboard"))}>
            <View
            style={{
                width : dimension.width*0.8,
                height: dimension.height*0.05,
                alignItems  : 'center',
                justifyContent : "center",
                marginTop : '5%',
                alignSelf : "center",
                backgroundColor : "white",
                elevation : 2,
                flexDirection  : "row"
            }}>
            <Image source = {require('./assets/google-logo-9808.png') }
            style={{
                height : 20,
                width : 20,
                marginRight : 5,
            }}></Image>
            <Text
            style = {{
                fontWeight : "bold",
                fontSize : 18,
            }}>
            Google
            </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))
          .then(() => navigation.navigate('Dashboard'))}>
            <View
            style={{
                width : dimension.width*0.8,
                height: dimension.height*0.05,
                alignItems  : 'center',
                justifyContent : "center",
                marginTop : '5%',
                alignSelf : "center",
                backgroundColor : "white",
                elevation : 2,
                flexDirection  : "row"
            }}>
            <Image source = {require('./assets/logo-facebookpng-32204.png') }
            style={{
                height : 20,
                width : 20,
                marginRight : 5,
            }}></Image>
            <Text
            style = {{
                fontWeight : "bold",
                fontSize : 18,
            }}>
            Facebook
            </Text>
            </View>
            </TouchableOpacity>

            <Modal visible = {otpVerification} >
            <SafeAreaView style={{flex: 1, 
                backgroundColor: 'white'}}>
            
            <Text
            style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 26,
          marginVertical: 20,
          alignSelf: 'center',
        }}>
        Enter Otp
      </Text>
      <Text
        style={{
          color: "grey",
          fontSize: 20,
          marginTop: 50,
          marginBottom: 0,
          alignSelf: 'center',
        }}>
        Otp
      </Text>
      <View style={{paddingHorizontal: 15}}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={{marginTop: 20}}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={() => 
          {setOtpValidate(true)
            confirmCode(value)}
          
        }
        style={{
          width: '90%',
          backgroundColor: '#4cd4ca',
          alignItems: 'center',
          marginTop: 90,
          borderRadius : 8,
          alignSelf: 'center',
        }}>
        <Text style={{color: 'white', padding: 12, fontSize: 16}}>Next </Text>
         </TouchableOpacity>
        </SafeAreaView>

    </Modal>



        </View>



        {loading ? (
            <Modal transparent = {true}
            style = {{
                flex : 1,
                
                
            }} >
            <View
            style = {{
                flex  : 1,
                backgroundColor  : "black",
                opacity  : 0.8
            }}>
            <View
            style = {{
                position : 'absolute',
                alignSelf : 'center',
                top  : dimension.height*0.5,
                backgroundColor : "white",
                flexDirection: 'row',
                justifyContent : 'center',
                alignItems : "center",
                paddingHorizontal : 20,
                paddingVertical  :7,
                height  : dimension.height*0.06,
                width : dimension.width*0.5,
                elevation: 2,
                borderRadius : 4
                
                
                               
                
    
            }}>
            <ActivityIndicator size = 'small' color = "black"/>
            <Text
            style={{
                marginLeft : 4,
                fontWeight : "bold"
            }}>Sending Otp</Text>
            
            </View>
            </View>
            </Modal>
        ) : null}
        {otpValidate ? (
            <Modal transparent = {true}
            style = {{
                flex : 1,
                
                
            }} >
            <View
            style = {{
                flex  : 1,
                backgroundColor  : "black",
                opacity  : 0.8
            }}>
            <View
            style = {{
                position : 'absolute',
                alignSelf : 'center',
                top  : dimension.height*0.5,
                backgroundColor : "white",
                flexDirection: 'row',
                justifyContent : 'center',
                alignItems : "center",
                paddingHorizontal : 20,
                paddingVertical  :7,
                height  : dimension.height*0.06,
                width : dimension.width*0.5,
                elevation: 2,
                borderRadius : 4
                
                
                               
                
    
            }}>
            <ActivityIndicator size = 'small' color = "black"/>
            <Text
            style={{
                marginLeft : 4,
                fontWeight : "bold"
            }}>Verifying Otp</Text>
            
            </View>
            </View>
            </Modal>
        ) : null}


        </>
    )
}
export default LoginSignUp;

const styles = StyleSheet.create({

    mainCointainer : {
        flex : 1,
        backgroundColor : "white"

    },
    cell: {
        width: 50,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
      },
      focusCell: {
        borderColor: '#000',
      },
})