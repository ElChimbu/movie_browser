import React from 'react'
import { Error } from './components/Error'
import { LoadingView } from './components/LoadingView'
import { MoviesProvider } from './components/MoviesContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'

const Movie = React.lazy(() => import('./pages/movie'))
const Movies = React.lazy(() => import('./pages/movies'))

export const App = () => {
  return (
    <Router>
      <MoviesProvider>
        <>
          <Header />
          <Content>
            <React.Suspense fallback={<LoadingView />}>
              <Switch>
                <Route exact path="/" component={Movies} />
                <Route exact path="/movies/:id" component={Movie} />
                <Route component={Error} />
              </Switch>
            </React.Suspense>
          </Content>
          <Footer />
        </>
      </MoviesProvider>
    </Router>
  )
}

export default App
