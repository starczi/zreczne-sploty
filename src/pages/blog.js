import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout/layout';
// import '../styles/index.scss';
import blogStyles from './blog.module.scss';

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
      <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => (
          <li key={edge.node.frontmatter.title} className={blogStyles.post}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              {edge.node.frontmatter.title}
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
