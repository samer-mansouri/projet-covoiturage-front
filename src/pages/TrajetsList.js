import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';
import ExclamationAlert from '../components/ExclamationAlert';
import Navbar from '../components/Navbar'
import SimpleSearchForm from '../components/SimpleSearchForm'

import TrajetService from '../services/trajet.service';

const trajets = [
    {
        userId: 1,
        vehiculeId: 1,
        placeOfDeparture: "Tunis",
        placeOfDestination: "Nabeul",
        departureTime: "11:00",
        pathTaken: "Tunis-Nabeul",
        availableSeats: 4,
        price: 10,
        phoneNumber: 557489654,
    },
    {
      userId: 1,
      vehiculeId: 1,
      placeOfDeparture: "Tunis",
      placeOfDestination: "Nabeul",
      departureTime: "11:00",
      pathTaken: "Tunis-Nabeul",
      availableSeats: 4,
      price: 10,
      phoneNumber: 557489654,
  },
  {
    userId: 1,
    vehiculeId: 1,
    placeOfDeparture: "Tunis",
    placeOfDestination: "Nabeul",
    departureTime: "11:00",
    pathTaken: "Tunis-Nabeul",
    availableSeats: 4,
    price: 10,
    phoneNumber: 557489654,
  },
  {
    userId: 1,
    vehiculeId: 1,
    placeOfDeparture: "Tunis",
    placeOfDestination: "Nabeul",
    departureTime: "11:00",
    pathTaken: "Tunis-Nabeul",
    availableSeats: 4,
    price: 10,
    phoneNumber: 557489654,
  },
  {
    userId: 1,
    vehiculeId: 1,
    placeOfDeparture: "Tunis",
    placeOfDestination: "Nabeul",
    departureTime: "11:00",
    pathTaken: "Tunis-Nabeul",
    availableSeats: 4,
    price: 10,
    phoneNumber: 557489654,
},
{
  userId: 1,
  vehiculeId: 1,
  placeOfDeparture: "Tunis",
  placeOfDestination: "Nabeul",
  departureTime: "11:00",
  pathTaken: "Tunis-Nabeul",
  availableSeats: 4,
  price: 10,
  phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
  userId: 1,
  vehiculeId: 1,
  placeOfDeparture: "Tunis",
  placeOfDestination: "Nabeul",
  departureTime: "11:00",
  pathTaken: "Tunis-Nabeul",
  availableSeats: 4,
  price: 10,
  phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
  userId: 1,
  vehiculeId: 1,
  placeOfDeparture: "Tunis",
  placeOfDestination: "Nabeul",
  departureTime: "11:00",
  pathTaken: "Tunis-Nabeul",
  availableSeats: 4,
  price: 10,
  phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
  userId: 1,
  vehiculeId: 1,
  placeOfDeparture: "Tunis",
  placeOfDestination: "Nabeul",
  departureTime: "11:00",
  pathTaken: "Tunis-Nabeul",
  availableSeats: 4,
  price: 10,
  phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
  userId: 1,
  vehiculeId: 1,
  placeOfDeparture: "Tunis",
  placeOfDestination: "Nabeul",
  departureTime: "11:00",
  pathTaken: "Tunis-Nabeul",
  availableSeats: 4,
  price: 10,
  phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
  userId: 1,
  vehiculeId: 1,
  placeOfDeparture: "Tunis",
  placeOfDestination: "Nabeul",
  departureTime: "11:00",
  pathTaken: "Tunis-Nabeul",
  availableSeats: 4,
  price: 10,
  phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
  userId: 1,
  vehiculeId: 1,
  placeOfDeparture: "Tunis",
  placeOfDestination: "Nabeul",
  departureTime: "11:00",
  pathTaken: "Tunis-Nabeul",
  availableSeats: 4,
  price: 10,
  phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
  userId: 1,
  vehiculeId: 1,
  placeOfDeparture: "Tunis",
  placeOfDestination: "Nabeul",
  departureTime: "11:00",
  pathTaken: "Tunis-Nabeul",
  availableSeats: 4,
  price: 10,
  phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
{
userId: 1,
vehiculeId: 1,
placeOfDeparture: "Tunis",
placeOfDestination: "Nabeul",
departureTime: "11:00",
pathTaken: "Tunis-Nabeul",
availableSeats: 4,
price: 10,
phoneNumber: 557489654,
},
]


function TrajetsList() {

  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false)

  const changeDisplayedData = (newData) => {
    setData(newData);
  }

  const toggleReload = () => {
    reload ? setReload(false) : setReload(true);
  }
  
  const fetchData = () => {
    TrajetService.getAllTrajets()
    .then(res => { console.log(res); setData(res.data) })
    .catch(error => {console.log(error)})
  }

  useEffect(() => {
    fetchData();
  }, [reload]);

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 h-screen">
    <h1 className="font-bold text-center pt-8 mb-1  text-3xl text-gray-600">Liste des Trajets disponibles</h1>
    <SimpleSearchForm onFetch={changeDisplayedData} reload={toggleReload}/>
    {
      data.length > 0
      ? 
      <div className="grid lg:grid-cols-4 bg-gray-100 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-2 mr-10 ml-10 mb-4">
      {
        data.map((trajet, index) => {
          return (
            <div 
            className="mt-2 mb-2 lg:ml-2 lg:mr-2 p-3 pt-5 pb-5 bg-white rounded-md shadow-xl" 
            key={index}>
              <div className="flex flex-row">
                <img src={trajet.user[0].picture} className="w-14 h-14" style={{borderRadius:"50%"}}/>
                <div className="pt-2 ml-2">
                <h4 className=""><NavLink to={`profile/${trajet.user[0]._id}`}>{trajet.user[0].firstName} {trajet.user[0].lastName}</NavLink></h4>
                <h5 className="text-muted text-gray-400"><i>Publiée le <Moment format="DD/MM/YYYY">{trajet.createdAt}</Moment></i></h5>
                </div>
              </div>
              <div className="mt-4 ml-4">
                <p>Lieu de départ: {trajet.placeOfDeparture}</p>
                <p>Lieu de destination: {trajet.placeOfDestination}</p>
                <p>Heure de départ: {trajet.departureTime}</p>
                <p>Trajectoire effectué: {trajet.pathTaken}</p>
                <p>Places disponibles: {trajet.availableSeats}</p>
                <p>Prix: {trajet.price} DT</p>
                <p>Numéro de téléphone: {trajet.phoneNumber}</p>
              </div>
            </div>
          )
        })
      }
    </div>
    : <ExclamationAlert message="Aucun trajet n'est trouvé !"/>
    }
    </div>
    </>
  )
}

export default TrajetsList