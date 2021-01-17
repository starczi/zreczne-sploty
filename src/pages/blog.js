import React from 'react';
import Layout from '../components/Layout/layout';
import { graphql, Link, useStaticQuery } from 'gatsby';
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
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li key={edge.node.frontmatter.title} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                {edge.node.frontmatter.title}
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
}
