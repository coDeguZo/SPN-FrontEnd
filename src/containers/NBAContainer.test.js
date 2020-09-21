import React from 'react'
import {shallow, mount, render} from 'enzyme'
import NbaContainer from './NbaContainer'

describe('<Profile/>', () => {
  it('can open edit modal window', () => {
    const league = { league: { created_at: "Blah", id: '3', logo_img: "blah", teams: [], updated_at: 'sgs' } }
    const players = { players: [] }
    const teams = { teams: [] }
    const NbaContainerComponent = shallow(<NbaContainer {...league} {...players} {...teams}/>)
    
  })
})