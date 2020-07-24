import React, { Component } from 'react';
import Notifier from '../../components/notifier/notifier.components';
import ClCamera from "../../components/ClCamera/ClCamera.components"

class Camera extends Component {
    constructor() {
      super();
      this.state = {
        offline: false
      }
    }

    componentDidMount() {
      window.addEventListener('online', () => {
        this.setState({ offline: false });
      });

      window.addEventListener('offline', () => {
        this.setState({ offline: true });
      });
    }

    componentDidUpdate() {
      let offlineStatus = !navigator.onLine;
      if (this.state.offline !== offlineStatus) {
        this.setState({ offline: offlineStatus });
      }
    }
render() {
    return (
      <div className="App">
        <Notifier offline={this.state.offline} />
        <header className="App-header">
          <h1 className="App-title">CloudyCam</h1>
        </header>
        <ClCamera offline={this.state.offline} />
      </div>
    );
  }
}

export default Camera;