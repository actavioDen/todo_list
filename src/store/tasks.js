import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import nextId from "react-id-generator";

class tasks{
    constructor(){
        makeAutoObservable(this);
    }

    tasks=[{
                id: 101,                // Как уникализировать ИД?
                title: "Купить молоко",
                description: 'Магазин "Продукты 24", 2.5%'
            },
            {
                id: 102,                // Как уникализировать ИД?
                title: "Позвонить друзьям",
                description: 'В пятницу вечером'
            },
            {
                id: 103,                // Как уникализировать ИД?
                title: "Забрать посылку",
                description: 'Отделение СДЭК на Консомольской 24. При себе иметь паспорт'
            },
            {
                id: 104,                // Как уникализировать ИД?
                title: "Проверить почту",
                description: 'Жду ответ о клиента с решением о покупке ПК'
            }
            
        ];

    addTasks(title, description){ // Добавление новой задачи
        this.tasks.push({
            id: nextId(),                // Как уникализировать ИД?
            title: title,
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

    editTask(id, newTitle, newDescription){
        let el = this.getByID(id);
        el.title= newTitle;
        el.description = newDescription;
    }
}

export default new tasks();