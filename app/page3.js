// page3.js

//Mobile App Devt (CIT2269) Assignment 1
//author: Razel Ventura, s0541328
//brief: Page3 just contains the instructions on how to play madlibs. It has a button that will take the user to the index.

import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';

const MadLibsInstructions = () => {
    return (
        <>
            <Text>Welcome to Mad Libs! Here's how to play:</Text>
            <Text>{'\n\n'}</Text>
            <Text>1. Fill in the blanks with any word that fits the category: name, noun, and an event.</Text>
            <Text>{'\n'}</Text>
            <Text>2. Don't think too hard about it -- the sillier, the better!</Text>
            <Text>{'\n'}</Text>
            <Text>3. Once you've filled in all the blanks, click "Make my hall pass" then read your hall pass out loud.</Text>
            <Text>{'\n'}</Text>
            <Text>4. Click the back button to create a new hall pass. If you make a mistake, just click "Clear" to restart the fields.</Text>
            <Text>{'\n'}</Text>
            <Text>That's it! Have fun</Text>
        </>
    );
};

export default function Page3() {
    return (
        <ScrollView contentContainerStyle={Styles.container, Styles.centeredContent}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>How to Play Mad Libs</Text>
            <Text style={{ fontSize: 16, textAlign: 'center', marginHorizontal: 20 }}>
                <MadLibsInstructions />
            </Text>
            <Link href="/" style={[Styles.button, { marginTop: 20 }]}>
                <Text style={ {textAlign: 'center'}}>Go Back to Creating Hall Pass</Text>
            </Link>
        </ScrollView>
    );
}
