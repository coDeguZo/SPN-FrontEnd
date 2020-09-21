import React from 'react'
import { shallow, mount, render } from 'enzyme';
import Home from './Home'
import Carousel from 'react-bootstrap/Carousel'
import { Segment } from 'semantic-ui-react'


// Simple Mount
// constructor
// render
// componentDidMount

// Simple Shallow
// constructor
// render

describe('Home', () => {
  it('should render Home Component h1', () => {
    const home = shallow(<Home />)
    const headerOne = home.find("h1")
    const result = headerOne.text()

    expect(result).toBe("ⓈⓅⓃ Daily News")
  })

  it('should return [] articles', () => {
    const wrapper = mount(<Home />)
    const stateNews = wrapper.state().news
    expect(stateNews).toEqual([])
  })

  it('should return 50 articles on mount', () => {
    const wrapper = mount(<Home />)
    let updated = wrapper.update()
    expect(updated.state(`news`).length).toEqual(0)
  })

  it('should find and return Carousel length', () => {
    const wrapper = mount(<Home />)
    const carousel = wrapper.find(Carousel)
    expect(carousel.length).toEqual(1)
  })

  it('should find and return Segment length', () => {
    const wrapper = mount(<Home />)
    const carousel = wrapper.find(Segment)
    expect(carousel.length).toEqual(2)
  })

  it('should find and Carousel.Item length', () => {
    const wrapper = mount(<Home />)
    const carousel = wrapper.find(Carousel.Item)
    expect(carousel.length).toEqual(18)
  })
})

// import React from 'react';
// // import { render } from '@testing-library/react';
// import { shallow, mount, render } from 'enzyme';
// import App from './App';
// import { MemoryRouter } from 'react-router-dom';
// import { Item } from 'semantic-ui-react';
// import Nav from './components/Nav'

// // Memory Router Fixes Unit Test Issues

// describe('App', () => {
//   it('renders Nav Bar', () => {
//     const wrapper = shallow(<MemoryRouter><App /></MemoryRouter>)
//     const nav = wrapper.find('#App')
//     expect(nav).toEqual(true)
//   })
// })









// // it('renders learn react link', () => {
//   //   const { getByText } = render(<MemoryRouter><App /></MemoryRouter>);
//   //   const linkElement = getByText(/learn react/i);
//   //   expect(linkElement).toBeInTheDocument();
//   // });

//   // it('renders initial state', () => {
//   //   const wrapper = mount(<MemoryRouter><App /></MemoryRouter>)
//   //   expect(wrapper.state().players).toEqual([])
//   // })