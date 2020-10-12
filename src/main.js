import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'

import Layout from './Containers/Home';


function main(props) {
  return (
    <Layout {...props} >
    <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <Switch>
          {/* <Route exact path="/" render={() => <div>Home Page</div>} /> */}
          
        </Switch>
      </Container>
    </main> 
  </Layout>
  )
}

export default main
