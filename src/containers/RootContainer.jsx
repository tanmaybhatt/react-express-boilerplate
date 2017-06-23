import React from 'react';
if ( process.env.BROWSER ) {
    require('../scss/main.scss');
}
export default class RootContainer extends React.Component
{
    render(){
        return (
            <div>
                This is a React Applications.
            </div>
        )
    }
}