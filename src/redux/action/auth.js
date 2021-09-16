import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import { useState } from 'react'

const [confirm , setConfirm] = useState(null)

export const signup = (data) => async(dispatch) =>{

    const {phone , email , password} = data
    

    const confirmation = await auth().signInWithPhoneNumber(phone);
    setConfirm(confirmation)

    .then((data) =>{
        console.log(data)
        console.log("User Account created successfully")
    })
}

export const confirmCode = (codes) => async(dispatch) => {
    const {otpcode} = codes
    try {
       await confirm.confirm(codes) 
    } catch (error) {
        console.log("Invalid Code")
        
    }
} 

export const signOut = () => async (dispatch) => {
    auth()
    .signOut()
    .then(() => {
        Snackbar.show({
            text: "SignOut success",
            textColor: "white",
            backgroundColor: "#1b262c"
        })
    })
    .catch((error) => {
        console.log(error)
        Snackbar.show({
            text: "Signout failed",
            textColor: "white",
            backgroundColor: "red"
        })
    })
}