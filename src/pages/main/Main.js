import React from 'react';
import api from '../../services/api';
import './Main.css';
import Table from '../table/Table'

export default class Main extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { initialCards: [], id: [], cards: [[], [], []], round: 0}
        this.loadCards = this.loadCards.bind(this)
        this.onClick = this.onClick.bind(this)
        this.rearrangedCards = this.rearrangedCards.bind(this)
    }
    componentDidMount()
    {
        this.loadCards();
        
    }
    async loadCards()
    {
        const response = await api.get('/?count=21');
        this.setState({ initialCards: response.data.cards, id:response.data.deck_id })
    }

    onClick(index)
    {
        this.rearrangedCards(index)
    }

    rearrangedCards(index)
    {
        if(this.state.round === 0)
        {
            //Começo
            let count = 0
            let tempCards = [[], [], []]
            for(let i = 20; i >= 0; i--)
            {
                tempCards[count].push(this.state.initialCards[i])

                if(count === 2)
                    count = 0
                else
                    count++
            }
            this.setState({ cards: tempCards, round: this.state.round + 1 })
        }
        else if(this.state.round < 4)
        {
            let arrangeCardsPuttingIndexInTheMiddle = [[],[],[]]
            //Juntar os 3 baralhos em 1 só colocando o baralho index no meio
            let passouBaralhoNaoIndexEscolhido = false
            for(let i = 0; i < 3; i++)
            {
                if(i === index)
                {
                    for(let cardIndex = 6; cardIndex >= 0; cardIndex--)
                    {
                        arrangeCardsPuttingIndexInTheMiddle[1].push(this.state.cards[index][cardIndex])
                    }
                }
                if(i !== index)
                {
                    if(passouBaralhoNaoIndexEscolhido === false)
                    {
                        passouBaralhoNaoIndexEscolhido = true
                        for(let cardIndex = 6; cardIndex >= 0; cardIndex--)
                        {
                            arrangeCardsPuttingIndexInTheMiddle[0].push(this.state.cards[i][cardIndex])
                        }
                    }
                    else
                    {
                        for(let cardIndex = 6; cardIndex >= 0; cardIndex--)
                        {
                            arrangeCardsPuttingIndexInTheMiddle[2].push(this.state.cards[i][cardIndex])
                        }
                    }
                }
            }

            arrangeCardsPuttingIndexInTheMiddle = arrangeCardsPuttingIndexInTheMiddle.flat()
            let count = 0
            let tempCards = [[], [], []]

            for(let i = 20; i >= 0; i--)
            {
                tempCards[count].push(arrangeCardsPuttingIndexInTheMiddle[i])

                if(count === 2)
                    count = 0
                else
                    count++
            }

            this.setState({ cards: tempCards, round: this.state.round + 1 })
        }
    }

    render() 
    {
        const { initialCards } = this.state;

        return (
            // <h1>Contagem de cartas: {this.state.initialCards.length}</h1>
            <div className='game'>
                <div id='baralho'>
                    <img src = 'https://cdn.pixabay.com/photo/2012/05/07/18/53/card-game-48983_960_720.png' alt = '' />
                </div>
                <button type="button" onClick={() => { this.rearrangedCards(1) }}>Start</button>
                <div className='cards-list'>
                {this.state.round === 0 ? 
                    initialCards.map(initialCards => (
                        <div key = {initialCards.code}>
                            <img src = {initialCards.image} alt = '' />
                        </div>
                    ))
                    :
                    <Table cards={this.state.cards} round={this.state.round} onClick={this.onClick} />
                }
                </div>
            </div>
        )
    }
}

/*
cards = [[], [], []]
*/