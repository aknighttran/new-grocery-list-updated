import React from 'react'
import { Form } from 'semantic-ui-react'


class ListForm extends React.Component {
  defaultValues = { name: ''}
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id) {
      this.setState({...this.props})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const list = { ...this.state }
    this.props.submit(list)
    this.setState({ ...this.defaultValues})
  }

  handleChange = (e) => {
    const { target: {name, value }} = e;
    this.setState({ [name]: value})
  }

  render() {
    const { name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <ul>
          <i className="..."></i>
          {' '}
        </ul>
        <Form.Group widths='equal'>
          <Form.Input 
            name="name"
            placeholder="Name of List"
            value={name}
            onChange={this.handleChange}
            requried="true"
          />
        </Form.Group>
        <Form.Button type='submit' color='black'>Submit</Form.Button>
      </Form>
    )
  }
  
}

export default ListForm;