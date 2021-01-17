import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;
// Gatsby is gonna run this graphql query and the variable "slug" is going to come from the context, which was set in createPage.
// Then it is going to take the response (the post data) and its going to provide it as a prop to the Blog component

export default function BlogPostTemplate(props) {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  );
}
