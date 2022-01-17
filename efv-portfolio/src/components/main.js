import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './landingpage'
import paDa from './pada'
import midAtlantic from './midatlantic'
import newJersey from './newjersey'
import connecticut from './connecticut'
import newYork from './newyork'
import newEngland from './newengland'
import newHampshire from './newhampshire'

const Main = () => (
  <Switch>
    <Route exact path="/landingpage" component={Landing} />
    <Route path="/pada" component={paDa} />
    <Route path="/midatlantic" component={midAtlantic} />
    <Route path="/newjersey" component={newJersey} />
    <Route path="/newyork" component={newYork} />
    <Route path="/newhampshire" component={newHampshire} />
    <Route path="/newengland" component={newEngland} />
    <Route path="/connecticut" component={connecticut} />
  </Switch>
)

export default Main
