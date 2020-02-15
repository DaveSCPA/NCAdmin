import React from "react";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";

class VolunteerPage extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id="Volunteers Page" />}
        />
        <div className="d-flex justify-content-center">
          <h1>This is the Volunteer Page</h1>
        </div>
      </div>
    );
  }
}

export default VolunteerPage;
