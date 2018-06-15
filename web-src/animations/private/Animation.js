class Animation {
  constructor(start) {
    this.frameId_ = null;
    this.start_ = start;
  }

  start(props) {
    return new Promise((resolve) => {
      this.start_({
        ...props,
        setFrameId: (id) => {
          this.frameId_ = id;
        },
        done: resolve,
      });
    });
  }

  stop() {
    if (this.frameId_ !== null) {
      cancelAnimationFrame(this.frameId_);
    }
  }
}

export default Animation;
