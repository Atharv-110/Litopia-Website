import React from 'react'
import "./Card.css";

export default function Card(props) {
  return (
    <>
    <div className="card">
        <div className="card-img">
        <img src={props.url} alt="team-member-img" />
        <div className="card-initial">
            {props.initial}
        </div>
        </div>
        <h3 className="name">{props.name}</h3>
        <p className="post"> {props.post} </p>
        <div className="card-link">
        <a href={props.linkedin} target="_blank" rel="noreferrer"><i className='bx bxl-linkedin' ></i></a>
        <a href={props.instagram} target="_blank" rel="noreferrer"><i className='bx bxl-instagram-alt'></i></a>

        </div>

    </div>
    </>
  )
}
