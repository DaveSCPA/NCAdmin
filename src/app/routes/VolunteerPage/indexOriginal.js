import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import * as ReactTable from 'react-table';
// import 'react-table/react-table.css';



class VolunteerPage extends React.Component {
  constructor() {
    super();

    this.state = {
      data: rows
    };
  }
function createData(name, city, state, phone, email, jobTypes) {
  return { name, city, state, phone, email, jobTypes };
}

const rows = [
  createData(
    'Zuniga, Mattie',
    'Joplin',
    'MO',
    '417-555-1111',
    'test@test.com',
    'errands, lawn care'
  ),
  createData(
    'Braxton, Wilcox',
    'Carl Junction',
    'MO',
    '417-555-1212',
    'test@test.com',
    'errands, moving'
  ),
  createData(
    'Tierney, Forrest',
    'Webb City',
    'MO',
    '417-555-1311',
    'test@test.com',
    'lawn care'
  ),
  createData(
    'Wilkerson, Traci',
    'Joplin',
    'MO',
    '417-555-1111',
    'test@test.com',
    'home repair'
  ),
  createData(
    'Ingraham, Ralph',
    'Joplin',
    'MO',
    '417-555-1111',
    'test@test.com',
    'errands, lawn care'
  ),
  createData(
    'Denver, Bob',
    'Joplin',
    'MO',
    '417-555-1111',
    'test@test.com',
    'errands, home repair'
  ),
  createData(
    'Barger, Jorge',
    'Joplin',
    'MO',
    '417-555-1111',
    'test@test.com',
    'lawn care'
  ),
  createData(
    'Myers, Christopher',
    'Joplin',
    'MO',
    '417-555-1111',
    'test@test.com',
    'home repair'
  ),
  createData(
    'Wolfe, Rosa',
    'Joplin',
    'MO',
    '417-555-1111',
    'test@test.com',
    'errands, lawn care'
  ),
  createData(
    'Montgomery, Patty',
    'Joplin',
    'MO',
    '417-555-1111',
    'test@test.com',
    'errands, lawn care'
  ),
  createData(
    'Greene, Donald',
    'Webb City',
    'MO',
    '417-555-1111',
    'test@test.com',
    'errands, lawn care'
  )
];

  render() {
    const { data } = rows;
    return (
      <div className='app-wrapper'>
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id='Volunteers Page' />}
        />
        <div className='d-flex justify-content-center'>
          <h1>This is the Volunteer Page</h1>
          <ReactTable
            data={data}
            columns={[
              { Header: 'Name', accessor: 'name' },
              { Header: 'City', accessor: 'nity' },
              { Header: 'State', accessor: 'state' },
              { Header: 'Phone', accessor: 'phone' },
              { Header: 'Email', accessor: 'email' },
              { Header: 'Job Types', accessor: 'jobTypes' }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default VolunteerPage;
