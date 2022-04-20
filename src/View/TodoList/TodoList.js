import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import {Divider, Paper, Typography, Grid, TextField, Button, Box, IconButton} from '@mui/material';
import store from "../../store/tasks";
import ModalAddTask from "../ModalAddTask/ModalAddTask";
import AddTaskIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function TodoList(){
    let jsx;
    let [searchTask, setSearchTask] =useState(""); //Строка поиска
    let filterTasks; //Массив отфильтрованных задач

    const [modalOpen, setModalOpen] = React.useState(false); //Модальное окно
    const modalHandleOpen = () => setModalOpen(true);
    const modalHandleClose = () => setModalOpen(false);

    function changeSearchTask(e){   //Отслеживание изменений в поисковой строке. 
        setSearchTask(e.target.value);
    };

    function removeTask(id){
        store.removeTasks(id);
        console.log("Сработал remove");
    }

    if(searchTask!=""){ // Фильтрация зачад по поисковой строке.
        filterTasks = store.tasks.filter((el)=>{
            let regexp = new RegExp(`${searchTask}`, 'ui');
            let resTitle = regexp.test(el.title);
            let resDesk = regexp.test(el.description);
            if(resTitle || resDesk) return el;
        })
    } else{
        filterTasks = store.tasks; // Если поисковая строка пустая- отобразить все задачи
    };

    if(filterTasks.length){
        jsx= <Box sx={{display:"flex", justifyContent:"center", flexWrap: "wrap"}}>
            {filterTasks.map((el)=>{
                        return(
                            <Paper elevation={3} sx={{padding: 3, margin: 2, display: "flex", flexDirection: "column"}}>
                                    <Typography component="p" variant="h6">
                                        {el.title}
                                    </Typography>
                                         <Divider/>                                 
                                    <Typography>
                                        {el.description}
                                    </Typography> 

                                    <IconButton 
                                        variant="outlined" 
                                        onClick={()=>removeTask(el.id)}
                                        sx={{color: "#B22222", marginLeft: "5px", alignSelf:"flex-end"}}
                                >
                                    <DeleteOutlineIcon/>
                                </IconButton> 
                            </Paper>
                        )
                    })}
            
            </Box>;
    } else {
        jsx= <Typography mt={5}>Задачи не найдены</Typography>
    };    

   
    return(
        <>
            <Grid container spacing={1} sx={{marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
                
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" gutterBottom sx={{textAlign: "center"}}>
                        Task Manager
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        startIcon={<AddTaskIcon />}
                        onClick={modalHandleOpen}                        
                    >
                        Новая задача
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Поиск по задачам" size="small" variant="standard" onChange={(e)=>changeSearchTask(e)}/>
                    
                </Grid>
                <Grid item xs={12}>
                    {jsx}
                </Grid>                   
            </Grid>

            <ModalAddTask modalOpen={modalOpen} modalHandleClose={modalHandleClose}/>
        </>
    );
}

export default observer(TodoList);
