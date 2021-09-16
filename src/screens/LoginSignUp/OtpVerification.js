
import React, {useState} from 'react'
import {View,
 Text,
StyleSheet,
SafeAreaView,
StatusBar,
TouchableOpacity,} from 'react-native'

 import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
    
    
  } from 'react-native-confirmation-code-field'; 

const CELL_COUNT = 6

const OtpVerification = ({navigation,route}) => {


  const [value, setValue] = useState();
  const [confirm , setConfirm] = useState(null)
  const vvff = route.params.confirmation
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  async function confirmCode(value) {

    try {
      console.log(value)
      console.log(vvff)
      await vvff.confirm(value);
      console.log('phone Verification Success')
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
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
          rootStyle={styles.codeFieldRoot}
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
          {confirmCode(value)}
        
          
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
  );
};
export default OtpVerification;

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'white'},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
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
});

