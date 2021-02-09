/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../components/Layout/layout';

// OGARNĄĆ IMG ŻEBY BYŁ FLUID

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(formatString: "DD MMMM, YYYY", locale: "pl")
        featuredImage {
          childImageSharp {
            fixed(width: 288, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
      html
    }
  }
`;

// Gatsby is gonna run this graphql query and the variable "slug"
// is going to come from the context, which was set in createPage.
// Then it is going to take the response (the post data) and
// its going to provide it as a prop to the Blog component

const MainContainer = styled.div`
  max-width: 850px;
  margin: 4rem auto 0;

  @media (max-width: ${({ theme }) => theme.devices.m}) {
    margin-top: 2rem;
  }
`;

const HeaderContainer = styled.div`
  position: relative;

  a {
    position: absolute;
    top: 11px; //pasuje do połowy wysokości tytułu
    left: 2rem;

    &::before {
      content: '<';
      position: absolute;
      top: 0;
      left: -1.5rem;
      transition: all 0.3s cubic-bezier(0.22, 0.665, 0.34, 0.875);
    }

    &:hover::before {
      transform: translateX(-0.5rem);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -0.3rem;
      right: 0;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.black};
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.devices.m}) {
    a {
      top: -2.5rem;
    }
  }
`;

const ContentContainer = styled.div`
  margin-top: 2rem;

  .gatsby-image-wrapper {
    float: left;
    margin-right: 2rem;
  }

  h4 {
    margin-bottom: 2rem;
  }

  div {
    width: 50%;
    display: contents;

    p {
      margin-top: 0;
      text-align: justify;
    }
  }

  @media (max-width: 882px) {
    display: flex;
    flex-direction: column;

    h4 {
      margin-top: 2rem;
    }

    .gatsby-image-wrapper {
      display: flex;
      align-self: center;
      margin-right: 0;
    }
  }
`;

export default function BlogPostTemplate({ data }) {
  //
  return (
    <Layout>
      <MainContainer>
        <HeaderContainer>
          <Link to="/blog">Wróc</Link>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <p>{data.markdownRemark.frontmatter.date}</p>
        </HeaderContainer>
        <ContentContainer>
          <Img fixed={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fixed} />
          <h4>{data.markdownRemark.frontmatter.description.replace(/\u00a0/g, ' ')}</h4>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </ContentContainer>
      </MainContainer>
    </Layout>
  );
}
