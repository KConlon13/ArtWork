
import React from 'react'

class SearchForm extends React.Component {
  render() {
    return (
          <form onChange={(e) => this.props.changeHandler(e.target.value)}> 
          <select name="skills" multiple="" class="ui fluid dropdown">
          <option value="">All</option>

          <option value="">Skills</option>
          <option value="Street Art">Street Art</option>
          <option value="Graffiti">Graffiti</option>
          <option value="Urban Contemporary">Urban Contemporary</option>
          <option value="Mural">Mural</option>
          <option value="Cultural Collage">Cultural Collage</option>
          </select >
          </form >




    )
  }
}

export default SearchForm