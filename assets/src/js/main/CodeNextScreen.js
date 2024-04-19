import config from "../config";

export function boot(screen) {
    new CodeNextScreen(screen);
}

class CodeNextScreen {

    constructor(screen) {
        if (screen === 'first') {
            this.buttonObject = document.querySelector(`.${config.selector}__button--to-second`);
            if (this.buttonObject !== null) {
                this._addEvent();
            }
        } else {
            this._setSecondStep();
        }
    }

    _addEvent() {
        let self = this;
        self.buttonObject.addEventListener('click', function (event) {
            self._setSecondStep();
        });
    }

    _setSecondStep() {
        this._showHideBlocks('code-first-screen', 'hide');
        this._showHideBlocks('code-second-screen', 'show');
    }

    _showHideBlocks(ident, action) {
        ident =`${config.selector}__${ident}`
        const $items = document.querySelectorAll(`.${ident}`);
        if ($items.length) {
            $items.forEach($element => {
                switch (action) {
                    case 'hide':
                        $element.classList.add(`${ident}--hide`);
                        break;
                    case 'show':
                        $element.classList.remove(`${ident}--hide`);
                        break
                }
            });
        }
    }
}