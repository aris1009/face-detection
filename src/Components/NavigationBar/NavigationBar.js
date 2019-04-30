import React, { Component } from 'react'
import './NavigationBar.css'
import Button from '../Button'

export default class NavigationBar extends Component {
	render() {
		return (
			<div className="navigation-bar">
				<Button innerHTML="Sign Out"></Button>
			</div>
		)
	}
}