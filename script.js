document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('address-form');
    const cepInput = document.getElementById('cep');
    const logradouroInput = document.getElementById('logradouro');
    const numeroInput = document.getElementById('numero');
    const ufInput = document.getElementById('uf');

    cepInput.addEventListener('input', (event) => {
        let value = event.target.value;
        value = value.replace(/\D/g, '');
        value = value.replace(/^(\d{5})(\d{1,3})/, '$1-$2');
        event.target.value = value;
    });

    ufInput.addEventListener('input', (event) => {
        event.target.value = event.target.value.toUpperCase();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validateFields()) {
            alert('Endereço cadastrado com sucesso');
        }
    });

    function validateFields() {
        const cepRegex = /^\d{5}-\d{3}$/;
        if (!cepInput.value) {
            alert('O campo CEP é obrigatório.');
            return false;
        }
        if (!cepRegex.test(cepInput.value)) {
            alert('Formato de CEP inválido. O formato correto é 00000-000.');
            return false;
        }

        if (logradouroInput.value.trim().length < 5) {
            alert('O campo Logradouro é obrigatório e deve ter no mínimo 5 caracteres.');
            return false;
        }

        const numeroRegex = /^\d+$/;
        if (!numeroInput.value) {
            alert('O campo Número é obrigatório.');
            return false;
        }
        if (!numeroRegex.test(numeroInput.value)) {
            alert('O campo Número deve conter apenas dígitos.');
            return false;
        }

        const ufRegex = /^[A-Z]{2}$/;
        if (!ufInput.value) {
            alert('O campo UF é obrigatório.');
            return false;
        }
        if (!ufRegex.test(ufInput.value)) {
            alert('O campo UF deve conter exatamente 2 letras maiúsculas (ex: SP, RJ, MG).');
            return false;
        }

        return true;
    }
});