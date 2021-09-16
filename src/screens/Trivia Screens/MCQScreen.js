import React, {useState, useEffect} from 'react'
import { View,
Text,
SafeAreaView,
StatusBar,
FlatList, 
Modal,
TouchableOpacity, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { dimension } from '../../utils'

const MCQScreen = ({navigation}) => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [timer , setTimer] = useState(10)


    useEffect(() => {

        if (timer == 0) {

            if (currentQuestionIndex == data.length-1) {
                navigation.navigate("Dashboard")
                
            }
            else
            setCurrentQuestionIndex(currentQuestionIndex+1)
            setTimer(10)
            
        }

        let interval = setInterval(() => {
          setTimer(lastTimerCount => {
              lastTimerCount <= 1 && clearInterval(interval)
              return lastTimerCount - 1
          })
        }, 1000) //each count lasts for a second
        //cleanup the interval on complete
        return () => clearInterval(interval)
      },)



    const validateAnswer = (selectedOption) => {
        let correct_option = data[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        console.log(selectedOption)
        setCorrectOption(correct_option);
        
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        console.log("done")
        console.log(score)

        if (currentQuestionIndex == data.length-1) {
            navigation.navigate("Dashboard")
            
        }
        else {
            setCurrentQuestionIndex(currentQuestionIndex+1)
            setTimer(10)
        }
    }

    data = [
        {
            question: "What’s the biggest planet in our solar system?",
            options: ["Jupiter","Saturn","Neptune","Mercury"],
            correct_option: "Jupiter"
        },
        {
            question: "What attraction in India is one of the famus in the world?",
            options: ["Chand Minar","Taj Mahal","Stadium"],
            correct_option: "Taj Mahal"
        },
        {
            question: "What land animal can open its mouth the widest?",
            options: ["Alligator","Crocodile","Baboon","Hippo"],
            correct_option: "Hippo"
        },
        {
            question: "What is the largest animal on Earth?",
            options: ["The African elephant","The blue whale","The sperm whale","The giant squid"],
            correct_option: "The blue whale"
        },
        {
            question: "What is the only flying mammal?",
            options: ["The bat","The flying squirrel","The bald eagle","The colugo"],
            correct_option: "The bat"
        }
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
            <Text>{timer} sec</Text>
            
            </View>

           

            

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
            >{currentQuestionIndex + 1}/{data.length}</Text>
            </View>
            <Text
            style={{
                fontSize : 14,
                color : "rgba(255, 255, 255, 0.6)"

            }}>{data[currentQuestionIndex].question}</Text>
            
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

            {
                data[currentQuestionIndex]?.options.map((option,index) => (
            <TouchableOpacity
            onPress={() => validateAnswer(option)}>
            <View
            key = {index}
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
            <Text>{option}</Text>
             </View>
             </TouchableOpacity>
             ))}
            
               
           
            


            </View>


         

         
         </View>

        </View>


    )
}
export default MCQScreen;