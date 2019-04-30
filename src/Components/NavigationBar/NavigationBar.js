import React, { Component } from 'react'
import './NavigationBar.css'
import Button from '../Button'

export default class NavigationBar extends Component {
	render() {
		return (
			<div className="navigation-bar">
				<Button classNamesToChild="mt2 mr3 pa3 pl4 pr4 dim bb pointer">Sign Out</Button>
			</div>
		)
	}
}