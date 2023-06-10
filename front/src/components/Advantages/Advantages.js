import React from 'react'
import './Advantages.css'
import img1 from "../../assets/images/boat-icon.png"
import img2 from "../../assets/images/shield-icon.png"
import img3 from "../../assets/images/captain-icon.png"
import img4 from "../../assets/images/badge-icon.png"
import img5 from "../../assets/images/captain1-icon.png"
import img6 from "../../assets/images/boat1-icon.png"

const Advantages = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <figure>
                    <img src={img1} alt="Boat icon" style={{width:"100px"}}/>
                    <figcaption>Attrezzature di sicurezza</figcaption>
                </figure>
            </div>
            <div className='col-2'>
                <figure>
                    <img src={img2} alt="shield icon" style={{width:"100px"}}/>
                    <figcaption>Vela e pesca</figcaption>
                </figure>
            </div>
            <div className='col-2'>
                <figure>
                    <img src={img3} alt="captain icon" style={{width:"100px"}}/>
                    <figcaption>Esplorazione del mare</figcaption>
                </figure>
            </div>
            <div className='col-2'>
                <figure>
                    <img src={img4} alt="badge icon" style={{width:"100px"}}/>
                    <figcaption>Servizi a cinque stelle</figcaption>
                </figure>
            </div>
            <div className='col-2'>
                <figure>
                    <img src={img5} alt="captain icon" style={{width:"100px"}}/>
                    <figcaption>Equipaggio autorizzato</figcaption>
                </figure>
            </div>
            <div className='col-2'>
                <figure>
                    <img src={img6} alt="Boat icon" style={{width:"100px"}}/>
                    <figcaption>Cucina e Ristorazione</figcaption>
                </figure>
            </div>
        </div>
      </div>
    </>
  )
}

export default Advantages
