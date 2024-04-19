//v 1.4.0
import config from "../config";
import ViewMain from "./ViewMain";
import Status from "./Status";
import Listeners from "./Listeners";
import DigitalTimer from "./DigitalTimer";
import Events from "./Events";
import * as CopyCode from "./CopyCode";
import * as CodeNextScreen from "./CodeNextScreen";

class Init {

    constructor() {
        if (typeof (dataExitPopup) !== 'undefined') {
            this
                ._setConfig()
                ._setDataObject()
                ._setStatusObject()
                ._setStartTime()
                ._setBrowserParams()
            if (this.status.getView() !== 'close') {
                this
                    ._setViewObject()
                    ._onLoad();
            }
        }
    }

    _setConfig() {
        this.config = config;

        return this;
    }

    _setDataObject() {
        let lang = (document.documentElement.lang)
            ? document.documentElement.lang.slice(0, 2).toLowerCase()
            : (window.navigator.language)
                ? window.navigator.language.slice(0, 2).toLowerCase()
                : dataExitPopup.lang;
        for (let key in dataExitPopup.languages) {
            dataExitPopup[key] = dataExitPopup.languages[key][(dataExitPopup.languages[key][lang] === undefined) ? dataExitPopup.lang : lang];
        }
        delete dataExitPopup.languages;
        this.data = dataExitPopup;

        return this;
    }

    _setStatusObject() {
        this.status = new Status(this.data, this.config);

        return this;
    }

    _setStartTime() {
        this.data.startTime = this.status.getCount() || this.data.time;

        return this;
    }

    _setBrowserParams() {
        this.browserParams = {
            mac: navigator.appVersion.indexOf("Mac") !== -1,
            touch : 'ontouchstart' in window || 'onmsgesturechange' in window
        };

        return this;
    }

    _setViewObject() {
        const statusType = this.status.getEvent() === 'code' ? 'code' : 'timer';
        this.view = new ViewMain(this.data, this.config, this.browserParams, statusType);
        this.$selector = (typeof (this.$selector) === 'undefined') ? document.querySelector(`.${this.config.selector}`) : this.$selector;

        return this;
    }

    _onLoad() {
        if (this.status.getEvent() === 'code') {
            this.events = new Events(this.config, this.data, false, this.status, this.$selector);
            this._setSection(this.view.getTemplateCode(), 'code', 'timer');
            this.Listeners = new Listeners(this.data, this.events, this.browserParams);
            this.Listeners
                .onLoad()
                .minimize()
                .close();
            CopyCode.boot();
            CodeNextScreen.boot('second');
        } else {
            if (this.status.getEvent() !== 'timer') {
                this.status.setEventLoad();
            }
            this._setSection(this.view.getTemplateTimer(), 'timer');
            this.events = new Events(this.config, this.data, this._setTimer(), this.status, this.$selector);
            this.Listeners = new Listeners(this.data, this.events, this.browserParams);
            if (this.status.getEvent() === 'timer') {
                this.Listeners
                    .onLoad();
            } else {
                this.Listeners
                    .timerLoad()
                    .mouseTopOut();
            }
            this.Listeners
                .minimize()
                .close();
        }
    }

    _setSection(template, newScreen, oldScreen = '') {
        document.querySelector(`.${this.config.selector}__section`).innerHTML = template;
        this.$selector.classList.add(`${this.config.selector}--${newScreen}`);
        if (oldScreen !== '') {
            this.$selector.classList.remove(`${this.config.selector}--${oldScreen}`);
        }
    }

    _setTimer() {
        let self = this;
        return new DigitalTimer(this.data.startTime, self.status,
            function () {
            self._setSection(self.view.getTemplateCode(), 'code', 'timer');
            self.status.setEventCode();
            self.status.clearCount();
            self.events.show();
            CopyCode.boot();
            CodeNextScreen.boot('first');
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    new Init();
});