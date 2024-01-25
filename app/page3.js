// page3.js
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page3() {
    return (
        <ScrollView contentContainerStyle={Styles.container, Styles.centeredContent}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>How to Play Mad Libs</Text>
            <Text style={{ fontSize: 16, textAlign: 'center', marginHorizontal: 20 }}>
                Welcome to Mad Libs! Here's how to play:
                {"\n\n"}
                1. Fill in the blanks with any word that fits the category: name, noun, and an event.
                {"\n"}
                2. Don't think too hard about it -- the sillier, the better!
                {"\n"}
                3. Once you've filled in all the blanks, click "Make my hall pass" then read your hall pass out loud.
                {"\n"}
                4. Click the back button to create a new hall pass. If you make a mistake, just click "Clear" to restart the fields.
                {"\n\n"}
                That's it! Have fun!
            </Text>
            <Link href="/" style={[Styles.button, { marginTop: 20 }]}>
                <Text style={ {textAlign: 'center'}}>Go Back to Creating Hall Pass</Text>
            </Link>
        </ScrollView>
    );
}
