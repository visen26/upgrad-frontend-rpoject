import React from 'react';
import Display from './display';


class TeamComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            country : props.location.state.countryName,
            isLoading : true ,
            data : {}
        }
    }

    async componentDidMount() {
        const base_url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks';
        const api_key = '89dac1f0c9a30579c23544e1c19d0206' ;
        const format = 'json' ;
        let url = `${base_url}&country=${this.state.country}&api_key=${api_key}&format=${format}`;
        const res = await fetch(url);
        this.setState({
          data : await res.json(),
          loading : false
        });
      }

      render() {
          while (this.state.loading){
              return (
                  <div>
                      loading.......
                  </div>
              )
          }
        return (
            <div>
                <Display data = {this.state.data} />
            </div>
        );
      }

}

export default TeamComponent;