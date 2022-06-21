import React from "react";
import { useState } from "react";
import { FaBusinessTime, FaWindowClose } from "react-icons/fa";
import { GiHealthCapsule, GiTechnoHeart, GiHamburgerMenu, GiSportMedal, GiMaterialsScience, GiFilmStrip } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import './Category.scss'

const Category = () => {

  const [mobile, setMobile] = useState(false)



  return (

    <header>

      <NavLink to='/' className="logo">
        <span> News-360</span>
      </NavLink>

      <nav className={mobile ? "resp-nav" : "navbar"} onClick={() => setMobile(false)}>

        <NavLink className="navitem" to={"/NewsCat/business"}>
          <FaBusinessTime />
          <h4>Business</h4>
        </NavLink>
        <NavLink className="navitem" to={"/NewsCat/entertainment"}>
          <GiFilmStrip />
          <h4>Entertainment</h4>
        </NavLink>
        <NavLink className="navitem" to={"/NewsCat/health"}>
          <GiHealthCapsule />
          <h4>Health</h4>
        </NavLink>
        <NavLink className="navitem" to={"/NewsCat/science"}>
          <GiMaterialsScience />
          <h4>Science</h4>
        </NavLink>
        <NavLink className="navitem" to={"/NewsCat/sports"}>
          <GiSportMedal />
          <h4>Sports</h4>
        </NavLink>
        <NavLink className="navitem" to={"/NewsCat/technology"}>
          <GiTechnoHeart />
          <h4>Technology</h4>
        </NavLink>
      </nav>


      <span className="menu-icon" onClick={() => setMobile(!mobile)} >
        {mobile ? <FaWindowClose /> : <GiHamburgerMenu />}
      </span>



    </header>
  );
};

export default Category;



