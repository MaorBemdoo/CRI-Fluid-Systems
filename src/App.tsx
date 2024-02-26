import './App.css'
import logo from "./assets/logo.png"
import Img1 from "./assets/1.png"
import Img2 from "./assets/2.png"
import Img3 from "./assets/3.png"

function App() {

  return (
    <>
        <header>
          <img src={logo} alt="logo"/>
        </header>
        <main>
          <section className='section1'>
            <div className='section1_div1'>
              <img src={Img1} alt="Image 1" />
            </div>
            <div className="section1_div2">
              <b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b>
              <ul>
                <li>
                  C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
              <img src={Img2} alt="Image 2" />
              <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
          </section>
          <section className='section2'>
            <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            <img src={Img3} alt="Image 3"/>
          </section>
        </main>
        <footer></footer>
    </>
  )
}

export default App
