import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todo:[
        {
            id: 1,
            todo: "Todo Message",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (todo) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

