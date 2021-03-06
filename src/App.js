import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import NewBooking from './components/views/NewBooking/NewBooking';
import Events from './components/views/Events/Events';
import NewEvent from './components/views/NewEvent/NewEvent';
import Waiter from './components/views/Waiter/WaiterContainer';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrder';
import Kitchen from './components/views/Kitchen/Kitchen';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#2B4C6F'},
    // secondary: {main: '#11cb5f'},
  },
  props: {
    MuiTableCell: {
      align: 'center',
      width: 200,
    },
    MuiTextField: {
      fullWidth: true,
    },
  },
});

function App() {
  return (

    <Router>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewBooking} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Events} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={NewOrder} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={Order} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </Router>
  );
}

export default App;
