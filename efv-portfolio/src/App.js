import React, { Component } from 'react'
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
          <Layout>
            <Header
              className="header-color"
              title={
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to="/landingpage"
                >
                  UHC FAM DOCUMENT WAREHOUSE
                </Link>
              }
              scroll
            >
              <Navigation>
                <Link to="/newyork">New York</Link>
                <Link to="/newjersey">New Jersey</Link>
                <Link to="/connecticut">Connecticut</Link>
                <Link to="/pada">Pennsylvania/Delaware</Link>
                <Link to="/midatlantic">Mid Atlantic</Link>
                <Link to="/newengland">New England</Link>
                <Link to="/newhampshire">New Hampshire</Link>
              </Navigation>
            </Header>
            <Drawer
              title={
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to="/landingpage"
                >
                  Document Warehouse
                </Link>
              }
            >
              <Navigation>
                <Link to="/newyork">New York</Link>
                <Link to="/newjersey">New Jersey</Link>
                <Link to="/connecticut">Connecticut</Link>
                <Link to="/pada">Pennsylvania/Delaware</Link>
                <Link to="/newengland">New England</Link>
                <Link to="/midatlantic">Mid Atlantic</Link>
                <Link to="/newhampshire">New Hampshire</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    )
  }
}

export default App
