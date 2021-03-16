import React from 'react';
import { NavLink } from 'react-router-dom';

export class DashboardBulletin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { } = this.state;

    return (
        <>
            <div className="container mt-3">
              <div className="row justify-content-md-center">
                <div className="col-12 col-md-8">
                  <h1 >OCAT Dashboard</h1>
                  <NavLink to="/assessment/new">New</NavLink>
                  {/* <button href="/assessment/list">List</button> */}
                </div>
              </div>
              <hr />
            </div>
        </>
      );
  }
}