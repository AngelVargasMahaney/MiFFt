import React from 'react'
import { Link } from "react-router-dom"
const Error404Page = () => {
  return (

    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">UPS! 🥺 Error 404</h1>


              </div>

              <div className="contant_box_404">
                <h3 className="h2">
                  Lo sentimos, parece que te confundiste 😥
              		</h3>

                <p style={{color:'#000'}}>La página que solicitaste no existe o no se encuentra disponible</p>

                < Link className="btn btn-success" to="/" >
                  Ir a la página principal
                    </ Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Error404Page
