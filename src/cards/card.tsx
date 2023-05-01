import React, {CSSProperties} from 'react';
import {Block, Card, Columns, Heading} from "react-bulma-components";

interface ItemProp {
    name: string;
    description: string;
    type: string;
}

interface ItemState {
    style?: CSSProperties | undefined
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
}, {
    name: "DP207 D-Sonic",
    type: "Bridge",
    description: "Always good"
}, {
    name: "TB-5 Custom",
    type: "Bridge",
    description: "Always good"
}, {
    name: "DP255 Transition",
    type: "Bridge",
    description: "Always good"
}]

class CardContent extends React.Component<ItemProp, ItemState> {
    constructor(props: ItemProp) {
        super(props);
    }

    withState(state: ItemState): CardContent {
        this.state = state;
        return this;
    }

    render() {
        return (
            <Block>
                <Columns multiline={true} vCentered={true} textAlign={"left"}><Columns.Column size={"one-quarter"}><Heading size={6} style={this.state.style}>Type</Heading></Columns.Column><Columns.Column
                    narrow={true}>{this.props.type}</Columns.Column></Columns>
                <Columns multiline={true} vCentered={true} textAlign={"left"}><Columns.Column size={"one-quarter"}><Heading size={6} style={this.state.style}>Description</Heading></Columns.Column><Columns.Column
                    narrow={true}>{this.props.description}</Columns.Column></Columns>
            </Block>);
    }
}

const capitolaBackgroundColors: Array<CSSProperties> = [
    {backgroundColor: '#EF7D92', color: '#0F5C8C'},
    {backgroundColor: '#74629A', color: '#F2AE30'},
    {backgroundColor: '#89BCFF', color: '#6B2F73'},
    {backgroundColor: '#66E4F2', color: '#0F5C8C'},
    {backgroundColor: '#F2AB27', color: '#D93280'},
]

interface CardStyle {
    backgroundAndText: CSSProperties;
    header: CSSProperties;
}

const capitola: Array<CardStyle> = capitolaBackgroundColors.map((value: CSSProperties): CardStyle => {
        return {
            backgroundAndText: value, header: {backgroundColor: value.color, color: value.backgroundColor}
        }
    }
)

class Randomer<T> {

    private readonly src: Array<T>;
    private rolls: Array<T>;

    constructor(source: Array<T>) {
        this.src = Array.from(source);
        this.rolls = Array.from(this.src);
    }

    public random(): T {
        const roll: Array<T> = this.rolls.splice(Math.floor(Math.random() * (this.rolls.length - 1)), 1);
        console.log(this.rolls.length)
        if (this.rolls.length <= 0) {
            console.log("refill")
            this.rolls = Array.from(this.src);
        }
        return roll[0];
    }
}

const randomCapitola: Randomer<CardStyle> = new Randomer(capitola)

export class DecoCard extends React.Component<ItemProp> {
    private styles: CardStyle

    constructor(props: ItemProp) {
        super(props);
        this.styles = randomCapitola.random();
    }

    render() {
        return (
            <Card style={this.styles.backgroundAndText} id={this.props.name}>
                <Card.Header.Title style={this.styles.header}>{this.props.name}</Card.Header.Title>
                <Card.Content>{new CardContent(this.props).withState({style: this.styles.backgroundAndText}).render()}</Card.Content>
            </Card>)
    }
}
