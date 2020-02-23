import React, { Component } from 'react'
import { View, ScrollView, TextInput, TouchableOpacity, Text, Button, KeyboardAvoidingView } from 'react-native'
import { createStackNavigator } from 'react-navigation'

export default class RegisterPage extends Component {
    static navigationOptions = {
        title: 'Register',
        // headerStyle: {
        //     backgroundColor: '#546e7a',
        // },
        // headerTintColor: '#fff', //text color
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
        
    };
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                {/* <View style={styles.container}> */}
                <View syle={styles.registerform}>
                    <ScrollView>
                        <TextInput style={styles.input}
                            placeholder="Enter your name"
                            returnKeyType="next"
                            onSubmitEditing={() => this.emailinput.focus()}
                        />
                        <TextInput style={styles.input}
                            placeholder="Enter your email"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            ref={(input) => this.emailinput = input}
                            autoCorrect={false}
                        />
                        <TextInput style={styles.input}
                            placeholder="Enter password"
                            returnKeyType="go"
                            secureTextEntry
                            ref={(input) => this.passwordInput = input}
                        />
                        <TouchableOpacity style={styles.buttoncontainer}
                        onPress={()=>this.props.navigation.navigate('Flex')}
                        >
                            <Text style={styles.buttontext}> Sign Up </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* </View> */}
            </KeyboardAvoidingView>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    registerform: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'white',
        borderColor: '#1abc9c',
        borderWidth: 1,
        marginBottom: 20,
        color: '#34495e'
    },
    buttoncontainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#1abc9c',
        paddingVertical: 10,
        justifyContent: 'center',
    },
    buttontext: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20
    }
}