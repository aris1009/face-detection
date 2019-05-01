import React, { Component } from 'react'
import Button from '../Button'

export default class NavigationBar extends Component {
	render() {
		return (
			<div className="navigation-bar">
				<div>
					<Button classNamesToChild="pa3 mr4">Sign Out</Button>
				</div>
			</div>
		)
	}
}