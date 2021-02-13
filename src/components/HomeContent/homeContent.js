import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  background-color: grey;
  margin-top: 4rem;
  padding: 1rem;

  p {
    background-color: darkmagenta;
    margin: 1rem 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.devices.m}) {
    margin-top: 2rem;
    flex-direction: column;
  }
`;

const StyledOuterContainer = styled.div`
  &:first-of-type {
    background-color: yellow;
    flex: 2;
  }
  &:last-of-type {
    background-color: violet;
    flex: 1;
    margin-left: 2rem;
  }

  h1 {
    background-color: orange;
    margin-bottom: 1.5rem;
  }

  h3 {
    background-color: pink;
  }

  @media (max-width: ${({ theme }) => theme.devices.m}) {
    &:first-of-type {
      margin-bottom: 2rem;
    }
    &:last-of-type {
      margin-left: 0;
    }
  }
`;

const StyledInnerContainer = styled.div`
  background-color: green;
  padding: 0;
  display: flex;

  &:first-of-type {
    margin-bottom: 1rem;
  }
  div {
    flex: 1;
  }

  @media (max-width: 496px) {
    flex-direction: column;
    &:first-of-type {
      margin-bottom: 1rem;
    }
  }
`;

export default function HomeContent() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mak1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 260, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return (
    <StyledContainer>
      <StyledOuterContainer>
        <h1>tytuł</h1>
        <StyledInnerContainer>
          <div>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
          <div>
            <h3>Sploty dekoracyjne</h3>
            <p>
              tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst
              tekst tekst tekst tekst tekst tekst
            </p>
          </div>
        </StyledInnerContainer>
        <StyledInnerContainer>
          <Img fluid={data.file.childImageSharp.fluid} />
          <div>
            <h3>Sploty użytkowe</h3>
            <p>tekst</p>
          </div>
        </StyledInnerContainer>
      </StyledOuterContainer>
      <StyledOuterContainer>
        <h1>O NAS</h1>
        <Img fluid={data.file.childImageSharp.fluid} />
        <div>
          <p>
            tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst
            tekst tekst tekst tekst tekst tekst
          </p>
        </div>
      </StyledOuterContainer>
    </StyledContainer>
  );
}
