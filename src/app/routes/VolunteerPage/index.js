import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import matchSorter from 'match-sorter';
import { MdDelete, MdEdit } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Route, Switch, withRouter } from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

// Add this to test link

class VolunteerPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const url =
      'https://my-json-server.typicode.com/DaveSCPA/FakeClients/volunteers/';
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((posts) => {
        // console.log('posts', posts);
        this.setState({ posts: posts });
      });
  }

  // addVolunteer() {
  //   const Routes = ({ match }) => (
  //     (
  //       <Route
  //         path={`${match.url}/volunteer-input-page`}
  //         component={asyncComponent(() => import('./VolunteerInputPage'))}
  //       />
  //     ),
  //     console.log('match: ', Routes)
  //   );
  // }

  deleteRow(id) {
    this.setState({
      posts: [...this.state.posts.filter((post) => post.id !== id)],
    });
  }

  render() {
    const columns = [
      {
        Header: 'User ID',
        accessor: 'zipcode',
        style: {
          textAlign: 'center',
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100,
      },
      {
        Header: 'ID',
        accessor: 'id',
        style: {
          textAlign: 'center',
        },
        width: 100,
        maxWidth: 100,
        minWidth: 100,
      },
      {
        Header: 'First Name',
        id: 'fname',
        accessor: 'fname',
        sortable: true,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['fname'] }),
        filterAll: true,
        // filterable: false
      },
      {
        Header: 'Last Name',
        accessor: 'lname',
        sortable: true,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['lname'] }),
        filterAll: true,
      },
      {
        Header: 'Actions',
        style: {
          // justifyContent: 'center'
          // alignItems: 'center'
        },
        Cell: (props) => {
          return (
            <React.Fragment>
              <IconContext.Provider
                value={{
                  color: 'cornflowerblue',
                  size: '1.3em',

                  style: {
                    marginLeft: '10px',
                    cursor: 'pointer',
                  },
                }}
              >
                <MdEdit />
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  color: '#f9391d',
                  size: '1.3em',

                  style: {
                    marginLeft: '10px',
                    cursor: 'pointer',
                  },
                }}
              >
                <MdDelete onClick={() => this.deleteRow(props.original.id)} />
              </IconContext.Provider>
              {/* <button
                style={{ backgroundColor: 'red', color: '#ffffff' }}
                onClick={() => this.deleteRow(props.original.id)}
              >
                Delete
              </button> */}
            </React.Fragment>
          );
        },
        sortable: false,
        filterable: false,
        width: 80,
        maxWidth: 200,
        minWidth: 80,
      },
    ];

    return (
      <div className='app-wrapper'>
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id='Volunteers Page' />}
          addButton={'Add A Volunteer'}
          clickPath={'/volunteer-input-page'}
        />

        <ReactTable
          className='-highlight'
          columns={columns}
          data={this.state.posts}
          filterable
          defaultPageSize={100}
          noDataText={
            'No information found for the sheet.  Please reload screen!'
          }
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          {(state, filteredData, instance) => {
            this.reactTable = state.pageRows.map((post) => {
              return post._original;
            });
            return <div>{filteredData()}</div>;
          }}
        </ReactTable>
      </div>
    );
  }
}

export default VolunteerPage;
