//page-styles.js

//Mobile App Devt (CIT2269) Assignment 1
//author: Razel Ventura, s0541328
//brief: This file contains most of the styling used in index.js, page2.js, and page3.js

import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerAssignment: {
        width: screenWidth, 
        height: screenHeight * 0.1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee', 
        borderBottomWidth: 1, 
        borderColor: 'black',
    },
    headerAssignmentText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 5,
        width: '80%', 
    },
    button: {
        borderRadius: 20, 
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500', 
    },
    linkText: {
        textDecorationLine: 'underline',
        color: 'blue',
        fontSize: 16,
        marginVertical: 10,
    },
    header: {
        height: screenHeight * 0.1, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
    hallPassSide: {
        width: '20%', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eee',
    },
    hallPassText: {
        width: 400,
        fontSize: 50,
        fontWeight: 'bold',
        transform: [
            { rotate: '-90deg' },
            { translateY: 0 },
            { translateX: 10 },
        ],
    },
    madLibsSide: {
        width: '80%', 
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    madLibsText: {
        fontSize: 22,
    },
    centeredContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hallPassImage: {
        width: 100, 
        height: 65,  
        transform: [
            { rotate: '-90deg' },
            { translateY: 0 },
            { translateX: 180 },
        ],
    },

});

export default styles;
