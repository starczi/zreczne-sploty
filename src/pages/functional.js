/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/Layout/layout';

export default function Functional() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mak1.jpg" }) {
        childImageSharp {
          fixed(width: 252, height: 252, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      file(relativePath: { eq: "mak1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 260, maxHeight: 260, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  const StyledBackgroundImage = styled(BackgroundImage)`
    box-shadow: 0 0 40px rgb(0 0 0 / 10%);
    //Ogarnąć ten margin bo wstyd
    margin: 91.5px 1rem 0 1rem;
    @media (max-width: 1167px) {
      margin-top: 2rem;
    }
  `;

  const BlackOverlay = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    :hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
    div {
      position: relative;
      padding: 1rem;
      margin: 0 auto;
      background-color: white;
      text-transform: uppercase;
      &::before {
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        content: '';
        position: absolute;
        border: 1px solid #fff;
      }
    }
  `;

  return (
    <Layout>
      <h1> Sploty użytkowe</h1>
      <StyledBackgroundImage fixed={data.file.childImageSharp.fixed}>
        <Link to="#">
          <BlackOverlay>
            <div>torebki</div>
          </BlackOverlay>
        </Link>
      </StyledBackgroundImage>
      <StyledBackgroundImage fixed={data.file.childImageSharp.fixed}>
        <Link to="#">
          <BlackOverlay>
            <div>kwietniki</div>
          </BlackOverlay>
        </Link>
      </StyledBackgroundImage>
      <StyledBackgroundImage fixed={data.file.childImageSharp.fixed}>
        <Link to="#">
          <BlackOverlay>
            <div>bieżniki</div>
          </BlackOverlay>
        </Link>
      </StyledBackgroundImage>
      <StyledBackgroundImage fixed={data.file.childImageSharp.fixed}>
        <Link to="#">
          <BlackOverlay>
            <div>półki</div>
          </BlackOverlay>
        </Link>
      </StyledBackgroundImage>
    </Layout>
  );
}
