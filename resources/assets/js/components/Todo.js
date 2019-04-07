import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Create from "./Create";

class Todo extends Component {
    constructor () {
        super()
        this.state = {
            todos: [],
            input: 'a'
        }
        this.onCreate = this.onCreate.bind(this);
        this.onChange = this.onChange.bind(this);
        this.loadTodos = this.loadTodos.bind(this);
    }

    loadTodos() {
        axios.get('/api/todos')
            .then(response => {
                this.setState({
                    todos: response.data
                });
            });
    }

    componentDidMount (){
        this.loadTodos();
    }

    onCreate(){
        if (this.state.input) {
            axios.post('/api/todos', { 'description': this.state.input, 'done': 1})
                .then(response => {
                    if(response.data){
                        const items = [...this.state.todos, response.data];
                        this.setState({todos: items});
                    }
                });
        }
    }

    onChange(value) {
        this.setState({
            input: value
        });
    }

    render() {
        const { todos } = this.state;
        return (
            <div className="row justify-content-center">
                <Create input={this.state.input} click={this.onCreate} change={this.onChange}/>
                <ul className="list-group">
                    {
                        todos.map(item => (
                            <li className="list-group-item" key={item.id}>{item.description}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Todo;