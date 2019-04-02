import React from 'react';
import {
    TextInput,
    StyleSheet,
    View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Keyboard extends React.Component {
    render() {
        return (
        

            <KeyboardAwareScrollView
                style={{ backgroundColor: '#4c69a5' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
<TextInput style={styles.textInput}

placeholder='Enter your name' />

<TextInput style={styles.textInput} placeholder='Enter your password' />


<TextInput style={styles.textInput}

                            placeholder='Enter your name' />

                        <TextInput style={styles.textInput} placeholder='Enter your password' />


                        <TextInput style={styles.textInput}

placeholder='Enter your name' />

<TextInput style={styles.textInput} placeholder='Enter your password' />











            </KeyboardAwareScrollView>
            




        );

    }



}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',


        },


        textInput:
        {


            height: 50,
            borderColor: 'black',
            borderWidth: 1,
            backgroundColor: 'white',
            fontSize: 15,
            padding: 11,
            borderWidth: 2,
            fontWeight: 'bold',
            margin: 20,


        },
        button: {
            height: 50,
            width: '80%',
            borderWidth: 1,
            padding: 11,
            borderColor: 'black',
            backgroundColor: 'red',
            alignContent: 'center',
            marginLeft: 30,
            color: 'white',
        }
    });