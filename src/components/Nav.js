import React from 'react'
import { Link } from 'react-router-dom'
import {Image} from 'semantic-ui-react'
import swal from 'sweetalert';

const Nav = (props) => {
    return (
        <div> 
            <div className="topnav">
                <Link to="/">ⓈⓅⓃ</Link>
                <Link to="/nba">NBA</Link>
                <div className="dropdown-teams">
                    <Link to="/nba/teams" className="team-dropdown">Teams <i className="fa fa-caret-down"></i></Link>
                    {/* <div class="dropdown-content">
                        {props.teams.map(team => {
                            return <Link to={"/nba/teams/" + team.name}><Image size="mini" src={team.image}/>{team.name}</Link>
                        })}
                    </div> */}
                </div>
                <Link to="/nba/players">Players</Link>
                {props.user === null || localStorage.length === 0 ? null : <Link onClick={() => {
                    return swal({
                        icon: "info",
                        text: "Sports Highlights Coming Soon!"
                    })
                }}>Sports Media</Link>}
                <div className="topnav-right">
                    <Link to="" onClick={() => {
                        return swal({
                            icon: "info",
                            text: "About Page Coming Soon!"
                        })
                    }}>About</Link>
                    {props.user === null || localStorage.length === 0 ? <Link to="/signup">Signup</Link> : null}
                    {props.user === null || localStorage.length === 0 ? <Link to="/login">Login</Link> : <Link to="/profile">Profile</Link>}          
                    {props.user === null || localStorage.length === 0 ? null : <Link to="/login" onClick={props.logout}>Logout</Link>}
                </div>
            </div>
        </div>
    )
}


export default Nav