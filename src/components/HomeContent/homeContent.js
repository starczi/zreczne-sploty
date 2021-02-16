import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  padding: 1rem;

  p {
    margin: 1rem 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.devices.m}) {
    margin-top: 2rem;
    flex-direction: column;
  }
`;

const StyledOuterContainer = styled.div`
  box-shadow: 0 0 40px rgb(0 0 0 / 8%);

  &:first-of-type {
    flex: 2;
  }
  &:last-of-type {
    flex: 1;
    margin-left: 2rem;
  }

  h1 {
    margin: 1.5rem;
  }

  h4 {
    margin-top: 1rem;
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

const StyledLeftInnerContainer = styled.div`
  display: flex;
  box-shadow: 0 0 40px rgb(0 0 0 / 5%);

  &:first-of-type {
    margin-bottom: 2rem;
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

const StyledRightInnerContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.devices.m}) {
    display: flex;
    //change sth here?
    div,
    p {
      flex: 1;
    }
  }

  @media (max-width: 496px) {
    display: block;
  }
`;

// const StyledInstagramContainer = styled.div`
//   @media (max-width: ${({ theme }) => theme.devices.m}) {
//     margin-top: 2rem;
//   }
// `;

export default function HomeContent() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mak1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 260, maxHeight: 260, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return (
    <StyledContainer>
      <StyledOuterContainer>
        <h1>Section title</h1>
        <StyledLeftInnerContainer>
          <div>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
          <div>
            <Link to="/decorative">
              <h4>Sploty dekoracyjne</h4>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </StyledLeftInnerContainer>
        <StyledLeftInnerContainer>
          <Img fluid={data.file.childImageSharp.fluid} />
          <div>
            <Link to="/functional">
              <h4>Sploty użytkowe</h4>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </StyledLeftInnerContainer>
      </StyledOuterContainer>
      <StyledOuterContainer>
        <h1>About us</h1>
        <StyledRightInnerContainer>
          <Img fluid={data.file.childImageSharp.fluid} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </StyledRightInnerContainer>
        {/* <StyledInstagramContainer></StyledInstagramContainer> */}
      </StyledOuterContainer>
    </StyledContainer>
  );
}
