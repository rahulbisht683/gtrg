import {Dimensions, PixelRatio} from 'react-native'
export const dimension = Dimensions.get('screen');
const {width,height} = Dimensions.get('screen')
const widthToDp = number => {
    let givenWidth = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((width*givenWidth)/100);
};
const heightToDp = number => {
    let givenHeight  = typeof number === 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height*givenHeight)/100);
}
export {widthToDp, heightToDp} ;
