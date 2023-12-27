import {Dimensions, PixelRatio} from 'react-native';
const widthPercentageToDP = (widthPercent: string | number) => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  if (typeof widthPercent === 'string') {
    const elemWidth = parseFloat(widthPercent );
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  }else{
    const elemWidth = widthPercent ;
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
 
  }
};
const heightPercentageToDP = (heightPercent: string | number) => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  if (typeof heightPercent === 'string') {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
  }else{
    const elemWidth = heightPercent ;
    return PixelRatio.roundToNearestPixel((screenHeight * elemWidth) / 100);
 
  }
};
export {widthPercentageToDP as WP, heightPercentageToDP as HP};
