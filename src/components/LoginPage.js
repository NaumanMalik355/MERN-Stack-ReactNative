
// import React from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import * as Permissions from 'expo-permissions';
// import { Camera } from 'expo-camera';


// export default class CameraExample extends React.Component {
// state = {
//     hasCameraPermission: null,
//     type: Camera.Constants.Type.back,
// };

// async componentDidMount() {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });
// }

// render() {
//     const { hasCameraPermission } = this.state;
//     if (hasCameraPermission === null) {
//     return <View />;
//     } else if (hasCameraPermission === false) {
//     return <Text>No access to camera</Text>;
//     } else {
//     return (
//         <View style={{ flex: 1 }}>
//         <Camera style={{ flex: 1 }} type={this.state.type}>
//             <View
//             style={{
//                 flex: 1,
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//                 justifyContent:'center'
//             }}>
//             <TouchableOpacity
//                 style={{
//                 flex: 0.1,
//                 alignSelf: 'flex-end',


//                 }}
//                 onPress={() => {
//                 this.setState({
//                     type:
//                     this.state.type === Camera.Constants.Type.back
//                         ? Camera.Constants.Type.front
//                         : Camera.Constants.Type.back,
//                 });
//                 }}>
//                 <Text style={{ fontSize: 18, marginBottom: 10, color: 'white', textAlign:'center' }}> Flip </Text>
//             </TouchableOpacity>
//             </View>
//         </Camera>
//         </View>
//     );
//     }
// }
// }






import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, Button, KeyboardAvoidingView, Image } from 'react-native'
import { createStackNavigator,SafeAreaView  } from 'react-navigation'

export default class LoginPage extends Component {

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    static navigationOptions = {
        title: 'SignIn',
        headerStyle: {
            backgroundColor: '#546e7a',
        },
        headerTintColor: '#fff', //text color
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        
    };
    render() {
        return (
            
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

                <View style={styles.container}>
                    <View syle={styles.textfields}>
                        <TextInput style={styles.input}
                            placeholder="username"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <TextInput style={styles.input}
                            placeholder="password"
                            returnKeyType="go"
                            secureTextEntry
                            ref={(input) => this.passwordInput = input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <TouchableOpacity style={styles.buttoncontainer}
                            onPress={() => this.props.navigation.navigate('Flex')}>
                            <Text style={styles.buttontext}> Login </Text>
                        </TouchableOpacity>
                        <Text style={styles.textcontainer}
                            //onPress={() => this.props.navigation.navigate('SignUp')}
                            onPress={this._signInAsync}
                        >Register Here</Text>
                    </View>
                </View>
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
    },
    textcontainer: {
        color: '#1abc9c',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10
    }
}