import React from 'react'

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
      <form onSubmit={this.handleSubmit}>
        <input 
          name="name"
          placeholder="Name of List"
          value={name}
          onChange={this.handleChange}
          requried
        />
        <button>Submit</button>
      </form>
    )
  }
  
}

export default ListForm;