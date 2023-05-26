import React from 'react'

const TestimonialCard = ({firstName, lastName, description, rating}) => {
  return (
    <div className='card'>
        <h1>{firstName} {lastName}</h1>
        <p>{description}</p>
        <span>{rating}/5</span>
    </div>
  )
}

export default TestimonialCard