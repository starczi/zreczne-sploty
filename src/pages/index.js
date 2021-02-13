import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import Layout from '../components/Layout/layout';

const StyledCarousel = styled(Carousel)`
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    filter: invert(100%);
  }
`;

const StyledCarouselItem = styled(Carousel.Item)`
  max-height: 100%;
  height: ${({ theme }) => theme.devices.s};

  @media (max-width: 480px) {
    height: auto;
  }
`;

const StyledCaption = styled(Carousel.Caption)`
  background: ${({ theme }) => theme.colors.black};
  opacity: 0.7;
  max-width: 416px;
  margin: 0 auto;
  padding: 1rem;

  h3 {
    margin-bottom: 0.5rem;
  }
`;

// height: `${image.node.frontmatter.featuredImage.childImageSharp.fluid.presentationHeight}px`,

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY", locale: "pl")
              featuredImage {
                childImageSharp {
                  fluid(maxHeight: 576, quality: 100) {
                    ...GatsbyImageSharpFluid
                    presentationHeight
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <StyledCarousel interval={null}>
        {data.allMarkdownRemark.edges.map((edge) => (
          <StyledCarouselItem key={edge.node.id}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <Img
                fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
                key={edge.node.frontmatter.title}
                style={{ maxHeight: '100%' }}
                imgStyle={{ objectFit: 'contain' }}
                alt={edge.node.id}
              />
              <StyledCaption>
                <h3>{edge.node.frontmatter.title}</h3>
                <p>{edge.node.frontmatter.date}</p>
              </StyledCaption>
            </Link>
          </StyledCarouselItem>
        ))}
      </StyledCarousel>
    </Layout>
  );
}
