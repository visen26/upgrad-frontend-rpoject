import React from 'react';
import './artist.css';

function ArtistInfo(props){
    return(
        <div className = 'artist'>
            <img src = {(props.data.artist.image[2])['#text']} alt = {'Not Available'} />
            <h5>{props.data.artist.name}</h5>
            <p className='color1'>{props.data.artist.stats.listeners}</p>
            <p>listeners</p>
            <p className='color1'>{props.data.artist.stats.playcount}</p>
            <p>playcounts</p>
            <div className='color1'>
                {props.data.artist.tags.tag.map((tag) => (<p> {tag.name} </p>))}
            </div>
            <p className='published'>Published on :{props.data.artist.bio.published}</p>
        </div>
    );
    
}

class Artist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            artist : props.location.state.artistName,
            isLoading : true ,
            data : {}
        }
    }

    async componentDidMount() {
        const base_url = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo';
        const api_key = '89dac1f0c9a30579c23544e1c19d0206' ;
        const format = 'json' ;
        if (this.state.artist===undefined){
            return ;
        }
        let url = `${base_url}&artist=${this.state.artist}&api_key=${api_key}&format=${format}`;
        const res = await fetch(url);
        this.setState({
          data : await res.json(),
          loading : false
        });
      }

    render(){
        if (this.state.artist === undefined || this.state.data.artist === undefined){
            return (
            <div className = 'loading'>
                loading.........
            </div>      
            );
        }
        return(
            <div>
                <ArtistInfo data = {this.state.data}/>
            </div>
        );
    }
}

export default Artist;