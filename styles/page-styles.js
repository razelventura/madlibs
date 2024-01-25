import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerAssignment: {
        width: screenWidth, // Full width
        height: screenHeight * 0.1, // 10% of the screen height for a top header
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee', // Light grey background for the header
        borderBottomWidth: 1, // Add a bottom border to separate the header
        borderColor: 'black',
    },
    headerAssignmentText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    formContainer: {
        flex: 1, // Take up all space after the header
        alignItems: 'center', // Center children horizontally
        justifyContent: 'center', // Center children vertically
        paddingVertical: 20, // Add some vertical padding
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 5,
        width: '80%', // Input field takes up 80% of the screen width
    },
    button: {
        borderRadius: 20, // Make the buttons rounded
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500', // Semi-bold
    },
    linkText: {
        textDecorationLine: 'underline',
        color: 'blue',
        fontSize: 16,
        marginVertical: 10,
    },
    header: {
        height: screenHeight * 0.1, // 10% of the screen height
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    backButton: {
        // Style for your back button
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
    hallPassSide: {
        width: '20%', // 20% of the screen width
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#eee', // Temporary background color for visibility
    },
    hallPassText: {
        width: 400,
        fontSize: 50,
        fontWeight: 'bold',
        transform: [
            { rotate: '-90deg' },
            // Assuming the container has enough height,
            // these values might need to be adjusted to fit your specific UI.
            { translateY: 0 }, // Adjust this value to align the text as in the image
            { translateX: 10 }, // Adjust this value as well to center the text
        ],
    },
    madLibsSide: {
        width: '80%', // 80% of the screen width
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
});

export default styles;
