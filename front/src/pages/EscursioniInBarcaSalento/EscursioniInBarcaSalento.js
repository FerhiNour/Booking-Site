import React from 'react'
import "./EscursioniInBarcaSalento.css"

import Header from '../../sections/Header/Header'
import GetInTouch from '../../components/GetInTouch/GetInTouch'
import Footer from '../../sections/Footer/Footer'
import Escursioni from '../../components/Escursioni/Escursioni'

const EscursioniInBarcaSalento = () => {
  return (
    <>
      <Header/>
      <div className="EscursioniInBarcaSalento mb-5">
      <div className="text-center">
        <h1>Scopri la costa salentina</h1>
        <h5>Escursioni e Gite in Barca al miglior prezzo</h5>
        <p>Scopri tutte le diverse gite in barca con partenza da Castro Marina, nel Salento.</p>
      </div>
      </div>
      <Escursioni/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}

export default EscursioniInBarcaSalento
