import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
const personList=[
    {
        time:'3:43 pm'
    },
    {
        time:'4:43 am'
    }
]
export default class ListAvatarExample extends Component {
render() {
   
    return (
    <Container>
        <Content>
        <List>
            <ListItem avatar>
            <Left>
                <Thumbnail source={require('../images/malik1.jpg')} />
            </Left>
            <Body>
                <Text>Nauman Malik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
                <Text note>3:43 pm</Text>
            </Right>
            </ListItem>
        </List>
        <List>
                <ListItem avatar>
                <Left>
                    <Thumbnail source={require('../images/mark.jpg')} />
                </Left>
                <Body>
                    <Text>Malik G</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>3:43 pm</Text>
                </Right>
                </ListItem>
            </List>
            <List>
                <ListItem avatar>
                <Left>
                    <Thumbnail source={require('../images/pic1.jpg')} />
                </Left>
                <Body>
                    <Text>Prettin Kjas</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>3:43 pm</Text>
                </Right>
                </ListItem>
            </List>
            <List>
                <ListItem avatar>
                <Left>
                    <Thumbnail source={require('../images/billgate.jpg')} />
                </Left>
                <Body>
                    <Text>Shan Malik</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>3:43 pm</Text>
                </Right>
                </ListItem>
            </List>
            <List>
                <ListItem avatar>
                <Left>
                    <Thumbnail source={require('../images/128.jpg')} />
                </Left>
                <Body>
                    <Text>Amazon Name</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>3:43 pm</Text>
                </Right>
                </ListItem>
            </List>
            <List>
                <ListItem avatar>
                <Left>
                    <Thumbnail source={require('../images/malik2.jpg')} />
                </Left>
                <Body>
                    <Text>Malik 2</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>3:43 pm</Text>
                </Right>
                </ListItem>
            </List>
        </Content>
    </Container>
    );
}
}