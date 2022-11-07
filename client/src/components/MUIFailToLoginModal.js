import {useContext } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';
import Modal from '@mui/material/Modal';
//import { AlertTitle, Button } from '@mui/material';
import AuthContext from '../auth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function MUIFailToLoginModal(){
    const { auth } = useContext(AuthContext);
    const handleFailLoginModal = () => {
        auth.hideFailLoginModal();
    }
    return(
        <Modal open = {auth.failedtologin}>
            <Box sx = {style}>
                <Alert severity = "error">
                    <AlertTitle>
                        Login Error
                    </AlertTitle>
                    Failed to Login  - <strong>incorrect password or email</strong>
                </Alert>
                <Button onClick = {handleFailLoginModal}>
                    Close
                </Button>
            </Box>
        </Modal>
    );
}