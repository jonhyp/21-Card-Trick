import React from 'react'


export default class ArrangedCards extends React.Component
{
    render()
    {
        console.log(this.props.cards)
       return(
            <div>
                <div onClick={() => { this.props.onClick(0)} }>
                    <ul>
                        {this.props.cards[0].map(card => 
                        (
                            <li key= {card.code}>
                                <img src={card.image} alt=''/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div onClick={() => { this.props.onClick(1)} }>
                    <ul>
                        {this.props.cards[1].map(card => 
                        (
                            <li key= {card.code}>
                                <img src={card.image} alt=''/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div onClick={() => { this.props.onClick(2)} }>
                    <ul>
                        {this.props.cards[2].map(card => 
                        (
                            <li key= {card.code}>
                                <img src={card.image} alt=''/>
                            </li>
                        ))}
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