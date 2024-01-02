import React from 'react';
import './Home.scss'; // Importing the SCSS file for the Home component
import logo from '../../assets/images/logo.png'; // Import the logo image


function Home() {
    return (
        <div className="hero-section d-flex flex-column">
            <div className="container flex-grow-1 d-flex justify-content-center align-items-center">

                <div className="col-sm-auto d-none d-lg-block"> {/* The image will be hidden on xs devices but visible on lg and up */}
                    <img src={logo} alt="Climatebug logo" className="img-fluid" />
                </div>

                <div className="col-12 col-md"> {/* This will take full width on small devices and remaining width on medium and up */}
                    {/* The column will take full width on small devices and 8/12 width on large devices */}
                    <h1>climateBUG <img src={logo} alt="Climatebug logo" className="hero-small-logo d-lg-none" /></h1>
                    {/* The small logo is hidden on lg devices and visible on smaller devices */}
                    <p className="lead">A data-driven framework for analyzing bank reporting through a climate lens.</p>

                    <p>
                        By Yinan Yu, Samuel Scheidegger, Jasmine Elliott, and Åsa Löfgren.
                    </p>

                    <p>
                        Our interdisciplinary approach applies computational linguistics learning methods to the banking industry, focusing on climate change. Detect latent insights on how banks discuss climate-related activities with our novel framework, which employs natural language processing (NLP).
                    </p>



                    <a href="https://doi.org/10.1016/j.eswa.2023.122162" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
                        Read Our Paper
                    </a>

                    <a href="https://huggingface.co/datasets/lumilogic/climateBUG-Data" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
                        Download Our Dataset
                    </a>

                    <a href="https://huggingface.co/lumilogic/climateBUG-LM" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">
                        Use Our Model
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Home;
