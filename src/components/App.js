import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

//extracting global sass variables and parsing to a js object 
const sassGlobals = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');

const Wrapper = styled.div`
    background-color: ${props => props.theme.testBlue};
`; 

class App extends React.Component {
    render() {
        return (
            <ThemeProvider theme={sassGlobals}>
                <Wrapper>If your reading this, the boiler plate works!!</Wrapper>
            </ThemeProvider>
        )
    }
}

export default App;