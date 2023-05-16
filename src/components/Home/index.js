import {useState, useContext, useEffect} from 'react'
import SlidesContext from '../../SlidesContext'
import Header from '../Header'

import SideBar from '../SideBar'
import './index.css'

const Home = () => {
  const {
    activeSlide,
    slidesList,
    updateNewHeading,
    updateNewDescription,
  } = useContext(SlidesContext)

  const {heading, description} = slidesList[activeSlide]
  const [isEditingHeading, setIsEditingHeading] = useState(false)
  const [isEditingDesc, setIsEditingDesc] = useState(false)
  const [newHeading, setNewHeading] = useState(heading)
  const [newDescription, setNewDescription] = useState(description)

  useEffect(() => {
    setNewHeading(heading)
    setNewDescription(description)
  }, [activeSlide])

  const onChangeHeading = event => {
    setNewHeading(event.target.value)
  }

  const onChangeDescription = event => {
    setNewDescription(event.target.value)
  }

  const onBlurDescription = () => {
    updateNewDescription(newDescription)
    setIsEditingDesc(false)
  }

  const onBlurHeading = () => {
    updateNewHeading(newHeading)
    setIsEditingHeading(false)
  }

  const handleDescClick = () => {
    setIsEditingDesc(true)
  }

  const handleHeadingClick = () => {
    setIsEditingHeading(true)
  }

  const getMainSlideDetails = () => (
    <div className="main-slide">
      {isEditingHeading ? (
        <input
          type="text"
          className="main-slide-heading-input"
          onChange={onChangeHeading}
          onBlur={onBlurHeading}
          value={newHeading}
        />
      ) : (
        <h1 className="main-slide-heading" onClick={handleHeadingClick}>
          {newHeading}
        </h1>
      )}

      {isEditingDesc ? (
        <input
          type="text"
          className="main-slide-description-input"
          onChange={onChangeDescription}
          onBlur={onBlurDescription}
          value={newDescription}
        />
      ) : (
        <p className="main-slide-description" onClick={handleDescClick}>
          {newDescription}
        </p>
      )}
    </div>
  )

  return (
    <SlidesContext.Consumer>
      {value => {
        const {addSlide} = value

        return (
          <>
            <Header />
            <div className="home-container">
              <button type="button" className="new-button" onClick={addSlide}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
                  alt="new plus icon"
                  className="plus-icon"
                />
                <p className="new-tag">New</p>
              </button>
              <div className="home-content">
                <SideBar />
                <div className="main-slide-container">
                  {getMainSlideDetails()}
                </div>
              </div>
            </div>
          </>
        )
      }}
    </SlidesContext.Consumer>
  )
}
export default Home
