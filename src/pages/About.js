import styled from 'styled-components';
import Footer from '../components/Footer';
import retrogirl from '../images/retrogirl.jpg'

const Contain=styled.div`
display: flex;
flex-direction: row;

`;
const AboutMe = styled.p`
font-size: 20px;
padding:1vw 35vh 10vw 10vh;
font-family: 'Montserrat', sans-serif;
color: white;
font-weight: 500;
line-height: 1.5;
`;
const Retrogirl=styled.div`
margin: 10vh 10vw 5vh -11vw;
padding: -5vh 8vw 5vh 2vw;
`;

const AboutTitle=styled.div`
display: flex;
font-size: 34px;
font-family: 'Righteous', cursive;
color: rgb(242, 8, 8);
margin: 50px 500px 5px 50px;
`;


function About() {
  return (
    <>
    <AboutTitle>About me</AboutTitle>
    <Contain>
      <AboutMe>  I have a solid grasp of the web development project life cycle; documentation, design, planning sprint, and meeting deadlines. I love to explore new ideas, and technologies, I have great communication skills, verbal and written. I am self-motivated and eager to learn and have the ability to work unsupervised and achieve results. I prioritize flexibility in my approach to tasks and I have a good eye for detail, design, and aesthetics. I have built and contributed to projects in self-starting and collaborative Agile environments, developing strong soft skills such as; problem-solving and communication skills while expanding my knowledge and experience of vital skills such as version control and deployment using GitHub.  I have some exposure to UX through Photoshop or Figma and enjoy gathering requirements and formulating user stories.
      I have a varied and colorful work history. I’ve been a silversmith, a baker, and a top seller at several retail establishments. I’ve even crewed on two tall ships, including the California State Tallship, the Californian. I landed a few costume design jobs and attended California Polytechnical University, Pomona studying technical theatre design before relocating to the UK. My husband and I have run Bad Rabbit Records, a recording studio and practice rooms for a little over twenty years now, and have been a part of the Liverpool music scene for two decades. 

</AboutMe>
    <Retrogirl>
    <img src={retrogirl} alt="brain" width='200px' height='200px' />
    </Retrogirl>
    </Contain>
    <Footer />
    </>
  )
}

export default About

