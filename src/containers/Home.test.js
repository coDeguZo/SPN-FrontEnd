import React from 'react'
import { shallow, mount, render } from 'enzyme';
import Home from './Home'

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
})