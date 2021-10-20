import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App2 from './App2';
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <ChakraProvider>
    {/* <App /> */}
    <App2 />
  </ChakraProvider>,
  document.getElementById('root')
);
