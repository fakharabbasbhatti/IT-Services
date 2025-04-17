import React from 'react'
import Hero from '../Component/Home/Hero'
import HandpickedPackeg from '../Component/Home/HandpickedPackeg'
import YourJourney from '../Component/Home/YourJourney'
import TopReviews from '../Component/Home/TopReviews'
import ReadyAdvanture from '../Component/Home/ReadyAdvanture'
import ItPopular from '../Component/Home/ItPopular'

const Home = () => {
  return (
    <div>
      <Hero />
      <HandpickedPackeg />
      <YourJourney />
      <ItPopular />
      <TopReviews />
      <ReadyAdvanture />
    </div>
  )
}

export default Home
