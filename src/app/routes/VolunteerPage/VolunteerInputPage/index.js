import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import matchSorter from 'match-sorter';
import { MdDelete, MdEdit } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Route, Switch, withRouter } from 'react-router-dom';
import VolInputSample from 'components/VolInputSample';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

class VolunteerInputPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <div className='app-wrapper'>
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id='Add New Volunteer' />}
        />
        <div className='d-flex justify-content-center'>
          <h1>This is the Volunteer Input Page</h1>
        </div>
        <VolInputSample />
      </div>
    );
  }
}

export default VolunteerInputPage;
