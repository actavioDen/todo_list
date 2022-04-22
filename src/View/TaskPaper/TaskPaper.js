import React from 'react';
import {Divider, Paper, IconButton, Typography} from  '@mui/material';
import store from "../../store/tasks";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import styles from "./style.css";

function TaskPaper({id, title, description, setModalEditOpen }){
    return(
            <Paper elevation={3} key={id} className={styles.paper} sx={{background: "#FDFDC1"}}>
                <Typography component="p" variant="h6">
                    {title}
                </Typography>
                    <Divider/>                                 
                <Typography>
                    {description}
                </Typography> 

                <div className={styles.paperButtonsPanel}>
                <IconButton 
                        variant="outlined"
                        onClick={setModalEditOpen}
                    >
                        <EditIcon className={styles.buttonEdit}/>
                    </IconButton> 

                    <IconButton 
                        variant="outlined" 
                        onClick={()=>store.removeTasks(id)}
                    >
                        <DeleteOutlineIcon className={styles.buttonRemove}/>
                    </IconButton>    
                </div>
        </Paper>
    );
}

export default TaskPaper;