import React from 'react'
import { Link } from 'react-router-dom'

class NbaContainer extends React.Component {

    render(){
        return(
            <div>
                This is the Container
                <div><Link to='nba/players'><button>Click For All Players</button></Link></div>
            </div>
        )
    }
}

export default NbaContainer