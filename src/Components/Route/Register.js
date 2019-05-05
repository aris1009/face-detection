import React from 'react';
import Button from '../Button';

export default function Register({ onButtonClick }) {
  return (
    <div className="measure center main-view">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <p className="f4 fw6 ph0 mh0">Register</p>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
          <input className="pa2 input-reset ba b--black bg-transparent hover-bg-white hover-black w-100" type="text" />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input className="pa2 input-reset ba b--black bg-transparent hover-bg-white hover-black w-100" type="email" />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-white hover-black w-100" type="password" />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password-repeat">Repeat Password</label>
          <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-white hover-black w-100" type="password" />
        </div>
      </fieldset>
      <Button classNamesToChild="tc pa2"
        onButtonClick={onButtonClick}
        functionality="action_register">
        Confirm Registration
      </Button>
    </div>
  )
}
