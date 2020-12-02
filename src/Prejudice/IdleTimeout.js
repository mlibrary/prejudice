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
        timeout: 150000
      }
    );
    return this;
  }
}

export default new IdleTimeout();
