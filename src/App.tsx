import './App.css'
import { Helmet, HelmetProvider} from 'react-helmet-async'
import logo from "./assets/logo.png"

function App() {

  const HelmetContext = {}

  return (
    <HelmetProvider context={HelmetContext}>
      <Helmet>
        <title>C.R.I Fluid Systems - Overview</title>
        <meta name="title" content="C.R.I Fluid Systems - Overview" />
        <meta name="description" content="Pumping trust worldwide" />
      </Helmet>
        <header>
          <img src={logo}/>
        </header>
        <main></main>
        <footer></footer>
    </HelmetProvider>
  )
}

export default App
