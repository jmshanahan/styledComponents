import React from "react";
import styled from "styled-components";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media
} from "../../styles";
import { PrimaryBtn } from "../globals/Bottons";

const About = () => {
  return (
    <div>
      <Section>
        <AboutCenter>
        <div className="about-img">
            <img src={aboutImg} alt="about us"/>
        </div>
        <div className="about-info">
          <Title title="about us" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis est consequuntur laborum sequi magni reiciendis officia omnis excepturi officiis tenetur dolor, veritatis at unde repudiandae aspernatur ipsa assumenda in?</p>
            <PrimaryBtn>read more</PrimaryBtn>
        </div>
        </AboutCenter>
      </Section>
    </div>
  );
};
const AboutCenter = styled.div`
    .about-image-rendering, .about-info {
        padding: ${setRem(30)};
    }
    .about-img{
        img{
            width: 100%;
            display:block;
            ${setBorder({width: setRem(6), color:setColor.primaryColor})};

        }
    }
    .about-info{
        p{
            ${setLetterSpacing(3)}
        }
    }
    width: 90vw;
    margin: 0 auto;
    ${media.desktop`
    width: 100vw;
        max-width:1170px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: ${setRem(32)};
        .about-img{
            align-self: center;
        }
        .about-info{
            p{
                width: 80%;
            }
        }
    `}
`;
export default About;
