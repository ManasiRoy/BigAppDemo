/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Widget from './FinalDrag'
import {Link} from 'react-router-dom';
import FilterTable from './FilterTable';

const Welcome = ({user, onSignOut})=> {
	// This is a dumb "stateless" component
	return (
	  <div>
		  <nav class="navbar navbar-dark bg-primary">
		  <span class="navbar-text">
		  		Welcome <strong>{user.username}</strong>
    	 </span>
		<Link onClick={onSignOut} className="text-white">Sign out</Link>
		</nav>
		<FilterTable/>
		<Widget/>
	  </div>
	)
  }
export default Welcome