import React from 'react';

import AppBar from '../../../../components/AppBar';

import {
    Box,
    Description,
} from './styles.ts';

export default function Apresentation() {
    return (
        <>
            <Box>
                <AppBar />
                <Description>
                    <h1 style={{ color: "white", fontSize: "80px" }} >Software Engineer</h1>
                    <h1 style={{ color: "white" }} >Desenvolvedor Full Stack Web e Mobile.</h1>
                </Description>
            </Box>
        </>
    )
}
