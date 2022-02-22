import React from 'react';
import './App.css';
import "./style.css";
import { NavLink } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import img from './images/s1.jpg';
import ReactPlayer from 'react-player';

function App() {
    return (
        <div className='App'>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container ">
                        <NavLink className="navbar-brand" to="/#">
                            Portfolio
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/services">
                                        Services
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='title-red'>
                <h1 className='title-a'>
                    Hello I'm
                    <span style={{ color: 'red', fontWeight: 'bold', marginLeft: '10px' }}>
                        <Typewriter
                            loop
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deletSpeed={50}
                            delaySpeed={1000}
                            words={['Salem Ouachouacha', 'Ouachouacha Salem']} />
                    </span>
                </h1>
                <div className='img-a' >
                    <img src="/assets/images/s2.jpg" alt='Salem ouachouacha' />

                    <div className="text">
                        <p><em> Hello I'm salem Ouachouacha Lorem ipsum dolor sit amet si, consectetur adipiscing elit. Sed et mattis mauris. Vestibulum at sagittis nisi ho.
                            Fusce tellus odio, vestibulum vel imperdiet ut, placerat et nisl. Nam eget risus justo.
                            Maecenas porttitor si mi nec sem sollicitudin feugiat. Donec consequat diam nec ha lectus varius rutrum sagittis
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mattis mauris. Vestibulum hia at sagittis nisi.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mattis mauris. Vestibulum  at sagittis nisi.

                        </em> </p> </div>
                    <NavLink className="btn btn-outline-primary me-4" to="/contact" role="button"> Get Started </NavLink>
                    <NavLink className="btn btn-primary" to="/about" role="button"> More About me </NavLink>

                </div>
            </div>
            <div className='title-r'>
                    <h1>
                        Another Picture Of Me And My Skills
                        <span style={{ color: 'red', fontWeight: 'bold', marginLeft: '10px' }}>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deletSpeed={50}
                                delaySpeed={1000}
                                words={['(Still Learning)']} />
                        </span>
                    </h1>
                    
                        <img className='img-box' src={img} alt='Salem ouachouacha' />
                        <div className='prog' >
                            <div className="text-e">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "98%" }}>Html</div>
                                    <span className='pro'>98%</span>
                                </div> <br />
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>Css</div>
                                    <span className='pro'>85%</span>
                                </div><br />
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}> JavaScript </div>
                                    <span className='pro'>65%</span>
                                </div><br />
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>React js</div>
                                    <span className='pro'>40%</span>
                                </div>
                            </div>
                        </div>
            </div>
            <div className='title-s' >
            <h1 className='letter'>
                        You Can Enjoy With This
                        <span style={{ color: 'red', fontWeight: 'bold', marginLeft: '10px' }}>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deletSpeed={50}
                                delaySpeed={1000}
                                words={['Special Music']} />
                        </span>
                    </h1>
                        <div className='video' >
                        <ReactPlayer controls  url='https://www.youtube.com/watch?v=en9KJdbrZj0' />
                        </div>
            </div>
        </div>


    );
}
<>
</>
export default App;
