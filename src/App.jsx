import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import MainSection from './components/Main-section/MainSection'
import FeaturedCollection from './components/featured-collection/FeaturedCollection'
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <MainSection />
      <FeaturedCollection />
      <Footer />
    </div>
  )
}

export default App
