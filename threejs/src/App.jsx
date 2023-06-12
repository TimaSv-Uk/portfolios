import { BrowserRouter } from 'react-router-dom';
import { About,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas, Contact} from './components'

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <div className=''>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
        </div>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
