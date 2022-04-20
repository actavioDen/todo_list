import React, { useState } from "react";
import {Button, Grid, TextField, Typography} from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import storage from "../../store/tasks";



function AddTaskWindow({modalHandleClose}){
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");

    function onChangeTitle(e){
        setTitle(e.target.value);
    };

    function onChangeDesc(e){
        setDescription(e.target.value);
    };

    function addTask(){
        if(title!="" && description!=""){
            storage.addTasks(title, description);
            modalHandleClose();
        };
        
    }

    return(
        <Grid container spacing={1}>
            <Grid item xs={12} sx={{textAlign: "center"}}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Новая задача
                </Typography>
            </Grid> 
            <Grid item xs={12}>
                <TextField id="outlined-basic" label="Заголовок" variant="outlined" onChange={(e)=>onChangeTitle(e)} sx={{width: 300}}/>
            </Grid> 
            <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Подробности"
                    multiline
                    rows={4}
                    onChange={(e)=>onChangeDesc(e)}
                    sx={{width: 300}}
                />
            </Grid> 
            <Grid item xs={12} sx={{textAlign: "center"}}>
                <Button 
                    variant="contained" 
                    startIcon={<AddTaskIcon />}
                    onClick={addTask}
                >
                    Добавить
                </Button>
            </Grid>                         
        </Grid>
        
    );
}

export default AddTaskWindow;