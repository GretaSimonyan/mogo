import React, {Component} from 'react';

import { 
  Header, 
  Intro, 
  Container, 
  OurProgress, 
  WorkServices, 
  UniqueDesign, 
  Service,
  OurTeam,
  SomeWork,
  SWorkSlider,
  HappyClients,
  OurStoryes,
  Map,
  Footer,
} from './components';


function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Container/>
      <OurProgress/>
      <WorkServices/>
      <UniqueDesign/> 
      <Service/>
      <OurTeam/>
      <SomeWork/>
      <SWorkSlider/>
      <HappyClients/>
      <OurStoryes/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;