$(document).ready(function () {

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('form').validate( {
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            cpf: 'Insira o seu CPF',
            email: 'Insira o seu e-mail',
            telefone: 'Insira o seu telefone',
            endereço: 'Insira o seu endereço',
            cep: 'Insira o seu CEP'       
        }
        
    })

})