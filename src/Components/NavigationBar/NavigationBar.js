import React from 'react';
import Button from '../Button';

function NavigationBar({ onButtonClick, isSignedIn }) {
	if (isSignedIn) {
		return (
			<div className="navigation-bar">
				<Button classNamesToChild="pa2"
					onButtonClick={onButtonClick}
					functionality="route_signin">
					Sign Out</Button>
			</div>
		)
	} else {
		return (
			<div className="navigation-bar">
				<Button classNamesToChild="pa2"
					onButtonClick={onButtonClick}
					functionality="route_signin">
					Sign In</Button>
				<Button classNamesToChild="pa2"
					onButtonClick={onButtonClick}
					functionality="route_register">
					Register</Button>
			</div>
		)

	}
}

export default NavigationBar;