import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/Layout/layout';

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
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              description
              date(formatString: "DD MMMM, YYYY", locale: "pl")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1170, maxHeight: 585) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                  fixed(width: 272, height: 272) {
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
