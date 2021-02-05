/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/layout';

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY", locale: "pl")
      }
      html
    }
  }
`;
// Gatsby is gonna run this graphql query and the variable "slug"
// is going to come from the context, which was set in createPage.
// Then it is going to take the response (the post data) and
// its going to provide it as a prop to the Blog component

export default function BlogPostTemplate({ data }) {
  //
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  );
}
