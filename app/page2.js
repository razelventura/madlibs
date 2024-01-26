// page2.js

//Mobile App Devt (CIT2269) Assignment 1
//author: Razel Ventura, s0541328
//brief: This page shows the results of the madlib. It contains a signature box, and the hall pass label rotated on the left side. 
  //The date of generation is also automatically printed.

import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';
import Signature from 'react-native-signature-canvas';

export default function Page() {
    const params = useLocalSearchParams();
    const { noun, event, name } = params;

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    const signedLabel = 'SIGNED:';

    const hallPassImage = require('../assets/hallpassimage.png'); 

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={() => {  }}>
                   <Link href="/"> <Text style={Styles.backButton,{fontSize: 18, color: 'blue'}}>Back</Text></Link>
                </TouchableOpacity>
            </View>
            <View style={Styles.content}>
                <View style={Styles.hallPassSide}>
                    <Text style={Styles.hallPassText}>HALL PASS</Text>
                    <Image
                        source={hallPassImage}
                        style={Styles.hallPassImage} 
                        resizeMode="contain" 
                    />
                </View>
                <View style={Styles.madLibsSide}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30 }}>MADLIBS {"\n"}</Text>
                    <Text style={Styles.madLibsText}>Date: {formattedDate}{"\n\n"}</Text>
                    <Text style={Styles.madLibsText}>{name} is too cool</Text>
                    <Text style={Styles.madLibsText}>for {noun} class.</Text>
                    <Text style={Styles.madLibsText}>Instead she/he will be</Text>
                    <Text style={Styles.madLibsText}>attending the {event}.{"\n"}</Text>

                    <Text style={Styles.madLibsText}>{signedLabel}</Text>
                    <Signature style={{ width: '90%' }}
                        webStyle={`.m-signature-pad--footer {display: none; margin: 0px;} .m-signature-pad {box-shadow: none;}`}
                    />
                </View>
            </View>
        </View>
    );
}
