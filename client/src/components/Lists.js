import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ListForm from './ListForm'
import { Button } from 'semantic-ui-react'


class Lists extends React.Component {
  state = { lists:[], showForm: false }

  componentDidMount() {
    axios.get('/api/lists')
    .then(res => {
      this.setState({ lists: res.data})
    })
  }

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm }
    })
  }

  form = () => {
    return <ListForm submit={this.submit} />
  }

  submit = (list) => {
    axios.post('/api/lists', { list })
      .then(res => {
        this.setState({ lists: [res.data, ...this.state.lists], showForm: false})
      })
  }

  listLists = () => {
    return this.state.lists.map(l => {
      return (
        <ul key={l.id}>
          <li>
            <Link style={{'fontSize': '20px'}} to={`/lists/${l.id}`}>{l.name}</Link>
          </li>
        </ul>
      )
    })
  }

  render() {
    const { showForm } = this.state
    return (
      <div>
        <h2 style={{'fontSize': '50px'}}>Lists</h2>
        <Button onClick={this.toggleForm} size='tiny'>{ showForm ? 'Hide' : 'Create New List'}</Button>
        {showForm ? this.form() : this.listLists()}
      </div>
    )
  }


}

export default Lists