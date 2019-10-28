import React from 'react';
import { MessageBar } from '../../modules/message-bar';
import { Hero } from '../../modules/hero';
import { Header } from '../../modules/header';
import { Feature, featureDataTextLeft } from '../../modules/feature';
import { Spacer } from '../../modules/spacer';
import { Columns, columnsData1To1To1, columnsDataClamped } from '../../modules/columns';
import { Tile } from '../../modules/tile';
import { Container, containerDataClampedWithPadding } from '../../modules/container';
import { Footer } from '../../modules/footer';

export default { title: 'Pages/Home' };

export const fullBleed = () => (
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
      <Tile />
      <Tile />
      <Tile />
    </Columns>
    <Spacer />
    <Footer />
  </>
);

export const clamped = () => (
  <>
    <MessageBar />
    <Header />
    <Hero />
    <Spacer />
    <Container {...containerDataClampedWithPadding}>
      <Feature />
      <Spacer />
      <Feature {...featureDataTextLeft} />
      <Spacer />
      <Columns {...columnsData1To1To1}>
        <Tile />
        <Tile />
        <Tile />
      </Columns>
    </Container>
    <Spacer />
    <Footer />
  </>
);
