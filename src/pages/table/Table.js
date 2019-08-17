import React from 'react';
import ArrangedCards from './ArrangedCards';
import FinalCard from './FinalCard'
import './Table.css';


export default class Table extends React.Component
{
    render()
    {
        if(this.props.round === 4)
            console.log(this.props.cards)
        return(
            <div>
                {this.props.round < 4 ? <ArrangedCards cards={ this.props.cards } onClick={ this.props.onClick } /> : <FinalCard cardImage={ this.props.cards[1][3].image } />}
            </div>
        )
    }
}
/*
0
1
2
3
4
5
6

7
8
9
10
11
12
13

14
15
16
17
28
19
20
*/