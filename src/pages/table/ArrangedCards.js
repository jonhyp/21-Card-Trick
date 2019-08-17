import React from 'react'
import './ArrangedCards.css'


export default class ArrangedCards extends React.Component
{
    render()
    {
       return(
            <div className="ArrangedCards">
                <div className='card-stack' onClick={() => { this.props.onClick(0)} }>
                    <ul>
                        {this.props.cards[0].map(card => 
                        (
                            card === this.props.cards[0][0] ?
                            <li className='firs-card' key={card.code}>
                                <img src={card.image} alt=''/>
                            </li>
                            :
                            <li className='others-card' key={card.code}>
                                <img src={card.image} alt=''/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='card-stack' onClick={() => { this.props.onClick(1)} }>
                    <ul>
                        {this.props.cards[1].map(card => 
                        (
                            card === this.props.cards[1][0] ?
                            <li className='firs-card' key={card.code}>
                                <img src={card.image} alt=''/>
                            </li>
                            :
                            <li className='others-card' key={card.code}>
                                <img src={card.image} alt=''/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='card-stack' onClick={() => { this.props.onClick(2)} }>
                    <ul>
                        {this.props.cards[2].map(card => 
                        (
                            card === this.props.cards[2][0] ?
                            <li className='firs-card' key={card.code}>
                                <img src={card.image} alt=''/>
                            </li>
                            :
                            <li className='others-card' key={card.code}>
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