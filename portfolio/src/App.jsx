import { BrowserRouter } from 'react-router-dom';
import { About,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas, Contact} from './components'

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar client:visible/>
          <Hero />
        </div>
        <div className=''>
          <About client:visible/>
          <Experience client:visible/>
          <Tech />
          <Works client:visible/>
          {/*<Feedbacks client:visible/>*/}
 
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
