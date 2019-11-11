import React from 'react';
import { StatusBar } from 'react-native';
import './config/Reactotron';

import Routes from './routes';
// console.tron.log('Teste');

export default function App() {
    return (
        <>
            <StatusBar />
            <Routes />
        </>
    );
}
