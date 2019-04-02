import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Login extends React.Component {
    


    render() {
        return (


            < KeyboardAwareScrollView
                keyboardShouldPersistTaps="always"

                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={{ flexGrow: 1 }}


            >




                <ImageBackground source={require('../images/moon.jpg')} style={{

                    justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'

                }}>


                    <View style={styles.loginform}>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '500', color: 'white', margin: 120 }}>HEXAGON</Text>

                        <TextInput style={styles.textInput}
                            
                            placeholder='Enter your name' />

                        <TextInput style={styles.textInput}
                            

                            placeholder='Enter your password' />


                        <TouchableOpacity style={{ justifyContent: 'center' }}
                            onPress={() => {
                                
                               this.props.navigation.navigate('Second')
                                  }
                                }
                        >

                            <Text style={{ textAlign: 'center', color: 'white', borderRadius: 10, borderWidth: 1, margin: 26, padding: 15, backgroundColor: 'seagreen', flex: 0 }}>Login</Text>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>



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
            position: 'absolute',
            width: '100%',
            height: '100%',

        },


        textInput:
        {


            height: 50,
            borderColor: 'black',
            borderWidth: 2,
            backgroundColor: 'white',
            fontSize: 15,
            padding: 11,

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
        },
        loginform:
        {


            top: 0,
            bottom: 0,
            left: 0,
            right: 0,



        }









    });