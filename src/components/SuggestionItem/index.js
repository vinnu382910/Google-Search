// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {itemDetails, onSearchItem} = props
  const {suggestion} = itemDetails
  const searchItem = () => {
    onSearchItem(suggestion)
  }
  return (
    <li className="google-suggestion-cont">
      <p className="google-suggestion-item">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="google-arrow-img"
        alt="arrow"
        onClick={searchItem}
      />
    </li>
  )
}

export default SuggestionItem
