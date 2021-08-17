import React from 'react';
import { Provider } from 'react-redux'

import { AppRouter } from './routers/AppRouter';
import { store } from './components/store/store';

import './CalendarApp.scss';

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
