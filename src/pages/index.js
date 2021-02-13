import React from 'react';
// import { graphql, useStaticQuery, Link } from 'gatsby';
// import Img from 'gatsby-image';
// import styled from 'styled-components';
import Layout from '../components/Layout/layout';
import HomeCarousel from '../components/Carousel/carousel';

export default function Home() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             title
  //             date(formatString: "DD MMMM, YYYY", locale: "pl")
  //             featuredImage {
  //               childImageSharp {
  //                 fluid(maxHeight: 576, quality: 100) {
  //                   ...GatsbyImageSharpFluid
  //                   presentationHeight
  //                 }
  //               }
  //             }
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <Layout>
      <HomeCarousel />
    </Layout>
  );
}
