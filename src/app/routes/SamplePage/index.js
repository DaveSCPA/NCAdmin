import React from "react";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";

// New Info
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

function createData(name, city, state, phone, email, jobTypes) {
  return { name, city, state, phone, email, jobTypes };
}

const rows = [
  createData(
    "Denver, Bob",
    "Joplin",
    "MO",
    "417-555-1111",
    "test@test.com",
    "errands, lawn care"
  ),
  createData(
    "Hale, Alan",
    "Joplin",
    "MO",
    "417-555-1212",
    "test@test.com",
    "errands, skipper"
  ),
  createData(
    "Wells, Dawn",
    "Webb City",
    "MO",
    "417-555-1311",
    "test@test.com",
    "errands, conch calling"
  ),
  createData(
    "Denver, Bob",
    "Joplin",
    "MO",
    "417-555-1111",
    "test@test.com",
    "errands, lawn care"
  ),
  createData(
    "Denver, Bob",
    "Joplin",
    "MO",
    "417-555-1111",
    "test@test.com",
    "errands, lawn care"
  ),
  createData(
    "Denver, Bob",
    "Joplin",
    "MO",
    "417-555-1111",
    "test@test.com",
    "errands, lawn care"
  ),
  createData(
    "Denver, Bob",
    "Joplin",
    "MO",
    "417-555-1111",
    "test@test.com",
    "errands, lawn care"
  ),
  createData(
    "Denver, Bob",
    "Joplin",
    "MO",
    "417-555-1111",
    "test@test.com",
    "errands, lawn care"
  ),
  createData(
    "Denver, Bob",
    "Joplin",
    "MO",
    "417-555-1111",
    "test@test.com",
    "errands, lawn care"
  ),
  createData(
    "Denver, Bob",
    "Joplin",
    "MO",
    "417-555-1111",
    "test@test.com",
    "errands, lawn care"
  ),
  createData(
    "Denver, Bob",
    "Joplin",
    "MO",
    "417-555-1111",
    "test@test.com",
    "errands, lawn care"
  ),
  createData(
    "Denver, Bob",
    "Joplin",
    "MO",
    "417-555-1111",
    "test@test.com",
    "errands, lawn care"
  )
];

// Original INfo

class SamplePage extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id="pages.samplePage" />}
        />

        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">State</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Job Types</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.state}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.jobTypes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default SamplePage;
