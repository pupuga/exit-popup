export default class Events {

    constructor(config, data, timer, status, selector) {
        this.config = config;
        this.data = data;
        this.$selector = selector;
        this.timer = timer;
        this.status = status;
    }

    show() {
        let self = this;
        this.$selector.classList.add(`${this.config.selector}--show`);
        this.$selector.classList.remove(`${this.config.selector}--minimize`);
        this.$selector.classList.remove(`${this.config.selector}--minimize-hide`);
        this.status.setViewShow();
        if (this.timer !== false && this.timer.isEnd !== true) {
            this.timer.start();
            self.status.setEventTimer();
        }
    }

    close() {
        this.$selector.classList.remove(`${this.config.selector}--show`);
        this.status.setViewClose();
        this.status.setEventLoad();
        this.status.setCount();
        if (this.timer !== false && this.timer.isEnd !== true) {
            this.timer.stop();
        }
    }

    minimize() {
        if (this.$selector.classList.contains(`${this.config.selector}--minimize`)) {
            this.show();
        } else {
            this.$selector.classList.add(`${this.config.selector}--show`);
            this.$selector.classList.add(`${this.config.selector}--minimize`);
            if (this.data.minimizeHide === '1') {
                this.$selector.classList.add(`${this.config.selector}--minimize-hide`);
            }
            this.status.setViewMinimize();
            if (this.timer !== false && this.timer.isEnd !== true) {
                if (this.data.minimizeCount === '1') {
                    if (this.timer.isEnd !== true) {
                        this.timer.start();
                    }
                } else {
                    this.timer.stop();
                }
            }
        }
    }
}