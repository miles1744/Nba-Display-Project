import React from 'react'
import Card from './Card'
import Sixers from '../assets/Sixers.png'
import Boston from '../assets/Celtics.png'
import Pelicans from '../assets/Pelicans.png'
import Cavaliers from '../assets/Cavs.png'
import Chicago from '../assets/chi.png'
import Detroit from '../assets/Detroit.png'
import Nuggets from '../assets/Nuggets.png'
import Pacers from '../assets/Pacers.png'
import Dallas from '../assets/Dallas.png'

const CardDisplay = (props) =>{
    return(<div className='card-container' >
        <Card CardHeader='Philadelphia 76ers' image ={Sixers} BestPlayer="Joel Embid" TeamLink="https://www.nba.com/sixers/"/>
        <Card CardHeader='Boston Celtics' image={Boston} BestPlayer="Jayson Tatum" TeamLink="https://www.nba.com/celtics/"/>
        <Card CardHeader='New Orl Pelicans' image={Pelicans} BestPlayer="Zion Williamson" TeamLink="https://www.nba.com/pelicans/"/>
        <Card CardHeader='Cleveland Cavaliers' image={Cavaliers} BestPlayer="Donovan Mitchell" TeamLink="https://www.nba.com/cavaliers/"/>
        <Card CardHeader='Chicago Bulls' image={Chicago} BestPlayer="Zach LaVine" TeamLink="https://www.nba.com/bulls/"/>
        <Card CardHeader='Denver Nuggets' image ={Nuggets} BestPlayer="Tyre Jokić" TeamLink="https://www.nba.com/nuggets/"/>
        <Card CardHeader='Indiana Pacers' image={Pacers} BestPlayer="Tyrese Haliburton" TeamLink="https://www.nba.com/pacers/"/>
        <Card CardHeader='Detroit Pistons' image={Detroit} BestPlayer="Cade Cunningham" TeamLink="https://www.nba.com/pistons/"/>
        <Card CardHeader='Cleveland Cavaliers' image={Cavaliers} BestPlayer="Donovan Mitchell" TeamLink="https://www.nba.com/cavaliers/"/>
        <Card CardHeader='Dallas Mavericks' image ={Dallas} BestPlayer="Luka Dončić" TeamLink="https://www.mavs.com/"/>
        </div>)
}

export default CardDisplay;