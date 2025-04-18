import React from 'react'
import Hero from '../Component/Projects/Hero'
import ITServices from '../Component/Services/ITServices'

const Services = () => {
  return (
    <div>
      <Hero title={"Our Servicess"} route={"services"} prevRoute={"Home"} nextRoute={"Services"} />
      <ITServices />
    </div>
  )
}

export default Services
