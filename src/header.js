import React, { useState } from 'react';  
import { Link } from 'react-router-dom'
import IndianTrack from './indianTrack';

function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function HeaderComponent (props){

    const [country ,setCountry] = useState('india');

  return (

        <div >
                <h2 className = 'header'>Top Tracks in {Capitalize(country)}</h2>
                <form className = 'dropdown'>
                    <label>
                        <select value={country} onChange = { event => setCountry(event.target.value)  } >
                            <option value="india">India</option>
                            <option value="canada">Canada</option>
                            <option value="france">France</option>
                            <option value="china">China</option>
                            <option value="greece">Greece</option>
                            <option value="japan">Japan</option>
                        </select>
                    </label>
                    <Link className='submit' to={{pathname: "/otherCountryTrack", state: {countryName: country}}}>Submit</Link>
                </form>
                <IndianTrack/>
        </div>
  )
}

export default HeaderComponent;