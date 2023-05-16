import SlidesContext from '../../SlidesContext'
import './index.css'

const Slide = props => {
  const {slideDetails, serialNo, isActiveSlide} = props
  const {id, heading, description} = slideDetails

  return (
    <SlidesContext.Consumer>
      {value => {
        const {changeSlide} = value

        const activeSlideClass = `slide-item ${
          isActiveSlide ? 'active-slide' : ''
        }`

        const slideId = `slideTab${serialNo}`
        return (
          <li className={activeSlideClass} testid={slideId}>
            <p className="slide-no">{serialNo}</p>
            <button
              className="slide-content"
              type="button"
              onClick={() => changeSlide(id)}
            >
              <h1 className="mini-slide-heading">{heading}</h1>
              <p className="mini-slide-description">{description}</p>
            </button>
          </li>
        )
      }}
    </SlidesContext.Consumer>
  )
}

export default Slide
