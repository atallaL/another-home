import React from 'react'
import {Link, useParams} from 'react-router-dom'

import './AdoptAnimal.css'
import barry from '../../assets/available-animals/barry.jpg';
import spot from '../../assets/available-animals/spot.jpg';
import cindy from '../../assets/available-animals/cindy.png';
import mittens from '../../assets/available-animals/mittens.jpg';
import bartholomew from '../../assets/available-animals/bartholomew.jpg';

const animalData = {
    barry: {name: 'Barry', species: 'Dog', age: '3 months', breed: 'Russel Terrier', sex: 'Male', personality: "Outgoing, Clingy, Cute", size: "2.1kg", neutered: "No", img: require('../../assets/available-animals/barry.jpg')},
    spot: {name: 'Spot', species: 'Dog', age: '3 years, 8 months', breed: 'English Setter', sex: 'Male', personality: "Active, Loyal, Behaved", size: "17kg", neutered: "Yes"}, img: require('../../assets/available-animals/spot.jpg'),
    cindy: {name: 'Cindy', species: 'Cat', age: '7 months', breed: 'Javanese', sex: 'Female', personality: "Outgoing, Friendly, Loud", size: "7kg", neutered: "Yes", img: require('../../assets/available-animals/cindy.png')},
    mittens: {name: 'Mittens', species: 'Dog', age: '3 months', breed: 'Dachshund', sex: 'Female', personality: "Shy, Caring, Energetic", size: "2.3kg", neutered: "Yes", img: require('../../assets/available-animals/mittens.jpg')},
    bartholomew: {name: 'Bartholomew', species: 'Rabbit', age: '2 years', breed: 'European Rabbit', sex: 'Unknown', personality: "Affectionate, Hungry, Bouncy", size: "2.1kg", neutered: "No", img: require('../../assets/available-animals/bartholomew.jpg')},
}

function AdoptAnimal() {

    //get name of animal (passed through url) and then information based on that 
    const {id} = useParams();
    const animalInfo = animalData[id];

    return (
        <div className="animalMain">
            <div className="animalBackLink">
                <Link to="/adopt">← Back to available animals</Link>
            </div>
            <div className="animalHeader">
                <div className="animalHeaderImage">
                    <img src={animalInfo.img}></img>
                </div>
                <div className="animalHeaderText">
                    <h1>{animalInfo.name}</h1>
                    <p>Meet {animalInfo.name}! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a sapien augue. Aenean purus ipsum, gravida ac massa nec, egestas lobortis odio. Integer vehicula rutrum tortor, sed tempus neque consectetur eget. Pellentesque lacinia arcu in purus lobortis posuere. Pellentesque non fermentum ante.</p>
                </div>
                
            </div>
        </div>
    );
}

export default AdoptAnimal;