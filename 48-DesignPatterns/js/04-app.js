// factory :  create an object based in some conditions

class InputType {
    constructor (type, name) {
        this.type= type;
        this.name = name;
    }

    createInput () {
        return `<input type=${this.type} name=${this.name} id=${this.name} placeholder='put here' />`
    }
}

class HtmlInput {
    createElement (type, name ) {
        switch (type) {
            case 'text':
                return new InputType('text', name);           
            default:
                return;
        }
    }
}

const element = new HtmlInput();

const inputText = element.createElement('text', 'clientName');

const input = inputText.createInput();

const body = document.querySelector('body');
