import './App.css'
import { Helmet, HelmetProvider} from 'react-helmet-async'

function App() {

  const HelmetContext = {}

  return (
    <HelmetProvider context={HelmetContext}>
      <Helmet>
        <title>C.R.I Fluid Systems - Overview</title>
        <meta name="title" content="C.R.I Fluid Systems - Overview" />
        <meta name="description" content="Pumping trust worldwide" />
      </Helmet>
        <header className="">
        </header>
    </HelmetProvider>
  )
}

export default App
