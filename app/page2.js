// page2.js

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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
                </View>
                <View style={Styles.madLibsSide}>
                    <Text style={Styles.madLibsText}>MADLIBS {"\n\n"}</Text>
                    <Text style={Styles.madLibsText}>Date: {formattedDate}{"\n\n"}</Text>
                    <Text style={Styles.madLibsText}>{name} is too cool</Text>
                    <Text style={Styles.madLibsText}>for {noun} class.</Text>
                    <Text style={Styles.madLibsText}>Instead she/he will be</Text>
                    <Text style={Styles.madLibsText}>attending the {event}.{"\n\n"}</Text>
                    
                    <Text style={Styles.madLibsText}>SIGNED:</Text>
                    <Signature
                        webStyle={`.m-signature-pad--footer {display: none; margin: 0px;} .m-signature-pad {box-shadow: none;}`}
                    />
                </View>
            </View>
        </View>
    );
}
