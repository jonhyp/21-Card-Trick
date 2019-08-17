import React from 'react'


export default class ArrangedCards extends React.Component
{
    constructor(props)
    {
        super(props)
        
    }
    render()
    {
       return(
            <div>
                <div>
                    <ul>
                        {this.props.cards.map() => }
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <img src={this.props.cards[].image}/>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <img src={this.props.cards[].image}/>
                        </li>
                    </ul>
                </div>
            </div>
       )
    } 
}
/*
<li>
    <img src={this.props.cards[].image}/>
</li>
*/
//this.props.cards[0].image