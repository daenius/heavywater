import React from 'react';
import {Block, Card, Columns, Heading} from "react-bulma-components";

interface ItemProp {
    name: string;
    description: string;
    type: string;
}

export const hardcodedItems: Array<ItemProp> = [{
    name: "TB-4 JB",
    type: "Bridge",
    description: "Always good"
}, {
    name: "DP159 Evolution",
    type: "Bridge",
    description: "Always good"
}, {
    name: "TB-6 Distortion",
    type: "Bridge",
    description: "Always good"
}]

class CardContent extends React.Component<ItemProp> {
    constructor(props: ItemProp) {
        super(props);
    }

    render() {
        return (
            <Block>
                <Columns multiline={true} vCentered={true} textAlign={"left"}><Columns.Column size={"one-quarter"}><Heading size={6}>Type</Heading></Columns.Column><Columns.Column narrow={true}>{this.props.type}</Columns.Column></Columns>
                <Columns multiline={true} vCentered={true} textAlign={"left"}><Columns.Column size={"one-quarter"}><Heading size={6}>Description</Heading></Columns.Column><Columns.Column narrow={true}>{this.props.description}</Columns.Column></Columns>
            </Block>)
            ;
    }
}

export class DecoCard extends React.Component<ItemProp> {
    constructor(props: ItemProp) {
        super(props);
    }

    render() {
        return (<Card><Card.Header.Title>{this.props.name}</Card.Header.Title><Card.Content>{new CardContent(this.props).render()}</Card.Content></Card>)
    }
}
