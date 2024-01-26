// index.js

//Mobile App Devt (CIT2269) Assignment 1
//author: Razel Ventura, s0541328
//brief: The index page shows a link to the instructions on how to play madlibs.
    //It also contains the hints for the text.There are two buttons: one to generate the hall pass and another to clear the fields.

import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
    const [name, setName] = React.useState("");
    const [noun, setNoun] = React.useState("");
    const [event, setEvent] = React.useState("");

    const clearFields = () => {
        setName("");
        setNoun("");
        setEvent("");
    };

    const hintMadlibsInstruction = 'How to Play Mad Libs \n';

    return (
        <View style={Styles.container}>
            <View style={Styles.headerAssignment}>
                <Text style={Styles.headerAssignmentText}>Assignment 1</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Link href="/page3">
                    <Text style={Styles.linkText}>
                        {hintMadlibsInstruction}
                    </Text>
                </Link>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>Hall Pass</Text>
                <TextInput
                    style={Styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Name"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={setNoun}
                    value={noun}
                    placeholder="Noun"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={setEvent}
                    value={event}
                    placeholder="An Event"
                />
                <Link style={Styles.button} href={{ pathname: "/page2", params: { name, noun, event } }}>
                    <Text style={Styles.buttonText}>Make my hall pass</Text>
                </Link>
                <Pressable style={Styles.button} onPress={clearFields}>
                    <Text>Clear</Text>
                </Pressable>
            </View>
        </View>
    );
}
