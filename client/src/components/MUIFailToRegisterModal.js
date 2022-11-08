import {useContext } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';
import Modal from '@mui/material/Modal';
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
export default function MUIFailToRegisterModal(){
    const { auth } = useContext(AuthContext);
    const handleFailRegisterModal = () => {
        auth.hideFailRegisterModal();
    }
    return(
        <Modal open = {auth.failedtoregister}>
            <Box sx = {style}>
                <Alert severity = "error">
                    <AlertTitle>
                        Registration Error
                    </AlertTitle>
                    Failed to Register  - <strong>invalid email or password</strong>
                </Alert>
                <Button onClick = {handleFailRegisterModal}>
                    Close
                </Button>
            </Box>
        </Modal>
    );
}