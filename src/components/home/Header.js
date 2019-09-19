import React from 'react'
import Hero from '../globals/Hero'
import Banner from '../globals/Banner'
import {PrimaryBtn} from '../globals/Bottons'
import aboutImg from "../../images/aboutBcg.jpeg"

import homeImg from "../../images/homeBcg.jpeg"

const Header = () => {
    return (
        <div>
            <Hero img={homeImg} ><Banner greeting="welcome to" title="beachwalk
            resort" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, dicta? Consequatur laboriosam reprehenderit cupiditate facilis.">
            <PrimaryBtn t="1rem">view details</PrimaryBtn>
            {/* <PrimaryBtn as="a" href="https://www.google.com">view details</PrimaryBtn> */}

            </Banner> 
            </Hero>
        </div>
    )
}

export default Header
