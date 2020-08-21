import React from 'react';
import { Link } from "gatsby"
import Header from '../components/Header'
import Layout from "../components/Layout"

export default function About(){
    return (
        <Layout>
            <div style={{color: `teal`}}>
                <Header headerText="About Gatsby!" />
                <p>Such wow. Very React.</p>
            </div>
        </Layout>
        
    )
}