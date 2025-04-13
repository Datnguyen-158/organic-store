import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import User from './componients/Layout/User'
import './App.css'
import { useEffect } from 'react'
import React from 'react'

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {' '}
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout = User
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}{' '}
        </Routes>
      </div>
    </Router>
  )
}

export default App
