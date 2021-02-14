import React from 'react';
import Layout from '../components/Layout/layout';
import HomeCarousel from '../components/Carousel/carousel';
import HomeContent from '../components/HomeContent/homeContent';

export default function Home() {
  console.log(process.env.GATSBY_GRAPHQL_IDE);
  return (
    <Layout>
      <HomeCarousel />
      <HomeContent />
    </Layout>
  );
}
