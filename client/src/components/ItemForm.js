import React from 'react'
import { Form } from 'semantic-ui-react'

class ItemForm extends React.Component {
  state = { name: '', price: '' };

  componentDidMount() {
    if (this.props.id)
      this.setState({ name: this.props.name, price: this.props.price, })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({ name: '', price: '', })
  }

  render() {
    const {name, price} = this.state;

    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <ul>
          <i className="..."></i>
          {' '}
        </ul>
         <Form.Group widths='equal'> 
          <Form.Input 
            name='name'
            value={name}
            required
            type='text'
            placeholder='Add Item'
            onChange={this.handleChange}        
            />
          <Form.Input
            name='price'
            value={price}
            required
            type='text'
            placeholder='$ - Cost'
            onChange={this.handleChange}        
            />
        </Form.Group>
        <Form.Button type='submit' color='black'>Submit</Form.Button>
      </Form>
      </div>
    )
  }
}

export default ItemForm;