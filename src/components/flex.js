import React, { Component } from 'react'
import { View, FlatList, TextInput, ScrollView, Text, Button, Image, StyleSheet, 
    KeyboardAvoidingView,
    AsyncStorage } from 'react-native';
import { Icon } from 'native-base';
import { SafeAreaView  } from 'react-navigation'
export default class FlexBasic extends Component {
    static navigationOptions = {
        title: 'Dashboard',
        headerRight: <Icon onPress={()=>alert("YOu clicked me")} name='contact' style={{fontSize: 40, margin:15}}/>,
        headerLeft: <Icon name='menu' style={{fontSize: 35, margin:15}}/>,
        // gesturesEnabled: false,
        headerStyle: {
            backgroundColor: '#546e7a',
        },
        headerTintColor: '#fff', //text color
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        
    };
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    constructor(props) {
        super();
        this.state = {
            todos: [],
            newTodo: 0,
            check: ''
        }
    }
    handleIncrement() {
        this.setState({
            newTodo: this.state.newTodo + 1
        })
    }
    handleDecrement() {
        this.setState({
            newTodo: this.state.newTodo - 1
        })
    }
    handleChange = (text) => {
        this.setState({
            check: text
        })
    }
    handlePress = () => {
        var joined = this.state.todos.concat(this.state.check)
        this.setState({
            todos: joined,
            check: ''
        })
    }
    render() {
        return (
            <SafeAreaView>
            <ScrollView>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            
                <View style={styles.container}>
                    <View style={styles.setMargin}>
                        <Image source={{ uri: "http://brainworldmagazine.com/wp-content/uploads/2015/07/ForestWalk.jpg", width: '100%', height: 100 }} />
                    </View>
                    <View style={styles.setMargin}>
                        <Button onPress={this.handleIncrement.bind(this)} title="+" color="green">+</Button>
                        <Text style={{ textAlign: 'center' }}>{this.state.newTodo}</Text>
                        <Button onPress={this.handleDecrement.bind(this)} title="-" color="red">-</Button>
                    </View>
                    <View style={styles.setMargin}>
                        <TextInput value={this.state.check} onChangeText={this.handleChange}
                            placeholder="Input Text here..." />
                        <Button color="#841584" onPress={this.handlePress.bind(this)}
                            title="Press Me" />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        {this.state.todos.map(todo =>
                            <Text key={todo}>{todo}</Text>
                        )}
                    </View>
                    <Button title="Sign Out" onPress={this._signOutAsync} />
                </View>
                
            </KeyboardAvoidingView>
            </ScrollView>
            </SafeAreaView>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    setMargin: {
        margin: 20
    }

})
