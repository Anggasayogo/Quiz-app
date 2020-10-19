import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Logo, User } from '../../../assets'

const Headers = () => {
    const history = useHistory();
    const logOut = ()=>{
        history.push('/');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#6610f2'}}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} width={60} alt="images" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav btn">
                    <li className="nav-item">
                        <Link to="/">
                            <img src={User} alt="gambar" width={30}/>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Headers
