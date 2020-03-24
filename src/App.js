import React from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import { Home } from './components/Home'
import { Todos } from './components/Todos'
// import { Posts } from './components/Posts'
import { NewPosts } from './components/NewPosts'
import { NotFound } from './components/NotFound'

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" render={() => <Home name="Peter" />} />
        <Route path="/todos" component={Todos} />
        {/* <Route path="/posts" component={Posts} /> */}
        <Route path="/newposts" component={NewPosts} />
        <Route path="/posts">
          <Redirect to="/newposts" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}