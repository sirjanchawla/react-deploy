import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>A Quick sneak-peak into my projects !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/rockps.png'
              text='Classic Game of Rock, Paper, Scissors with audio'
              label='Project'
              path='https://sirjanchawla.github.io/RockPaperScissors/'
            />
            <CardItem
              src='images/asteroids.jpg'
              text='"AstroFun"A game based on the OG Asteroids game, built using turtle lib on python'
              label='Project'
              path='https://github.com/sirjanchawla/astrofun'
            />
            <CardItem
              src='images/git.png'
              text='My other projects'
              label='Project'
              path='https://github.com/sirjanchawla'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;