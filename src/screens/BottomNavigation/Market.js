import React from 'react'
import {Text,View} from 'react-native'
import { dimension } from '../../utils'

const Market = () => {
    return(
        <View
        style = {{
            flex : 1,
            backgroundColor: "white",
        }}>
 
 <Text style={{
     fontFamily:'LuckiestGuy-Regular',
     fontSize:24,
     justifyContent:'center',
     alignSelf:'center',
     color:'red',
     top:dimension.height*0.5
 }}>Coming Soon....</Text>
 
        </View> 
    )
}
export default Market;