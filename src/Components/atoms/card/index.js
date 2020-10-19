import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({image,title,to}) => {
    return (
        <div className="btn shadow p-3 mb-5 bg-white rounded">
            <Link to={to} className="row">
                <img src={image} className="col-md-5" height={70}/>
                <div className="d-flex justify-content-center col-md-7">
                    <h5 style={{paddingTop: 40}}>{title}</h5>
                </div>
            </Link>
        </div>
    )
}

export default Card
