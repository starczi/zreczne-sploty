import React from 'react';
import Layout from '../components/Layout/layout';
import HomeCarousel from '../components/Carousel/carousel';
import HomeContent from '../components/HomeContent/homeContent';

export default function Home() {
  return (
    <Layout>
      <HomeCarousel />
      <HomeContent />
    </Layout>
  );
}
