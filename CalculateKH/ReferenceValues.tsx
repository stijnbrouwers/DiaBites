import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
  } from 'react-native';

export default function ReferenceValues() {
    const [units, setUnits] = useState(0);
    const [kh, setKH] = useState(0);
    return (
      <View>
        <Text>De referentiewaarden vormen de basis voor de berekening. Dit zijn de waarden die je typisch van een voedingsdeskundige krijgt 
          of kan aflezen van de verpakking.</Text>
        <Text>Enkele voorbeelden:</Text>
        <Text style={styles.highlight}>Voorbeeld 1</Text>
        <Text>1 boterham = 7 KH</Text>
        <Text>   referentie eenheid = 1</Text>
        <Text>   referentie KH = 7</Text>
        <Text style={styles.highlight}>Voorbeeld 2</Text>
        <Text>100 gr fruitpap = 12 KH</Text>
        <Text>   referentie eenheid = 100</Text>
        <Text>   referentie KH = 12</Text>
        <Text style={styles.highlight}>Voorbeeld 3</Text>
        <Text>10 ml AR melk = 0.78 KH</Text>
        <Text>   referentie eenheid = 10</Text>
        <Text>   referentie KH = 0.78</Text>
          
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TextInput
              style={{height: 40}}
              placeholder="Referentie eenheid"
              onChangeText={input => setUnits(parseFloat(input))}
          />
          <Text style={styles.textInputLabel}>gr/ml/boterhammen/...</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TextInput
              style={{height: 40}}
              placeholder="Referentie KH"
              onChangeText={input => setKH(parseFloat(input))}
          /><Text style={styles.textInputLabel}>KH</Text>
        </View>
        { kh && units ? <Text style={styles.result}>1 gr = {kh/units}</Text> : <></>}
      </View>
    );
  }

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  textInputLabel: {
    marginTop: 10
  },
  result: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  }
})