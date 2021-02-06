import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/Layout/layout';

const StyledWrapper = styled.div`
  max-width: 850px;
  min-width: 272px;
  margin: 0 auto;
  position: relative;

  p {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0;
    top: 0;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    z-index: 1;
    color: ${({ theme }) => theme.colors.black};
    background: white;
    opacity: 0.65;
    transition: all 1s ease;

    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }
`;

// Do ogarnięcia max width/height i wyciągnąć podkreślanie do czegoś
const StyledLi = styled.li`
  display: flex;
  width: 680px;
  height: 272px;
  margin: 0 auto 2rem;
  box-shadow: 0 0 40px rgb(0 0 0 / 8%);

  .link {
    display: flex;
  }

  @media (max-width: 712px) {
    flex-direction: column;
    width: 272px;
    height: auto;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 408px;

  h6 {
    padding-top: 0.5rem;
  }

  @media (max-width: 712px) {
    width: auto;
    /* max-height: 332px; */
  }
`;

const StyledP = styled.p`
  position: relative;
  padding: 1rem 0 0;
  font-style: italic;
  margin: auto 0;
  max-height: 168px;

  span {
    display: table;
    margin: 1rem 0 0 auto;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.3rem;
      right: 0;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.black};
    }

    &::after {
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 712px) {
    max-height: 284px;
    /* div {
      padding-top: 1rem;
    } */
  }
`;

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero_blog.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 850, maxHeight: 425, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              description
              date(formatString: "DD MMMM, YYYY", locale: "pl")
              featuredImage {
                childImageSharp {
                  fixed(width: 272, height: 272, quality: 100) {
                    ...GatsbyImageSharpFixed_noBase64
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
      <StyledWrapper>
        <p>Lorem ipsum</p>
        <Img fluid={data.file.childImageSharp.fluid} alt="hero-blog" />
      </StyledWrapper>
      <ul>
        {data.allMarkdownRemark.edges.map((edge) => (
          <StyledLi key={edge.node.frontmatter.title}>
            <div>
              <Link to={`/blog/${edge.node.fields.slug}`} className="link">
                <Img fixed={edge.node.frontmatter.featuredImage.childImageSharp.fixed} alt="hero" />
              </Link>
            </div>
            <StyledContentWrapper>
              <h3>
                <Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link>
              </h3>
              <h6>{edge.node.frontmatter.date}</h6>
              <StyledP>
                {edge.node.frontmatter.description.replace(/\u00a0/g, ' ')}
                <span>
                  <Link to={`/blog/${edge.node.fields.slug}`}>Wincyj</Link>
                </span>
              </StyledP>
            </StyledContentWrapper>
          </StyledLi>
        ))}
      </ul>
    </Layout>
  );
}
