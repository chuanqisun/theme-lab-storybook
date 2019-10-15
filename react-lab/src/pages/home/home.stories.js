import React from 'react';
import { MessageBar } from '../../modules/message-bar/message-bar.module';
import { Hero } from '../../modules/hero/hero.module';
import { Header } from '../../modules/header/header.module';
import { Feature, featureDataTextLeft } from '../../modules/feature';

export default { title: 'Pages/Home' };

export const Home = () => (
  <>
    <MessageBar />
    <Header />
    <Hero />
    <Feature />
    <Feature {...featureDataTextLeft} />
  </>
);
