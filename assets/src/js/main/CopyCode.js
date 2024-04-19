import config from "../config";

export function boot() {
    new CopyCode();
}

class CopyCode {

    constructor() {
        this.copyObject = document.querySelector(`.${config.selector}__code-copy`);
        if (this.copyObject !== null) {
            this._copy();
        }
    }

    _copy() {
        let self = this;
        self.copyObject.addEventListener('click', function (event) {
            let message = self.copyObject.querySelector(`.${config.selector}__copy-message`);
            let code = self.copyObject.querySelector(`.${config.selector}__copy-mark`);
            code.classList.add('copy');
            self._setClipboard(code.innerText);
            self._setMessage(message);
        });
    }

    _setClipboard(textCode) {
        let copyField = document.createElement("textarea");
        copyField.value = textCode;
        copyField.style.position = "fixed";
        copyField.style.left = "-999999px";
        copyField.style.top = "-999999px";
        document.body.appendChild(copyField);
        copyField.focus();
        copyField.select();
        copyField.setSelectionRange(0, 50);
        document.execCommand('copy');
        copyField.remove();
    }

    _setMessage(message) {
        message.classList.add('copy');
        setTimeout(() => {
            message.classList.remove('copy');
        }, 2000);
    }
}