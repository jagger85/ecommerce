import React from 'react'
import Layout from '../components/shared/Layout'
import Hero from './Hero/Hero'
import MainSection from './Main-section/MainSection'
import FeaturedCollection from './featured-collection/FeaturedCollection'

function HomePage() {
  return (
    <Layout>
      <Hero/>
      <MainSection/>
      <FeaturedCollection/>
    </Layout>
  )
}

export default HomePage