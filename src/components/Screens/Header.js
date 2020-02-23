import React, { Component } from 'react';
import {
    Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon,
    Text, Tab, Tabs, TabHeading, Item, Input
} from 'native-base';
import { StyleSheet, View } from 'react-native'
import Tab1 from './Chats';
import Tab2 from '../LoginPage';
import Tab3 from '../LoginPage';
export default class Headerr extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.leftHeaderContainer}>
                        <Text style={styles.logoText}>WhatsApp</Text>
                    </View>
                    <View style={styles.rightHeaderContainer}>
                        <Button transparent >
                            <Icon name='search' style={{color:'#fff'}} />
                        </Button>
                        <Button transparent>
                            <Icon name='chatboxes' style={{color:'#fff'}} />
                        </Button>
                        <Button transparent onPress={() => alert("you clicked me")}>
                            <Icon name='more' style={{color:'#fff'}} />
                        </Button>
                    </View>
                </View>
                {/* <View style={styles.headerSecondContainer}>
                    <Text>Your tab here</Text>
                </View> */}
                <View style={styles.contentContainer}>
                    <Tab1/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    // header: {
    //     // justifyContent:'center',
    //     backgroundColor: '#066454'

    // },
    // tab: {
    //     backgroundColor: '#066454'
    // },
    mainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        // height:50
    },
    headerContainer: {
        // flex: 2,
        height:63,
        paddingTop:30,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#075e54",
        alignItems: "center",
        paddingRight: 5
    },
    headerSecondContainer: {
        // flex: 2,
        height:52,
        // paddingTop:20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#075e54",
        alignItems: "center",
        paddingRight: 5
    },
    leftHeaderContainer: {
        alignItems: "flex-start",
        flexDirection: "row"
    },
    rightHeaderContainer: {
        alignItems: "flex-end",
        flexDirection: "row"
    },
    contentContainer: {
        flex: 6,
    },
    logoText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        alignItems: "flex-start",
        marginLeft: 10
    },
})