import { Button } from 'react-bootstrap';
import React from 'react';

export default (props) => (
  <div style={{ display: 'flex', marginBottom: '10px' }}>
    <Button variant="outline-danger" size="sm" onClick={props.onDelete}>
      del
    </Button>
    <div
      style={{
        marginLeft: '5px',
        textDecoration: props.todo.complete ? 'line-through' : '',
      }}
      onClick={props.onComplete}
    >
      {props.todo.complete ? '✅' : '❎'} {props.todo.text}
    </div>
  </div>
);
