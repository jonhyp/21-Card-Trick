import React from 'react';

export default class FinalCard extends React.Component
{
    render()
    {
        return(
            <img src={this.props.cardImage} alt=''/>
        )
    }
}