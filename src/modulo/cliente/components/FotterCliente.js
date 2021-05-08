import React from 'react'

const FotterCliente = () => {
    return (
        <footer>
            <div className="card-footer">
                <div className="footer__contacto">
                    <p style={{ textAlign: 'center' }}>Contacto</p>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i> m4hl@gmail.com</p>
                    <p><i className="fas fa-phone    "></i> +51 958478542</p>
                </div>
                <div className="footer__logo">
                    <p>MFTH4L</p>
                </div>
                <div className="footer__social">
                    <i className="fab fa-facebook    "></i>
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                    <i className="fab fa-github" aria-hidden="true"></i>
                </div>
            </div>
        </footer>
    )
}

export default FotterCliente

