"use client";

import React from 'react'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Box, 
  useColorModeValue,
  Container,
  SimpleGrid,
  IconButton
} from '@chakra-ui/react';

// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

import { useState } from 'react';

import BlackButton from "../components/blackbutton";

import bg from './Frame1.png'

export default function Home() {

  const h2Heading = {
    fontWeight:"semiBold",
    
  }

  const h2HeadingMedium = {
    fontWeight:"medium",
    
  }

  const p2 = {
    fontStyle:"regular",
    lineHeight: '32px',
    fontWeight: 400
    
  }

  interface imageProps {
    name: string;
    role: string;
    src: string;
  }

  const ImageComponent = ({ name, role, src }: imageProps) => {
    return (
      <Stack gap={{xl: "24px", lg: '24px', md: '5px', sm:'5px'}}>
        <Image
          boxSize={{xl: '376px', lg: '300px', md: '250px', sm: '450px'}}
          objectFit='cover'
          src={src}
          alt='Dan Abramov'
        ></Image>
        <Flex justify={"space-between"} align={"center"}>
          <Text fontSize={{base: "18", lg: "20px"}} >{name}</Text>
          <Text fontSize={{base: "12", lg: "16px"}} >{role}</Text>
        </Flex>

      </Stack>
    );
  }

  /* carrousel */
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Design Projects 1',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
  ]
  

  return (
    <>
      <Box bg={useColorModeValue("#F6F6F8", "#1B1B1B")}>

        {/* hero section */}
        {/* <div style={{
          backgroundImage: `url(${bg.src})`,
          width: '100%',
          height: '100%',
        }}>
          <Box position={'relative'} pt={{sm:'110px', base:'40px'}} pb={{sm:'186px', base:'40px'}}  >
            <Container display="flex" maxW={'7xl'} justifyContent={{base: 'center', sm: 'start'}} >
                  <Stack gap={30} textAlign={{base: 'start', sm: 'start'}} align={{base: 'start', sm: 'start'}}   maxW={{sm: 500,md:650, lg: 750}} p={"10px"}>
                    <Text style={h2Heading} fontSize={{ base: '30px', sm: '40px' , md: '46px', lg: '56px' }} lineHeight={{base: '45px', md: '64px'}} >
                      Creating opportunities and revolutionising research in the wheat farming industry
                    </Text>
                    <Text style={p2} fontSize={{ base: '14px', md: '18px', lg: '20px' }} >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et 
                      velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora 
                      torquent per conubia nostra, per inceptos himenaeos.
                    </Text>
                    <BlackButton></BlackButton>
                  </Stack> 
            </Container>
          </Box>  
        </div> */}


        <div style={{
          backgroundImage: `url(${bg.src})`,
          width: '100%',
          height: '100%',
        }}>
          <Box position={'relative'} pt={{sm:'110px', base:'40px'}} pb={{sm:'186px', base:'60px'}}  >
            <Container display="grid" maxW={'7xl'} pl={{md: 10}} >
                  <Stack gap={{base: 5, sm: 30}} placeItems={{base: "center", sm:"start"}} maxW={{sm: "55ch",md: "65ch",lg:"75ch"}} textAlign={{base: "center", sm:"start"}} >
                    <Text style={h2Heading} fontSize={{ base: '30px', sm: '40px' , md: '46px', lg: '56px' }} lineHeight={{base: '45px', md: '64px'}} >
                      Creating opportunities and revolutionising research in the wheat farming industry
                    </Text>
                    <Text style={p2} fontSize={{ base: '12px', sm: '18px', lg: '20px' }} >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et 
                      velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora 
                      torquent per conubia nostra, per inceptos himenaeos.
                    </Text>
                    <BlackButton></BlackButton>
                  </Stack> 
            </Container>
          </Box>  
        </div>



        {/* third section */}
        <Box>
          <Container maxW={"6xl"} pt={{base:'60px', md:'150px', lg:'216px', }} pb={{base:'80px',md: '120px', lg:'176px'}} pl={{md: 10}} pr={{md: 10}}>
            <Stack gap={{base: "5px", sm: "48px"}} >
              <Box  display="flex" justifyContent={{base: "center", sm: "left"}} textAlign={{base: "center", sm:"start"}}>
                <Text maxW={792}  style={h2Heading} fontSize={{ base: '30px', sm: '40px' , md: '46px', lg: '60px' }} lineHeight={{base: '45px', md: '64px'}} >
                  Creating opportunities and revolutionising research in the wheat farming industry
                </Text>
              </Box>
              <Box  display="flex" justifyContent={{base: "center", sm: "right"}} textAlign={{base: "center", sm:"start"}}  >
                <Text maxW={480} style={p2} fontSize={{ base: '12px', sm: '18px', lg: '20px' }} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </Text>
              </Box>
            </Stack>
          </Container>

          <Container maxW={792} >
            <Stack gap={{base: "10px", sm: "24px"}} display="flex" justifyContent="center" textAlign={"center"} >
              <Box  >
                <Text  style={h2HeadingMedium} fontSize={{ base: '26px', sm: '36px' , md: '40px', lg: '50px' }} lineHeight={{base: '45px', md: '64px'}} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </Box>
              <Box  >
                <Text style={p2} fontSize={{ base: '12px', sm: '18px', lg: '20px' }} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
                </Text>
              </Box>
            </Stack>
          </Container>

          <Box pt={"104px"} pb={{base: "100px",md: "200px"}} display={"flex"} justifyContent={"center"}  >
              <SimpleGrid columns={{ base: 1, md: 3 }} p={"auto"} m={"auto"} maxW={"7xl"} spacing={{base: "20px", md: "20px",lg: "40px"}} >
                <ImageComponent
                  name={'Name of Person'}
                  role={'What they do'}
                  src={'https://bit.ly/dan-abramov'}
                ></ImageComponent>
                <ImageComponent
                  name={'Name of Person'}
                  role={'What they do'}
                  src={'https://bit.ly/dan-abramov'}
                ></ImageComponent>
                <ImageComponent
                  name={'Name of Person'}
                  role={'What they do'}
                  src={'https://bit.ly/dan-abramov'}
                ></ImageComponent>
                
              </SimpleGrid>
          </Box>
        </Box>

        <Box bg="#1B1B1B" textAlign={"center"} pb={{base:'80px',md: '100px', lg:"144px"}}  pt={{base:'40px',md: '60px', lg:"88px"}}>
          <Text fontSize={{base: "24px", md: "30px"}} textColor={"#FFF"} fontWeight={"400px"}  pb={{base:'40px',md: '60px', lg:"88px"}} >
            Our Projects
          </Text>
          <Box position={'relative'} height={{base: '450px', sm: '450px', md: '500px', lg: '600px' }} maxW={'5xl'} overflow={'hidden'} margin={"auto"} pl={"20px"} pr={"20px"} >
            {/* CSS files for react-slick */}
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
              aria-label="left-arrow"
              variant="ghost"
              position="absolute"
              left={side}
              top={top}
              transform={'translate(0%, -50%)'}
              zIndex={2}
              onClick={() => slider?.slickPrev()}>
              <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              variant="ghost"
              position="absolute"
              right={side}
              top={top}
              transform={'translate(0%, -50%)'}
              zIndex={2}
              onClick={() => slider?.slickNext()}>
              <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
              {cards.map((card, index) => (
                <Box
                  key={index}
                  height={'6xl'}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${card.image})`}>
                  {/* This is the block you need to change, to customize the caption */}
                  <Container size="container.lg" height="600px" position="relative">
                    <Stack
                      spacing={6}
                      maxW={'lg'}
                      position="relative"
                      top="50%"
                      transform="translate(0, -50%)">
                      <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        {card.title}
                      </Heading>
                      <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                        {card.text}
                      </Text>
                    </Stack>
                  </Container>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>


        <Box display={"flex"} justifyContent={"center"}>
          <Stack pt={{base: "60px", md: "144px"}} pb={{base: "60px", md: "144px"}} maxW={"7xl"} pl={{md: 10}} pr={{md: 10}} >
            <Flex justify={"space-between"} direction={{base: "column",md: "row"}} textAlign={{base: "center", md: "start"}} >
              <Text  style={h2HeadingMedium} fontSize={{ base: '30px', sm: '40px' , md: '46px', lg: '56px' }} lineHeight={"64px"}>
                Nunc vulputate libero et velit interdum
              </Text>
              <Text  fontSize={{ base: '12px', sm: '16px', lg: '18px' }} alignSelf={"end"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Nunc vulputate libero et velit interdum, ac 
                aliquet odio mattis.
              </Text>
              
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 2 }} pt={"80px"} p={"auto"} maxW={"7xl"}  zIndex={1} spacing={6}>
              <Box maxW={"584px"} style={{height: "240px", backgroundColor: "#1B1B1B"}} ></Box>
              <Box maxW={"584px"} style={{height: "240px", backgroundColor: "#1B1B1B"}} ></Box>
              <Box maxW={"584px"} style={{height: "240px", backgroundColor: "#1B1B1B"}} ></Box>
              <Box maxW={"584px"} style={{height: "240px", backgroundColor: "#1B1B1B"}} ></Box>
            </SimpleGrid>
          </Stack>
        </Box>
        

      </Box>
    </>
  );
}




