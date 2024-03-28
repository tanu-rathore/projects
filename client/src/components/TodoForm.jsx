import { useState } from "react"; //used to store the value of entries
//values stored in state are temporary

import { useDispatch } from "react-redux";
/*redux: database of front end. It manages and stores the state in a centralised database
instead of storing states in different components, we can store states in a centralised db.
redux devtool extension is need to be install in browser
A file named as store.js is made to connect redux code with the app on browser*/

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState(""); //set text function is used to update the text entered from useState

    const dispatch = useDispatch(); //dispatch= sent to action

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
    )
}

export default TodoForm;