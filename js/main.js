$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    const listNome =[];
    const listaCpf = [];
    const listaEmail = [];
    const listaTelefone = [];

    $.validator.addMethod("nomeCompleto", function(value, element) {
        return value.split(' ').length >= 2;
    }, "Digite o nome completo");

    $('#cadastro-campo').validate({
        rules: {
            nome: {
                required: true,
                nomeCompleto: true,
            },
            cpf: {
                required: true,
                minlength: 14,
            },
            telefone: {
                required: true,
                minlength: 14,
            },
            email: {
                required: true,
                email: true,
            },
            endereco: {
                required: true,
            },
            complemento: {
                required: true,
            },
            cep: {
                required: true,
                minlength: 9,
            }
        },
        messages: {
            nome: {
                nomeCompleto: 'Digite o nome completo',
            },
            cpf: {
                minlength: 'Digite um CPF válido',
            },
            telefone: {
                minlength: 'Digite um número de telefone válido',
            },
            endereco: {
                endereco: 'Digite um endereço válido'
            },
            cep: {
                minlength: 'Digite um CEP válido',
            },
        },
        submitHandler: function(form) {
            const novoNome = $('#nome').val();
            const novoCpf = $('#cpf').val();
            const novoTel = $('#telefone').val();
            const novoEmail = $('#email').val();
            const novoEndereco = $('#endereco').val();
            const novoComplemento = $('#complemento').val();
            const novoCep = $('#cep').val();

            if (novoNome.split(' ').length < 2) {
                alert('Digite o nome completo!')
            } 
            else {
                if (listNome.includes(novoNome)) {
                    alert("Este nome já cadastrado cadastrado!");
                }
                else if(listaCpf.includes(novoCpf)){
                    alert("Este CPF já está cadastrado!")

                }
                else if(listaEmail.includes(novoEmail)){
                    alert("Este e-mail já está cadastrado!")

                }
                else if(listaTelefone.includes(novoTel)){
                    alert("Este telefone já está cadastrado!")
                }
                else {
                    listNome.push(novoNome);
                    listaCpf.push(novoCpf);
                    listaEmail.push(novoEmail);
                    listaTelefone.push(novoTel);

                    const novaLinha = `<tr>
                        <td>${novoNome}</td>
                        <td>${novoCpf}</td>
                        <td>${novoTel}</td>
                        <td>${novoEmail}</td>
                        <td>${novoEndereco}</td>
                        <td>${novoComplemento}</td>
                        <td>${novoCep}</td>
                    </tr>`
                    $(`table tbody`).append(novaLinha);

                    $('#cadastro-campo')[0].reset();
                }
            }
        }
    });
});