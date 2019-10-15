import React from 'react';
import { MessageBar } from '../../modules/message-bar';
import { Hero } from '../../modules/hero';
import { Header } from '../../modules/header';
import { Feature, featureDataTextLeft } from '../../modules/feature';
import { Spacer } from '../../modules/spacer';

export default { title: 'Pages/Home' };

export const Home = () => (
  <>
    <MessageBar />
    <Header />
    <Hero />
    <Spacer />
    <Spacer />
    <Feature />
    <Spacer />
    <Feature {...featureDataTextLeft} />
  </>
);
