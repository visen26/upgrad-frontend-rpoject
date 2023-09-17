import React from 'react';
import Display from './display';
import './App.css'


class IndianTrack extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading : true ,
            data : {} 
        };
    }

    async componentDidMount(){
        const url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&api_key=89dac1f0c9a30579c23544e1c19d0206&format=json' ;
        const res = await fetch(url);
        this.setState({
            isLoading : false ,
            data : await res.json() 
        });
    }

    render(){
        if (this.state.isLoading){
            return(
                <div className='loading'>
                    Loading Data........
                </div>
            );
        }
        return(
            <div>
                <Display data = {this.state.data}/>
            </div>
        );
    }

}

export default IndianTrack;