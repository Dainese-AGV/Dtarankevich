// eslint-disable-next-line max-classes-per-file
import React from 'react';

class LoginButton extends React.Component {
  componentDidMount() {
    window.currentPage = 'login';
    // eslint-disable-next-line no-console
    console.log('mounted button');
    fetch();
    this.setState();
  }

  componentWillUnmount() {
    window.currentPage = '';
    // eslint-disable-next-line no-console
    console.log('unmounting button');
  }

  render() {
    // eslint-disable-next-line no-console
    console.log('rendered button');
    return <button type="button" {...this.props} />;
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { login: 'login222', password: 'pwd' };
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ login: '' });
  }

  render() {
    const { login } = this.state;
    return (
      <div>
        <button type="button" onClick={() => this.setState({ login: 'login' })}>
          mount
        </button>
        {login && (
          <LoginButton onClick={this.handleLoginClick}>{login}</LoginButton>
        )}
      </div>
    );
  }
}