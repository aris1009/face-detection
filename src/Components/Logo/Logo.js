import React, { Component } from 'react';
import conf from '../../config.json'

export default class Logo extends Component {
    render() {
        if(conf.project_name){
            return (
                <div className="logo">
                    <span className="tc ba b--purple bw1
                     bg-lightest-blue
                     hover-bg-purple hover-white
                     pointer">
                        {conf.project_name}
                    </span>
                </div>
            )

        } else {
            return null;
        }
    }
}