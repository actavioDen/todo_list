import React from "react";
import { useState } from "react";
import {List, ListItem, ListItemText, Checkbox } from '@mui/material'

function TodoList(){
    const [tasks, setTasks] = useState([
        {
        id: 101,
        title: "Купить молоко",
        description: "Магазин Аленка, утром",
        ready: false
        },
        {
            id: 102,
            title: "Купить молоко",
            description: "Магазин Аленка, утром",
            ready: true
            }
    ]);


    function addTasks(title, description){ // Добавление новой задачи
        let newTasks = tasks.push({
            id: 102,
            title: title,
            description: description,
            ready: false
        });
        setTasks(newTasks);
    };

    let jsx= <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {tasks.map((el)=>{
                    return(
                        <ListItem alignItems="flex-start" key={el.id}>
                            <Checkbox checked={el.ready} />
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

    return(
        <>
            {jsx}
        </>
    );

}




export default TodoList;