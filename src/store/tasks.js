import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import nextId from "react-id-generator";

class tasks{
    constructor(){
        makeAutoObservable(this);
    }

    tasks=[{
                id: 101,                
                description: 'Магазин "Продукты 24", 2.5%'
            },
            {
                id: 102,                
                description: 'В пятницу вечером'
            },
            {
                id: 103,                
                description: 'Отделение СДЭК на Консомольской 24. При себе иметь паспорт'
            },
            {
                id: 104,                
                description: 'Жду ответ о клиента с решением о покупке ПК'
            }
            
        ];

    addTask(description){ // Добавление новой задачи
        this.tasks.push({
            id: nextId(),                
            description: description
        })
    };

    removeTasks(id){    //Удалить задачу
        this.tasks.forEach((el, index)=> { //Определить индекс элемента в массиве
            if(el.id===id) {
                this.tasks.splice(index, 1);
            };      
        
        });
    };

    getByID(id){
        return this.tasks.find(el=>{
            return el.id==id;
        })
    };

    editTask(id, newDescription){
        if(newDescription!=""){
            let el = this.getByID(id);
            el.description = newDescription; 
        };
        
    }
}

export default new tasks();