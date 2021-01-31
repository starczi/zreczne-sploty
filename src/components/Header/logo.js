import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledLink = styled(Link)`
  padding-top: 1rem;
`;

export default function Logo() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <StyledLink to="/">
      <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
    </StyledLink>
  );
}
