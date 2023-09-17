import React from 'react' ;
import { Link } from 'react-router-dom'
import './App.css'



class Card extends React.Component {
	render() {
  	return (
    	<div className = 'coverart'>
            <img className = 'coverimage' src={'https://lastfm-img2.akamaized.net/i/u/64s/3b54885952161aaea4ce2965b2db1638.png'} 
                    alt = {'Loading....'} >
            </img>
            <Link className='track' to={{pathname: "/about", state: {mbid: this.props.mbid}}}> {this.props.trackName}</Link>
            <p  className = 'artist'>{this.props.artistName}</p>
        </div>
    );
  }
}

class Display extends React.Component{


    render() {
        while (this.props.data.tracks ===undefined){
            return (
                <div className = 'loading'>
                    Loading....
                </div>
            )
        }
        return (
            <form>
            { this.props.data.tracks.track.map(({url, name, artist ,mbid}) => <Card  url = {url} trackName = {name} artistName = {artist.name} mbid={mbid}/>) }
            </form>
        );
    }
}

export default Display ; 