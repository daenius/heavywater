import {Component} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button, Columns, Container, Level} from 'react-bulma-components';
import {DecoCard, hardcodedItems} from "./cards/card.tsx";
import 'bulma/css/bulma.min.css';
import {Icon} from "@cloudscape-design/components";

class App extends Component {
    state = {count: 0}

    setCount = (operator: (input: number) => number, operand: number) => {
        this.setState(() => ({count: operator(operand)}))
    }

    render() {
        return (<Container>
                <Level><Level.Item><Columns centered={true} vCentered={true}>
                    <Columns.Column><a href="https://vitejs.dev" target="_blank"><Icon url={viteLogo} size={"large"}/></a></Columns.Column>
                    <Columns.Column><a href="https://react.dev" target="_blank"><Icon url={reactLogo} size={"large"}/></a></Columns.Column>
                </Columns></Level.Item></Level>
                <Level>
                    <Level.Item><Button color={"primary"} onClick={() => {
                        this.setCount(input => {
                            return input + 1
                        }, this.state.count);
                    }}>I was clicked {this.state.count} times</Button></Level.Item>
                </Level>
                <Columns multiline={true}>{hardcodedItems.map(item => <Columns.Column key={item.name} size={5}>{new DecoCard(item).render()}</Columns.Column>)}</Columns>
            </Container>
        )
    }
}

export default App
