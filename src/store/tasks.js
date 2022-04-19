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
            ready: false
        })
    };
}

export default new tasks();