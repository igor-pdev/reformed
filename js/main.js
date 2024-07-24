$(document).ready(function () {
    // Inicialização do carrossel
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    // Inicialização da validação
    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 10
            },
            cpf: {
                required: true,
                cpfBR: true
            },
            endereco: {
                required: true,
                minlength: 10
            },
            cep: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo.",
                minlength: "Seu nome deve ter no mínimo 3 caracteres."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: {
                required: "Por favor, insira seu telefone.",
                minlength: "Seu telefone deve ter no mínimo 10 dígitos."
            },
            cpf: {
                required: "Por favor, insira seu CPF.",
                cpfBR: "Por favor, insira um CPF válido."
            },
            endereco: {
                required: "Por favor, insira seu endereço completo.",
                minlength: "Seu endereço deve ter no mínimo 10 caracteres."
            },
            cep: {
                required: "Por favor, insira seu CEP.",
                minlength: "Seu CEP deve ter no mínimo 8 caracteres."
            }
        }
    });

    // Aplicação das máscaras nos campos
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#cep').mask('00000-000');
});
