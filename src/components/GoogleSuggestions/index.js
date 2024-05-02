// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchItem = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-cont">
        <div className="google-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-image"
            alt="google logo"
          />
          <div className="google-search-cont">
            <div className="google-input-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="google-search-icon"
                alt="search icon"
              />
              <input
                className="google-search-input"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                type="search"
                value={searchInput}
              />
            </div>
            <ul className="googlesuggestions-cont">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  itemDetails={eachItem}
                  key={eachItem.id}
                  onSearchItem={this.onSearchItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
