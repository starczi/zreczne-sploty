/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
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
  margin: 0 auto;
  padding: 0 1rem;

  h1 {
    margin-bottom: 1rem;
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

  @media (max-width: ${({ theme }) => theme.devices.m}) {
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
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p>{data.markdownRemark.frontmatter.date}</p>
        <ContentContainer>
          <Img fixed={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fixed} />
          <h4>{data.markdownRemark.frontmatter.description.replace(/\u00a0/g, ' ')}</h4>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </ContentContainer>
      </MainContainer>
    </Layout>
  );
}
