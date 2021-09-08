import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import TaskDetails from '../TasksDetails/TaskDetails';
import history from '../../history';
import TasksList from '../TasksList/TasksList';
import AddTask from '../AddTask/AddTask';



const RoutesPrivate = () => (
  <Router history={history}>
    <Switch>
     
      <Route path='/' exact component={TasksList}/>
      <Route path="/AddTask" exact component={AddTask}/>
      <Route 
        path='/:taskTitle'
        component={TaskDetails}
      />
    </Switch>
  </Router>
)

export default RoutesPrivate;