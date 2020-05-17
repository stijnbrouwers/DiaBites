import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ImagePropTypes
  } from 'react-native';

export default function Header(props : any) {
    return <Text style={styles.title}>{props.title}</Text>
}

const styles = StyleSheet.create({
    title: {
      fontSize: 32,
      fontWeight: '800',
      textAlign: 'center',
      textAlignVertical: 'center',
      height: 100,
      backgroundColor: '#0099ff',
      color: 'white'
    }
  })