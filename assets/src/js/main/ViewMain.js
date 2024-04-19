import ViewDigitalTimer from "./ViewDigitalTimer";
import ViewAnalogTimer from "./ViewAnalogTimer";

export default class ViewMain {

    constructor(data, config, browserParams, statusType) {
        this.statusType = statusType;
        this.data = data;
        this.config = config;
        this.browserParams = browserParams;
        this.templateDigitalClock = (new ViewDigitalTimer).getTemplate();
        this.templateAnalogClock = (new ViewAnalogTimer).getTemplate();
        this._setTemplateConfigParams();
        this._setTemplateTextParams();
        this._setStyle();
        this._setTemplateTimer();
        this._setTemplateCode();
        this._setTemplate();
        this._insert();
    }

    getTemplateTimer() {
        return this.timer;
    }

    getTemplateCode() {
        return this.code;
    }

    _setTemplateConfigParams() {
        this._setTemplateParam('copyButtonImage', '<rect fill="none" height="13" rx="2" ry="2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="13" x="9" y="9"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>');
    }

    _setTemplateTextParams() {
        this._setTemplateParam('timerTitle', 'Congratulations!', true);
        this._setTemplateParam('timerDescription', 'Only few seconds left to your gift');
        this._setTemplateParam('codeTitle', 'Take your gift!', true);
        this._setTemplateParam('codeDescription', 'This coupon code will apply 15% discount to any item in our shop!', true);
        this._setTemplateParam('headerText', 'Close window (I refuse the profit)');
        this._setTemplateParam('footerText', 'Minimize this window');
        this._setTemplateParam('copyMessage', 'Your Code has been copied');
        this._setTemplateParam('copyCodeButtonTitle', 'Copy code');
        this._setTemplateParam('codeFirstScreenButtonTitle', 'To the coupon');
    }

    _setTemplateParam(varName, defaultString, mobile = false) {
        this.data[varName] = (typeof this.data[varName] === 'undefined')
            ? defaultString
            : this.data[varName];
        if (mobile === true) {
            this.data[varName + 'Mobile'] = (typeof this.data[varName + 'Mobile'] === 'undefined')
                ? this.data[varName]
                : this.data[varName + 'Mobile'];
        }
    }

    _setStyle() {
        this.style = `<style>.${this.config.selector} {
                    --border-radius: ${this.data.style.borderRadius || 11}px;
                    --background-color: ${this.data.style.backgroundColor || '#fff'}; 
                    --font-family: ${(this.data.style.getFontFamily) ? window.getComputedStyle(document.body, null).getPropertyValue('font-family') : 'Helvetica,Arial,sans-serif'};
                    --timer-title-font-color: ${this.data.style.timerTitleFontColor || '#000'};
                    --timer-font-color: ${this.data.style.timerFontColor || '#cd171b'};
                    --timer-digit-color: ${this.data.style.timerDigitColor || '#fff'};
                    --timer-digit-background-color: ${this.data.style.timerDigitBackgroundColor || '#333'};
                    --timer-analog-point-color: ${this.data.style.timerAnalogPointColor || '#969696'};
                    --code-title-font-color: ${this.data.style.codeTitleFontColor || '#000'};
                    --code-font-color: ${this.data.style.codeFontColor || '#000'};
                    --code-code-font-color: ${this.data.style.codeCodeFontColor || '#cd171b'};
                    --code-code-font-color-second: ${this.data.style.codeCodeFontColorSecond || '#737373'};
                    --help-font-color: ${this.data.style.helpFontColor || '#979797'};
                    --close-button-color: ${this.data.style.closeButtonColor || '#979797'};
                    --minimize-button-color: ${this.data.style.minimizeButtonColor || '#fff'};
                    --minimize-button-background-color: ${this.data.style.minimizeButtonBackgroundColor || '#cd171b'};
                }</style>`;
    }

