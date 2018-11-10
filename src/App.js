import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import indexSaga from './sagas/index'
import reducers from './reducers/index'
import styles from './App.module.css'

import NotFound from './components/NotFound/NotFound'
import MainBar from './components/MainBar/MainBar'
import Home from './containers/Home/Home'
import SearchResults from './containers/SearchResults/SearchResults'

import VideoPage from './containers/VideoPage/VideoPage'
import ChannelPage from './containers/ChannelPage/ChannelPage'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(indexSaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.mainContainer}>
          <div className={styles.appMain}>
            <BrowserRouter>
              <div>
                <MainBar />
                <Switch>
                  <Route path="/watch/:videoId" component={VideoPage}/>
                  <Route path="/channel/:channelId" component={ChannelPage}/>
                  <Route path="/results" component={SearchResults}/>
                  <Route exact path="/" component={Home}/>
                  <Route component={NotFound}/>
                </Switch>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
