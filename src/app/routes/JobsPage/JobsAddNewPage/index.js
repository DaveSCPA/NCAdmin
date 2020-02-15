import React from "react";
import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";

class JobsAddNewPage extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id="Add New Job" />}
        />
        <div className="d-flex justify-content-center">
          <h1>This is the New Job Page</h1>
        </div>
      </div>
    );
  }
}

export default JobsAddNewPage;
