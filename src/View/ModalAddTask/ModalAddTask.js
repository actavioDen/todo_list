import {Modal, Button, Box, Typography, Container} from '@mui/material';
import AddTaskWindow from "../AddTaskWindow/AddTaskWindow";

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

function ModalAddTask({modalOpen, modalHandleClose}){


    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={modalHandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>
                    <AddTaskWindow modalHandleClose={modalHandleClose}/>
                </Box>
            </Modal>
        </div>
    );

}

export default ModalAddTask;