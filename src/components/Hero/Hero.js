import React from 'react'
import { ButtomWrapper, HeroButton, HeroSection, HeroText, HeroVideo } from './HeroStyles'
import vid1 from "../../assests/vid1.mp4"
import { Button, Container, MainHeading } from '../../globalStyles'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <HeroSection>
        <HeroVideo src={vid1} autoPlay loop muted/>
        <Container>
            <MainHeading>Your data is secure with us</MainHeading>
            <HeroText>
                We provide the best security systems for clients all over the world
            </HeroText>
            <ButtomWrapper>
                <Link to="signup">
                    <Button>Get Started</Button>
                </Link>
                <HeroButton>Find More</HeroButton>
            </ButtomWrapper>
        </Container>
    </HeroSection>
  )
}

export default Hero