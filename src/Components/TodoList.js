import React from 'react';
import './TodoStyle.css';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

export default class TodoList extends React.Component {

    state = {
        todos: [],
        todoToShow: "all"
    };

    addTodo = todo => {
            this.setState({
                todos: [todo, ...this.state.todos]
            });
    };
    
    onComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        });
    };

    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    };

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    };

    render(){

        let todos = [];

        if(this.state.todoToShow === "all") {
            todos = this.state.todos;
        } else if(this.state.todoToShow === "active"){
            todos = this.state.todos.filter(todo => !todo.complete)
        } else if(this.state.todoToShow === "complete"){
            todos = this.state.todos.filter(todo => todo.complete)
        }

        return(
            <div>
            <Container>
                <TodoForm onSubmit={this.addTodo} />
                <div className="form-body">
                    <Row className="justify-content-md-center"> 
                    <Col md="auto">
                    {todos.map(todo => (
                        <Todo
                            key={todo.id} 
                            onComplete={() => this.onComplete(todo.id)} 
                            onDelete={() => this.handleDeleteTodo(todo.id)}
                            todo={todo}
                        />
                    ))}
                    </Col>
                    </Row>
                </div>
                <div className="form-center">
                        Active todos: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div className="form-body form-center">
                    <ButtonGroup aria-label="Basic example">
                      <Button 
                        variant="secondary"
                        onClick={() => this.updateTodoToShow("all")}
                      >All</Button>
                      <Button 
                        variant="secondary"
                        onClick={() => this.updateTodoToShow("active")}
                      >Active</Button>
                      <Button 
                        variant="secondary"
                        onClick={() => this.updateTodoToShow("complete")}
                      >Complete</Button>
                    </ButtonGroup>
                </div>
            </Container>
            </div>
        )
    }
}