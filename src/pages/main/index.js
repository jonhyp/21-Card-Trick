import React from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { initialCards: [], id: [], cards: [[], [], []]}
        this.loadCards = this.loadCards.bind(this)
        this.onClick = this.onClick.bind(this)
        this.round = 0
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
        rearrangedCards(this.round, index)
        this.round++
    }

    rearrangedCards(round, index)
    {
        if(round <= 0)
        {
            //Começo
            let count = 0
            let tempCards = [[], [], []]
            for(let i = 0; i < 21; i++)
            {
                tempCards[count].append(this.state.initialCards[i])

                if(count == 2)
                    count = 0
                else
                    count++
                /*
                if(count == 0)
                {
                    //Primeiro baralho
                    tempCards[0].append(this.state.initialCards[i])
                    count++
                }
                if(count == 1)
                {
                    //Segundo baralho
                    tempCards[1].append(this.state.initialCards[i])
                    count++
                }
                if(count == 2)
                {
                    //Terceiro baralho
                    tempCards[2].append(this.state.initialCards[i])
                    count = 0
                } */
            }
            this.setState({ cards: tempCards })
        }
        else if(round < 4)
        {
            let tempCards = [[],[],[]]
            //Juntar os 3 baralhos em 1 só colocando o baralho index no meio
            let passouBaralhoNaoIndexEscolhido = false
            for(let i = 0; i < 3; i++)
            {
                if(i == index)
                {
                    for(let cardIndex = 0; cardIndex < 7; cardIndex++)
                    {
                        tempCards[1].append(this.state.cards[index][cardIndex])
                    }
                }
                if(i != index)
                {
                    if(passouBaralhoNaoIndexEscolhido == false)
                    {
                        passouBaralhoNaoIndexEscolhido = true
                        for(let cardIndex = 0; cardIndex < 7; cardIndex++)
                        {
                            tempCards[0].append(this.state.cards[i][cardIndex])
                        }
                    }
                    else
                    {
                        for(let cardIndex = 0; cardIndex < 7; cardIndex++)
                        {
                            tempCards[2].append(this.state.cards[i][cardIndex])
                        }
                    }
                }
            }

            this.setState({cards: tempCards})
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
                <button type="button">Start</button>
                {this.startGame ? 
                    initialCards.map(initialCards => (
                        <div key = {initialCards.code}>
                            <img src = {initialCards.image} alt = '' />
                        </div>
                    ))
                    :
                    <ArrangedCards cards={this.state.cards} onClick={onClick} />
                }
                <div className='flex-container'className = 'cards-list' >

                </div>
            </div>
        )
    }
}

/*
cards = [[], [], []]
*/