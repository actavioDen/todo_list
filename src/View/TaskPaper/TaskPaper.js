import React from 'react';
import {Paper, IconButton, TextField} from  '@mui/material';
import storage from "../../store/tasks";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import styles from "./style.css";

function editTask(id, e){
    storage.editTask(id, e.target.value);
}

function TaskPaper({id, description }){
    return(
            <Paper elevation={3} key={id} className={styles.paper} sx={{background: "#FDFDC1"}}>
                <TextField 
                defaultValue={description} 
                multiline rows={5} 
                variant="standard" 
                onChange={(e)=>editTask(id, e)}
                placeholder="Новая задача"
                />

                <div className={styles.paperButtonsPanel}>

                    <IconButton 
                        variant="outlined" 
                        onClick={()=>storage.removeTasks(id)}
                    >
                        <DeleteOutlineIcon className={styles.buttonRemove}/>
                    </IconButton>    
                </div>
        </Paper>
    );
}

export default TaskPaper;