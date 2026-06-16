import React from 'react'

const Entry = (props) => {
  return (
    <article className="entry">
        <img
            src={props.img}
            alt="Destination"
            className="entry-image"
        />

        <div className="entry-content">
            <div className="entry-location">
                <span className="location-icon">📍</span>
                <span className="country">{props.country}</span>
                <a href={props.geo} className="map-link">View on Google Maps</a>
            </div>

            <h2 className="entry-title">{props.title}</h2>

            <p className="entry-date">{props.start} - {props.end}</p>

            <p className="entry-description">
                {props.des}
            </p>
        </div>
    </article>
  )
}

export default Entry