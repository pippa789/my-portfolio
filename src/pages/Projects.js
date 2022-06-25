import styled from "styled-components";
import React, {useState} from 'react';
import calculator from '../images/calculator.png';
import guide from '../images/guide.png';
import wildflowers from '../images/wildflowers.png';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import Footer from "../components/Footer";

const Title=styled.h1`
font-size: 20px;
font-family: 'Righteous', cursive;
margin: 10px 600px 0px 50px;
color: #f00768;
// text-shadow:
// -1px -1px 0 #000,
// 1px -1px 0 #000,
// -1px 1px 0 #000,
// 1px 1px 0 #000;
//background-color:yellow;
`;
const Text=styled.p`
font-family: 'Raleway', sans-serif;
line-height: 1.5;
font-weight: 300;
margin: 15vh 20vw 0vh 20vw;
font-size: 24px;
color: white;
padding: 30px 30px 30px 30px;
`;
const Line=styled.div`
margin: 10px 10px 10px 200px;
width: 75%;
height:1px;
background-color:red;
`;
const Container= styled.div`
display: flex;
flex-direction: row;
`;

const Box=styled.div`
display: flex;
flex-direction: flex-row;
justify-content: space-evenly;
align-items: center;
Width: 100%;
height: auto;
opacity: 0.9;
padding: 100px 50px 100px 50px
`;

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false)
  const [modalOpen2, setModalOpen2] = useState(false)
  return (
    <>
    <Modal className="modal" isOpen={modalOpen}>
      <p className="modal-text">
        This is a simple calculator built in React. It has been deployed on git. 
      </p>
        <a href="https://pippa789.github.io/calculator/" target="_blank" rel="noreferrer">
          <button className="visit">Visit site</button> 
        </a>
      <button className='close' onClick={() => setModalOpen(false)}>X</button>
    </Modal>
    <Modal className="modal" isOpen={modalOpen1}>
      <p className="modal-text">This is a movie guide built in React using an API and filtering the results by genre. You can click the description button to get a summery of the movie. I used framer motion to animate the grid and CSS to style the components. </p>
        <a href='https://guide.herokuapp.com/' target="_blank" rel="noreferrer">
          <button className="visit">visit site</button> 
        </a>
          <button className="close" onClick={() => setModalOpen1(false)}>X</button>
    </Modal>
    <Modal className='modal' isOpen={modalOpen2}>
      <p className="modal-text">This site is strictly HTML and CSS. It's the first site I built with my own code in an editor. It's been deployed on github io, and if you peak at the code it's long! I've come a long way since then :-)</p>
        <a href='https://pippa789.github.io/wildflowersite/' target="_blank" rel="noreferrer">
          <button className="visit">visit site</button> 
        </a>
      <button className="close" onClick={() => setModalOpen2(false)}>X</button>
    </Modal>

    {/* <Title>Hello</Title> */}
    <Text>Welcome to my projects page. Here are two small projects built in React and one built with HTML and CSS. I've used git to version control and deploy all three. I chose these projects to exibit some basic frontend knowledge and design but I have many other projects you can checkout in github.
    </Text>
    <Line />
    <Container>
    <Box>
      <div className="project">
        <img src={calculator} alt="brain" width='350vw' height='250vh' />
          <button className="see-more" onClick={() => setModalOpen(true)} >see more</button>
      </div>
      <div className="project">
        <img src={guide} alt="brain" width='350vw' height='250vh' />
          <button className="see-more" onClick={() => setModalOpen1(true)} >see more</button>
      </div> 
      <div className="project">
        <img src={wildflowers} alt="brain" width='350vw' height='250vh' />
          <button className="see-more" onClick={() => setModalOpen2(true)} >see more</button> 
     </div>
    </Box>
    </Container>
    <Footer />
    </>  
   )
}

export default Projects