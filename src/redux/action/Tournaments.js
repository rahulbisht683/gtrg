import database from '@react-native-firebase/database'
import { object } from 'joi'
import { GET_TOURNAMENTS, EMPTY_DATA} from './action.types'

export const getAllTournaments =() =>async(dispatch) => {
    try {
        database()
        .ref(/tournaments/)
        .on('value' , (snapshot) => {
            console.log("Tournament Data" , snapshot.val())
            if(snapshot.val()) {
                dispatch({
                    type : GET_TOURNAMENTS,
                    payload : object.values(snapshot.val())
                });

            }else{
                dispatch({
                    type: EMPTY_DATA,
                    payload : []
                })
            }

        })
    } catch (error) {
        console.log('Error in fetching the data')
        
    }
}