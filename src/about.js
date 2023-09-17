import React from 'react';
import { Link } from 'react-router-dom'
import './about.css';


class TrackInfo extends React.Component{
    render () {
        return(
            <div>
                <div className='about'>
                        <img src = {(this.props.data.track.album.image[3])['#text']} alt = {'Not Available'} />
                        <h3>{this.props.data.track.name}</h3>
                        <div className = 'album'>
                            <p>Album : </p>
                            <p  className='color1'>{ this.props.data.track.album.title} </p>

                            <p>Artist :</p>
                            <Link to={{pathname: "/artist", state: {artistName : this.props.data.track.artist.name}}}> {this.props.data.track.artist.name}</Link>
                        </div>
                        
                        <div className='album'>
                            <p className='color1'>{this.props.data.track.listeners}</p>
                            <p>listeners</p>
                            <p className='color1'>{this.props.data.track.playcount}</p>
                            <p>playcounts</p>
                        </div>
                        
            
                    <div className = 'album'>
                        {this.props.data.track.toptags.tag.map((tag) => (
                            <p> {tag.name} </p>
                        ))}
                    </div>
                    <div className = 'album'>
                        <p className='color1'>Published On :</p>
                        <p className = 'info'>{this.props.data.track.wiki.published}</p>
                    </div>
                    <p>Summary :</p>
                    <span className = 'summary'>{this.props.data.track.wiki.summary}</span>
                </div>
            </div>
        );
    }
    
}

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mbid : props.location.state.mbid,
            isLoading : true ,
            data : {}
        }
    }

    async componentDidMount() {
        const base_url = 'http://ws.audioscrobbler.com/2.0/?method=track.getInfo';
        const api_key = '89dac1f0c9a30579c23544e1c19d0206' ;
        const format = 'json' ;
        let url = `${base_url}&mbid=${this.state.mbid}&api_key=${api_key}&format=${format}`;
        const res = await fetch(url);
        this.setState({
          data : await res.json(),
          isLoading : false
        });
      }

    render(){
        if (this.state.mbid===''){
            return(
                    <div className = 'not-available'>
                        No Data Available...
                    </div>      
            );
        }
        if (this.state.data.track === undefined){
            return (
            <div className='loading'>
                Loading.........
            </div>      
            );
        }
        return(
            <div>
                <TrackInfo data = {this.state.data}/>
            </div>
        );
    }
}

export default About;