import React from 'react';
import { MessageBar } from '../../modules/message-bar';
import { Filters } from '../../modules/filters';
import { ProductGrid, productGridData } from '../../modules/product-grid';
import { Header } from '../../modules/header';
import { Spacer } from '../../modules/spacer';
import { Columns, columnsData1To1To1, columnsData1To2 } from '../../modules/columns';
import { Tile } from '../../modules/tile';
import { Container, containerDataClamped } from '../../modules/container';
import { Footer } from '../../modules/footer';

export default { title: 'Pages/Search results' };

export const fullBleed = () => (
  <>
    <MessageBar />
    <Header />
    <Spacer />
    {/* This should be replaced with a dedicated container */}
    <Columns {...columnsData1To2}>
      <Filters />
      <ProductGrid />
    </Columns>
    <Spacer />
    <Footer />
  </>
);
