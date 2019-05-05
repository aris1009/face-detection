import React from 'react';
import Button from '../Button';

export default function Signin({ onButtonClick }) {
  return (
    <div className="measure center main-view">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <p className="f4 fw6 ph0 mh0">Sign In</p>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input className="pa2 input-reset ba b--black bg-transparent hover-bg-white hover-black w-100" type="email" />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-white hover-black w-100" type="password" />
        </div>
      </fieldset>
      <div>
        <Button classNamesToChild="tc pa2"
          onButtonClick={onButtonClick}
          functionality="route_home">
          Sign In
        </Button>
      </div>
    </div>
  )
}
