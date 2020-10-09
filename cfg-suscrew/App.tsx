import React  from 'react';
import CaseManagerContainer from './src/Components/CaseManagerContainer';
import LoginScreen from './src/Components/LoginContainer';

export default class App extends React.Component {
  state = {
    userId: null,
    role: null
  };

  render() {
    const { userId, role } = this.state;

    if (!userId) {
      return (
        <LoginScreen
          setLoggedIn={(id: string) => this.setState({ userId: id })}
          setRole={(role: string) => this.setState({ role })}
        />
      );
    }
    return <CaseManagerContainer />;
  }
}
