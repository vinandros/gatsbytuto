import React from 'react';
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Header from '../components/Header'
import Layout from "../components/Layout"

export default function About({ data }) {
    return (
      <Layout data={data}>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
          We're the only site running on your computer dedicated to showing the
          best photos and videos of pandas eating lots of food.
        </p>
      </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// export default function About(){
//     return (
//         <Layout>
//             <div style={{color: `teal`}}>
//                 <Header headerText="About Gatsby!" />
//                 <p>Such wow. Very React.</p>
//             </div>
//         </Layout>
        
//     )
// }