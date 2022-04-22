import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Typography, Grid, TextField, Button, Box} from '@mui/material';
import store from "../../store/tasks";
import ModalAddTask from "../ModalAddTask/ModalAddTask";
import AddTaskIcon from '@mui/icons-material/AddCircle';
import TaskPaper from "../TaskPaper/TaskPaper";

import styles from "./style.css";


function TodoList(){
    let jsx;
    let [searchTask, setSearchTask] =useState(""); //Строка поиска
    let filterTasks; //Массив отфильтрованных задач

    const [modalAddOpen, setModalAddOpen] = React.useState(false); //Модальное окно добавления задачи

    function changeSearchTask(e){   //Отслеживание изменений в поисковой строке. 
        setSearchTask(e.target.value);
    };

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
        jsx= <Box className={styles.tastBox}>
                {filterTasks.map((el)=>{                    
                    return(
                        <TaskPaper id={el.id} title={el.title} description={el.description} key={el.id}/>
                    )
                })}            
            </Box>;
    } else {
        jsx= <Typography mt={5}>Задачи не найдены</Typography>
    };    

    return(
        <>
            <Grid container spacing={1} className={styles.gridContainer}>
                
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" gutterBottom >
                        Task Desk
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        startIcon={<AddTaskIcon />}
                        onClick={() => setModalAddOpen(true)}                        
                    >
                        Новая задача
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Найти задачу" size="small" variant="standard" onChange={(e)=>changeSearchTask(e)}/>
                    
                </Grid>
                <Grid item xs={12}>
                    {jsx}
                </Grid>                   
            </Grid>

            <ModalAddTask modalOpen={modalAddOpen} modalHandleClose={() => setModalAddOpen(false)}/>
        </>
    );
}

export default observer(TodoList);
