import SlidesContext from '../../SlidesContext'
import Header from '../Header'

import SideBar from '../SideBar'
import './index.css'

const Home = () => {
  const getMainSlideDetails = () => (
    <SlidesContext.Consumer>
      {value => {
        const {activeSlide, slidesList} = value
        const mainSlideDetails = slidesList[activeSlide]
        const {heading, description} = mainSlideDetails

        return (
          <div className="main-slide">
            <h1 className="main-slide-heading">{heading}</h1>
            <p className="main-slide-description">{description}</p>
          </div>
        )
      }}
    </SlidesContext.Consumer>
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