    _setTemplateTimer() {
        this.timer =  `<div class="${this.config.selector}__main ${this.config.selector}__main--timer">
            <div class="${this.config.selector}__title ${this.config.selector}__title--timer">
                <div class="${this.config.selector}__desktop-block">${this.data.timerTitle}</div>
                <div class="${this.config.selector}__mobile-block">${this.data.timerTitleMobile}</div>
            </div>
            <div class="${this.config.selector}__description ${this.config.selector}__description--timer ${this.config.selector}__description--attention">
                ${this.data.timerDescription}
            </div>
            <div class="${this.config.selector}__digital-clock">${this.templateDigitalClock}</div>
            <div class="${this.config.selector}__round-clock">${this.templateAnalogClock}</div>
            <div class="${this.config.selector}__image ${this.config.selector}__image--timer">
                <img src="data:image/${this.data.timerImageExt};base64,${this.data.timerImage}">
            </div>
        </div>`
    }

    _setTemplateCode() {
        this.code = `<div class="${this.config.selector}__main ${this.config.selector}__main--code">
            <div class="${this.config.selector}__title ${this.config.selector}__title--code ${this.config.selector}__code-first-screen">
                <div class="${this.config.selector}__desktop-block">${this.data.codeTitle}</div>
                <div class="${this.config.selector}__mobile-block">${this.data.codeTitleMobile}</div>
            </div>
            <div class="${this.config.selector}__description ${this.config.selector}__description--code ${this.config.selector}__code-second-screen ${this.config.selector}__code-second-screen--hide">
                <div class="${this.config.selector}__desktop-block">${this.data.codeDescription}</div>
                <div class="${this.config.selector}__mobile-block">${this.data.codeDescriptionMobile}</div>
            </div>
            <div class="${this.config.selector}__code ${this.config.selector}__code-second-screen ${this.config.selector}__code-second-screen--hide">
                <div class="${this.config.selector}__code-copy">
                    <div class="${this.config.selector}__copy-text">
                        <div class="${this.config.selector}__copy-mark">${this.data.code}</div>
                    </div>                    
                    <div class="${this.config.selector}__copy-button">
                        <div class="${this.config.selector}__desktop-block">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="display: none"><symbol id="copy-icon">${this.data.copyButtonImage}</symbol></svg>
                            <svg width="24" height="24">
                                <use xlink:href="#copy-icon">
                            </svg>
                        </div>    
                        <div class="${this.config.selector}__mobile-block">
                            <div class="${this.config.selector}__button ${this.config.selector}__button">${this.data.copyCodeButtonTitle}</div>
                        </div>
                    </div>
                    <div class="${this.config.selector}__copy-message">
                        <div class="${this.config.selector}__copy-message-hint">
                            <div class="${this.config.selector}__copy-message-hint-arrow"></div>
                            <span>${this.data.copyMessage}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="${this.config.selector}__image ${this.config.selector}__image--code ${this.config.selector}__code-first-screen">
                <img src="data:image/${this.data.codeImageExt};base64,${this.data.codeImage}">
            </div>
            <div class="${this.config.selector}__mobile-block">
                <div class="${this.config.selector}__code-first-screen">
                    <div class="${this.config.selector}__button ${this.config.selector}__button--to-second">${this.data.codeFirstScreenButtonTitle}</div>
                </div>
            </div>
        </div>`
    }

    _setTemplate() {
        this.template = `<div class="${this.config.selector} ${this.config.selector}--${this.statusType} ${this.config.selector}--${(this.browserParams.mac) ? 'mac' : 'not-mac'}">
            <div class="${this.config.selector}__window">
                <div class="${this.config.selector}__header ${this.config.selector}__header--${this.statusType}">
                    <div class="${this.config.selector}__helper-text">${this.data.headerText}</div>
                    <div class="${this.config.selector}__close ${this.config.selector}__close--center-top ${this.config.selector}__close--${(this.browserParams.mac) ? 'mac' : 'not-mac'}"></div>
                </div>
                <div class="${this.config.selector}__section">${this.timer}</div>
                <div class="${this.config.selector}__footer">
                    <div class="${this.config.selector}__helper-text">${this.data.footerText}</div>
                </div>
            </div>
            <div class="${this.config.selector}__minimize"></div>
        </div>`;
    }

    _insert() {
        document.body.insertAdjacentHTML('beforeend', this.style + this.template);
    }
}