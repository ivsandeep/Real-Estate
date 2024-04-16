import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import './pin.scss'
const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className='popupContainer'>
            <img src={item.images[0]} alt=''/>
            <div className='textContainer'>
                <Link to={`/${item.id}`}>{item.title}</Link>
                <span className='bed' >{item.bedroom} <b>$ {item.price}</b></span>
            </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin