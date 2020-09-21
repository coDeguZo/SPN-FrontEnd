import React from 'react'
import { mount,shallow,render } from 'enzyme'
import Profile from './ProfileContainer'
import { Button, Modal } from 'semantic-ui-react'


describe('<Profile/>', () => {
  it('can open edit modal window', () => {
    const user = { user: 
      {created_at: "2020-09-01T21:48:32.692Z", 
      email: "demo1@gmail.com", 
      id: 1, 
      image: "https://avatars3.githubusercontent.com/u/33858127?s=460&u=86b0afa70fbb45a4d176637abe08d13ef20c610a&v=4", 
      name: "Uzoma Ariguzo", 
      password_digest: "$2a$12$cBGDO4utB0VLxLFJboJLP.PFezWpMc9YpycZ7XJUSCx9GFvXAEuGa", 
      updated_at: "100" }
    }
    const favsPlayers = { favsPlayers: [] }
    const favTeams = { favTeams: [] }
    const profileComponent = mount(<Profile {...user} {...favsPlayers} {...favTeams}/>)
    const findEditModal = profileComponent.find(Modal).first()
    findEditModal.simulate('click')
    expect(profileComponent.state('modalEditOpen')).toBe(true)
  })
})