import React from 'react';
import { MessageBar } from '../../modules/message-bar';
import { Hero } from '../../modules/hero';
import { Header } from '../../modules/header';
import { Feature, featureDataTextLeft } from '../../modules/feature';
import { Spacer } from '../../modules/spacer';
import { Columns, columnsData1To1To1, columnsDataClamped } from '../../modules/columns';
import { Card } from '../../modules/card';
import { Container, containerDataClamped } from '../../modules/container';

export default { title: 'Pages/Home' };

export const Home = () => (
  <>
    <MessageBar />
    <Header />
    <Hero />
    <Spacer />
    <Feature />
    <Spacer />
    <Feature {...featureDataTextLeft} />
    <Spacer />
    <Columns {...columnsData1To1To1} fullBleed={false}>
      <Card />
      <Card />
      <Card />
    </Columns>
  </>
);

export const Home2 = () => (
  <>
    <MessageBar />
    <Header />
    <Hero />
    <Spacer />
    <Container {...containerDataClamped}>
      <Feature />
      <Spacer />
      <Feature {...featureDataTextLeft} />
      <Spacer />
      <Columns {...columnsData1To1To1}>
        <Card />
        <Card />
        <Card />
      </Columns>
    </Container>
  </>
);
