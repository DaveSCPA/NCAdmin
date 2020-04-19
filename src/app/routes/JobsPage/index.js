import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

class JobsPage extends React.Component {
  render() {
    return (
      <div className='app-wrapper'>
        <ContainerHeader
          match={this.props.match}
          title={<IntlMessages id='Jobs Page' />}
        />
        <div className='d-flex justify-content-center'>
          <h1>This is the Jobs Page</h1>
        </div>
      </div>
    );
  }
}

export default JobsPage;
