import React from 'react'
// import axios from 'axios'
import { Header, Button, Icon, Checkbox } from 'semantic-ui-react';

const Item = ({ id, complete, name, price, remove, update}) => (
  <div style={styles.flex}>
    <ul>
      <i className="..."></i>
      {' '}
    </ul>
    <Button
      icon
      color="black"
      size="mini"
      onClick={() => remove(id)}
    >
      <Icon name="trash alternate outline" />
    </Button>
    <div  style={styles.flex}>
      <Checkbox 
        defaultChecked={complete}
        onClick={() => update(id)}
      />
      <div style={complete ? styles.complete : {}} className="center">
        <Header as="h2" style={{ marginLeft: "15px" }}>{name} - ${price}</Header>
      </div>
    </div>
  </div>
)

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: {
    cursor: 'pointer' 
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
}


export default Item