import React from 'react';
import { connect } from 'react-redux';
import CaseManagerContainer from './CaseManagerContainer';
import LoginScreen from './LoginContainer';

export class Components extends React.Component<any, any> {
  render() {
    const { session } = this.props;

    if (!session || !session.userId) {
      return (
        <LoginScreen />
      );
    }
    return <CaseManagerContainer />;
  }
}

const mapStateToProps = (state) => ({
  session: state.session
});

export default connect(mapStateToProps)(Components);
