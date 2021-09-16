import React from 'react'
import { View,
Text,
SafeAreaView,
StatusBar,
FlatList, 
Modal,
TouchableOpacity, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { dimension } from '../../utils'
import Video from 'react-native-video';

const MCQScreen = () => {

    Data = [
        {
            key : 1,
        question :"What is the capital of India",
        option1 : "Gujrat",
        option2: "Punjab",
        option3 : "Delhi",
        option4 : "Uttrakhand",
        answer : "Delhi",
        type:'video',
        sol : true,
        },
        {
            key : 2,
        question : "What is the capital of India",
        option1 : "Gujrat",
        option2 : "Punjab",
        option3: "Delhi",
        type:'mcq',
        option4 : "Uttrakhand",
        },
        {
            key : 3,
        question : "What is the capital of India",
        option1 : "Gujrat",
        option2 : "Punjab",
        option3 : "Delhi",
        option4 : "Uttrakhand",
        type:'mcq',
        },
        {
            key : 4,
        question : "What is the capital of India",
        option1 : "Gujrat",
        option2 : "Punjab",
        option3 : "Delhi",
        option4 : "Uttrakhand",
        type:'video',
        },
        {
            key : 5,
        question : "What is the capital of India",
        option1 : "Gujrat",
        option2 : "Punjab",
        option3 : "Delhi",
        option4 : "Uttrakhand",
        type:'mcq',
        },
        {
            key : 6,
        question : "What is the capital of India",
        option1 : "Gujrat",
        option2 : "Punjab",
        option3 : "Delhi",
        option4 : "Uttrakhand",
        type:'video',
        },
    ]
    

    return(

        <View
        style={{
            flex : 1,
            backgroundColor : "#4cd4ca"
         }}>
         <StatusBar backgroundColor = "#4cd4ca"></StatusBar>
         <View
         style = {{
             height : dimension.height*0.16,
             width : dimension.width,
         }}></View>
         <View
         style={{
             height : dimension.height*0.84,
             width : dimension.width,
             borderTopEndRadius : 20,
             borderTopLeftRadius : 20,
             backgroundColor : "black",
             alignSelf : "flex-end",
             elevation : 2,
             backgroundColor : "white"

         }}>
            <View
            style ={{
                alignSelf : "center",
                alignItems : "center"
            }}>
            <Icon name = "timer" size={30}
            style={{
                backgroundColor : "white",
                padding : 12,
                borderRadius : 500,
                color : "#4cd4ca",
                elevation : 1,
                position : "absolute",
                top : -16
            }}/>
            </View>
            <View
            style ={{
                marginTop : "11%",
                alignSelf : "center"
            }}>
            <Text>08 sec</Text>
            
            </View>

            <FlatList
            data ={Data}
            pagingEnabled
            keyExtractor = {item => `key${item.key}`}
            renderItem = {({item,index}) => (

            

            <View
            
            style = {{
                height : dimension.height*0.77,
                backgroundColor : "white"
            }}>
            <View
            style={{
                width : dimension.width*0.88,
                borderRadius : 20,
                overflow : "hidden",
                paddingLeft : "5%",
                height : dimension.height*0.2,
                backgroundColor : "#4cd4ca",
                alignSelf : "center",
                marginTop : "5%",
                paddingTop : "5%"
                
            }}>
            <View
            style={{
                flexDirection : "row",

            }}>
            <Text
            style={{
                fontSize : 18,
                fontWeight : "600",
                fontFamily : "Poppins-Regular",
                color : "white"
            }}>Question </Text>
            <Text
            style={{
                fontSize : 18,
                fontWeight : "600",
                fontFamily : "Poppins-Regular",
                color : "white"
            }}
            >{index+1}/{Data.length}</Text>
            </View>
            <Text
            style={{
                fontSize : 14,
                color : "rgba(255, 255, 255, 0.6)"

            }}>{item.question}</Text>
            
            <View
            style={{
                height : 120,
                width : 120,
                position : "absolute",
                top : "64%",
                right : "-5%",
                borderRadius : 500,
                backgroundColor : "rgba(255, 255, 255, 0.22) ",
                alignSelf : "flex-end",
                
            }}></View>
            <View
            style={{
                height : 90,
                width : 90,
                position : "absolute",
                top : "76%",
                right : "-3%",
                borderRadius : 500,
                backgroundColor : "rgba(255, 255, 255, 0.22)",
                alignSelf : "flex-end",

                
            }}></View>
            </View>
            <TouchableOpacity>
            <View
            style={{
                width: dimension.width*0.88,
                height : dimension.height*0.09,
                borderRadius : 10,
                elevation : 2,
                backgroundColor : "white",
                marginTop : "4%",
                alignSelf : "center",
                alignItems : "center",
                justifyContent : "center"

            }}>
            <Text>{item.option1}</Text>
             </View>
             </TouchableOpacity>
            
             <TouchableOpacity>
            <View
            style={{
                width: dimension.width*0.88,
                height : dimension.height*0.09,
                borderRadius : 10,
                elevation : 2,
                backgroundColor : "white",
                marginTop : "4%",
                alignSelf : "center",
                alignItems : "center",
                justifyContent : "center"

            }}>
            <Text>{item.option2}</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View
            style={{
                width: dimension.width*0.88,
                height : dimension.height*0.09,
                borderRadius : 10,
                elevation : 2,
                backgroundColor : "white",
                marginTop : "4%",
                alignSelf : "center",
                alignItems : "center",
                justifyContent : "center"

            }}>
            <Text>{item.option3}</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View
            style={{
                width: dimension.width*0.88,
                height : dimension.height*0.09,
                borderRadius : 10,
                elevation : 2,
                backgroundColor : "white",
                marginTop : "4%",
                alignSelf : "center",
                alignItems : "center",
                justifyContent : "center"

            }}>
            <Text>{item.option4}</Text>
            
            
            </View>
            </TouchableOpacity>
           
            


            </View>


            )}
            />

         
         </View>

        </View>


    )
}
export default MCQScreen;