import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import {List, ListItem, ListItemText, Checkbox, Typography, Grid, TextField } from '@mui/material';
import AddTaskWindow from "../AddTaskWindow/AddTaskWindow";
import store from "../../store/tasks";


function TodoList(){
    let jsx;
    if(store.tasks.length){
        jsx= <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {store.tasks.map((el)=>{
                    return(
                        <ListItem alignItems="flex-start" key={el.id}>
                            <Checkbox checked={el.сompleted} onChange={()=>store.changeCompleted(el.id)}/>
                            <ListItemText
                                primary={el.title}
                                secondary={
                                    <>                                    
                                    {el.description}    
                                    </>
                                }
                                />
                        </ListItem>
                    )
                })}
            </List>;
    } else {
        jsx= <Typography mt={5}>Задачи отсутсвуют</Typography>
    };    

    return(
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Мои задачи
                </Typography>
                <TextField id="outlined-basic" label="Поиск по задачам" variant="outlined" />
                {jsx}
            </Grid>
            <Grid item xs={4}>
                <AddTaskWindow/>                
            </Grid>                     
        </Grid>
    );
}

export default observer(TodoList);