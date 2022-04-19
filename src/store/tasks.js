import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import nextId from "react-id-generator";

class tasks{
    constructor(){
        makeAutoObservable(this);
    }

    tasks=[];

    addTasks(title, description){ // Добавление новой задачи
        this.tasks.push({
            id: nextId(),                // Как уникализировать ИД?
            title: title,
            description: description,
            сompleted: false
        })
    };

    changeCompleted(id){
        let el= this.getByID(id);
        el.сompleted ? el.сompleted=false : el.сompleted = true;
        
    }

    getByID(id){
       return this.tasks.find(el=>{
            return el.id==id;
        })
    }
}

export default new tasks();