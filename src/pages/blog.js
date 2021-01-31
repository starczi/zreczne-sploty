import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout/layout';

const StyledLi = styled.li`
  padding-bottom: 1rem;

  a {
    background: #f4f4f4;
    color: ${({ theme }) => theme.colors.black};
    display: block;
    padding: 1rem;
  }

  a:hover {
    background: #e4e4e4;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    color: #777777;
    font-size: 0.8rem;
    font-style: italic;
  }
`;

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
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
      <h1>Blog page</h1>
      <ul>
        {data.allMarkdownRemark.edges.map((edge) => (
          <StyledLi key={edge.node.frontmatter.title}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              {edge.node.frontmatter.title}
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          </StyledLi>
        ))}
      </ul>
    </Layout>
  );
}
