
const model = {
    appElement: document.getElementById('app'),
    text: 'Initial value'
};

const updateText = (model, text) => {
    model.text = text;
    console.log(model);
    view(model);
};

const createInput = (model) => {
    const input = document.createElement('input');
    input.value = model.text;

    input.addEventListener('input', () => {
        updateText(model, input.value);
    });

    return input;
};

const createP = (model) => {
    const p = document.createElement('p');
    p.innerText = model.text;

    return p;
};

const view = (model) => {
    document.getElementById('app').innerHTML = '';
    const input = createInput(model);
    model.appElement.appendChild(input);
    input.focus();
    model.appElement.appendChild(createP(model));
};

view(model);
