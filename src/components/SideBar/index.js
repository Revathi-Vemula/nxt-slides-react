import SlidesContext from '../../SlidesContext'
import Slide from '../Slide'
import './index.css'

const SideBar = () => (
  <SlidesContext.Consumer>
    {value => {
      const {activeSlide, slidesList} = value

      return (
        <nav className="sidebar-container">
          <ol className="slides-container">
            {slidesList.map((eachSlide, index) => (
              <Slide
                slideDetails={eachSlide}
                key={eachSlide.id}
                isActiveSlide={activeSlide === index}
                serialNo={index + 1}
              />
            ))}
          </ol>
        </nav>
      )
    }}
  </SlidesContext.Consumer>
)

export default SideBar
