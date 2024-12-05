
import {Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles';
import { useState } from 'react';
import { Dropdown } from 'react-native-paper-dropdown';
import { PaperProvider } from 'react-native-paper';
import InputSpinner from 'react-native-input-spinner';

const OPTIONS = [
  { label: 'Thinkpad', value: 'thinkpad'},
  { label: 'iPhone', value: 'iphone'  },
  { label: 'Chromecast', value: 'chromecast' },
];

const PRICES = {
  [OPTIONS[0].value] : 1030,
  [OPTIONS[1].value] : 800,
  [OPTIONS[2].value] : 80
};

export default function App() {

  //You may get the product price using the dropdown value as a key
  //const testProductPrice = PRICES[dropdownValue];
  //e.g PRICES['thinkpad']  => 1030

  return (

    <PaperProvider>
    <View style={Styles.container}>

      <Text testID='result' style={Styles.result}>Total price: {price_here}</Text>
    </View>
    </PaperProvider>
  );
}

