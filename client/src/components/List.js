import React from 'react'
import axios from 'axios'
import ListForm from './ListForm'
import ItemForm from './ItemForm'
import { Header, Button, Icon, } from 'semantic-ui-react'

class List extends React.Component {
  state = { list: {}, items: [], edit: false, showForm: false }

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/lists/${id}`)
      .then( res => {
        this.setState({ list: res.data})
      });
    axios.get(`/api/lists/${id}/items`)
      .then( res => {
        this.setState({ items: res.data, })
      })
  }
  
  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit}
    })
  }

  showList = () => {
    const { list: { name } } = this.state
    return (
      <div>
        <Header style={{'fontSize': '50px'}}>{name}</Header>
      </div>
    )
  }

  editList = () => {
    return <ListForm {...this.state.list} submit={this.submitList}/>
  }

  deleteList = (id) => {
    const remove = window.confirm("Are you sure you want to delete this List?")
    if (remove)
    axios.delete(`/api/lists/${id}`)
    .then(res => {
      this.props.history.push("/lists");
      })
  }

  submitList = (list) => {
    axios.put(`/api/lists/${this.props.match.params.id}`, { list })
      .then(res => {
        this.setState({ list: res.data, edit: false })
      })
  }

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm }
      })
  }

  renderItems = () => {
    return this.state.items.map( i => {
      return (
        <ul key={i.id}>
          <li>
            {i.name}- ${i.price}
          </li>
        </ul>
      )
    })
  }

  addItem = (item) => {
    axios.post(`/api/lists/${this.props.match.params.id}/items`, { item })
      .then(res => {
        this.setState({ items: [res.data, ...this.state.items], showForm: false})
      })
  }

  itemForm = () => {
    return <ItemForm add={this.addItem} />
  }

 

  render() {
    const { edit, list: {id}, showForm} = this.state;
    return (
      <div>
        {edit ? this.editList() : this.showList()}
        <Button onClick={this.toggleEdit} size='mini'>{ edit? 'Cancel' : 'Edit' }</Button>
        <Button
          icon
          color="black"
          size="mini"
          onClick={() => this.deleteList(id)}
         >
          <Icon name="trash alternate outline" />
        </Button>
      <br />
      <br />
      <br />
        <div>
        <Header as='h3' dividing style={{'fontSize': '25px'}}>
          Items <Button onClick={this.toggleForm} size='mini' >{ showForm ? 'Hide' : 'Add Items'}</Button>
        </Header>
        {/* <Button onClick={this.toggleForm} size='mini'>{ showForm ? 'Hide' : 'Add Items'}</Button> */}
        {showForm ? this.itemForm() : this.renderItems()}
        </div>
      </div>
    )
  }




}
  

export default List