import React from 'react'
import { Link } from "gatsby"
import Header from "../components/Header"
import Layout from "../components/Layout"

export default function Contact() {
    return (
        <Layout>
            <div style={{ color: `teal`}}> 
                <Header headerText="Contact US!" />
                <h1>I'd love to talk! Email me at the address below</h1>
                <p>
                    <a href="mailto:me@example.com">me@example.com</a>
                </p>
            </div>
        </Layout>
       
    )
}
