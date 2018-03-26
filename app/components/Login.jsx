import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class Login extends React.Component{
  constructor(props){
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin(){
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  }
  render(){
    return (
      <div>
        <h1 className="page-title text-center">Todo App</h1>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with Github account below.
              </p>
              <button className="btn btn-info" onClick={this.onLogin}>Login with Github</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Redux.connect()(Login);
