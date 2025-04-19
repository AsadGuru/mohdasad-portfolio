import React from 'react';
import Profile from '../../assets/Home.png';
import { Link } from 'react-router';
import { RiArrowRightLine } from 'react-icons/ri';
import './home.css';

const Home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt="" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">
          <span>I'm Mohd Asad Naseem</span> <br /> MERN Stack Developer
        </h1>

        <p className="home-description">
          As a passionate & skilled web developer with a keen eye for design. I create engaging, innovative and user-friendly websites and web-applications. My goal is to help people find their next great project.<br />
          <span className='desc'>I'm capable for turning vision into reality with code and design .</span>
        </p>

        <Link to='/about' className='button'>More About Me
          <span className="button-icon">
            <RiArrowRightLine />
          </span>
        </Link>
      </div>

      <div className="color-block"></div>
    </section>
  )
}

export default Home;