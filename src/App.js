import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import SlidesContext from './SlidesContext'
import Home from './components/Home'
import './App.css'

// Published at https://nxtslidesrev.ccbp.tech

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeSlide: 0,
    slidesList: initialSlidesList,
  }

  changeSlide = id => {
    const {slidesList} = this.state
    const clickedSlideIndex = slidesList.findIndex(
      eachSlide => eachSlide.id === id,
    )
    this.setState({activeSlide: clickedSlideIndex})
  }

  addSlide = () => {
    const {slidesList, activeSlide} = this.state

    const newSlideDetails = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }

    slidesList.splice(activeSlide + 1, 0, newSlideDetails)
    this.setState(prevState => ({
      slidesList,
      activeSlide: prevState.activeSlide + 1,
    }))
  }

  updateNewHeading = newHeading => {
    const {activeSlide, slidesList} = this.state
    const currentSlide = slidesList[activeSlide]
    const updatedSlide = {...currentSlide, heading: newHeading}
    slidesList.splice(activeSlide, 1, updatedSlide)

    this.setState({slidesList})
  }

  updateNewDescription = newDescription => {
    const {activeSlide, slidesList} = this.state
    const currentSlide = slidesList[activeSlide]
    const updatedSlide = {...currentSlide, description: newDescription}
    slidesList.splice(activeSlide, 1, updatedSlide)

    this.setState({slidesList})
  }

  render() {
    const {activeSlide, slidesList} = this.state

    return (
      <SlidesContext.Provider
        value={{
          activeSlide,
          slidesList,
          changeSlide: this.changeSlide,
          addSlide: this.addSlide,
          updateNewHeading: this.updateNewHeading,
          updateNewDescription: this.updateNewDescription,
        }}
      >
        <Home />
      </SlidesContext.Provider>
    )
  }
}

export default App
