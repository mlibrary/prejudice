import idleTimeout from 'idle-timeout';

class IdleTimeout {
  constructor() {
    this.idleTimer = null;
    this.setIdleTimer = this.setIdleTimer.bind(this);
  }

  setIdleTimer() {
    this.idleTimer = idleTimeout(
      () => {},
      {
        element: document,
        timeout: 3600000
      }
    );
    return this;
  }
}

export default new IdleTimeout();
