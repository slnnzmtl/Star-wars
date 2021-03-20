import React, { Fragment, Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react-lite';
import {
  Route, HashRouter as Router, Switch, Redirect,
} from 'react-router-dom';
import { configure } from 'mobx';
import { StoresProvider, stores } from './stores/stores';
import Header from './components/Header/Header';

import './styles/index.scss';

configure({ enforceActions: 'always' });

const PeopleList = lazy(() => import('./pages/PeopleList/PeopleList.jsx'));
const FavoritesList = lazy(() => import('./pages/FavoritesList/FavoritesList.jsx'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage.jsx'));

const App = observer(() => (
  <>
    <Header />
    <div className="main">
      <Router>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route exact path="/people">
              <PeopleList />
            </Route>
            <Route exact path="/favorites">
              <FavoritesList />
            </Route>
            <Route path="/people/:id">
              <DetailsPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/people" />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  </>
));

render(
  <StoresProvider value={stores}>
    <App />
  </StoresProvider>,
  document.querySelector('#root'),
);
