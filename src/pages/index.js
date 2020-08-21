import React from "react"
import Header from "../components/Header"
import User from "../components/User"
import Layout from "../components/Layout"


export default function Home() {
  return (
  <div style={{ color: `purple` }}>
    
    <Layout>
          <Header headerText="Hello Gatsby!" />
            
          <User
              username="Jane Doe"
              avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
              excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <User
              username="Bob Smith"
              avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
              excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
    </Layout>
  </div>)
}
