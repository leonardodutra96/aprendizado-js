// 1. Pega o formulário pelo ID
const form = document.getElementById('form-cadastro');

// 2. Adiciona um "ouvinte" para o evento de "submit"
form.addEventListener('submit', function (event) {
    // A função confirmar() chamada quando o formulário for enviado
    confirmar();
});


function confirmar() {
    // --- 1. PEGAR OS VALORES DOS INPUTS ---
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const cemail = document.getElementById("cemail").value.trim();
    const senha = document.getElementById("password").value.trim();
    const csenha = document.getElementById("cpassword").value.trim();

    // --- 2. PEGAR OS ELEMENTOS DE ERRO ---
    const erroNome = document.getElementById("erro-nome");
    const erroSobrenome = document.getElementById("erro-sobrenome");
    const erroTelefone = document.getElementById("erro-telefone");
    const erroEmail = document.getElementById("erro-email");
    const erroCemail = document.getElementById("erro-cemail");
    const erroSenha = document.getElementById("erro-senha");
    const erroCsenha = document.getElementById("erro-csenha");
    const mensagemFinal = document.getElementById("mensagem-final");

    // --- 3. LIMPAR TODAS AS MENSAGENS DE ERRO ANTES DE VALIDAR DE NOVO ---
    erroNome.textContent = "";
    erroSobrenome.textContent = "";
    erroTelefone.textContent = "";
    erroEmail.textContent = "";
    erroCemail.textContent = "";
    erroSenha.textContent = "";
    erroCsenha.textContent = "";
    mensagemFinal.textContent = "";
    mensagemFinal.className = ""; // Limpa classes de estilo (sucesso/erro)

    let temErro = false; // Variável de controle

    // --- 4. VALIDAÇÕES INDIVIDUAIS ---
    if (!nome) {
        erroNome.textContent = "O campo nome é obrigatório.";
        temErro = true;
    }
    if (!sobrenome) {
        erroSobrenome.textContent = "O campo sobrenome é obrigatório.";
        temErro = true;
    }
    if (telefone.length < 8) {
        erroTelefone.textContent = "Número de telefone inválido.";
        temErro = true;
    }
    if (!email.includes("@") || !email.includes(".")) {
        erroEmail.textContent = "Formato de e-mail inválido.";
        temErro = true;
    }
    if (email !== cemail) {
        erroCemail.textContent = "Os e-mails não são iguais.";
        temErro = true;
    }
    if (senha.length < 8) {
        erroSenha.textContent = "A senha deve ter no mínimo 8 caracteres.";
        temErro = true;
    }
    if (senha !== csenha) {
        erroCsenha.textContent = "As senhas não são iguais.";
        temErro = true;
    }

    // Se a variável de controle não foi alterada, é porque não houve erros.
    if (!temErro) {
        mensagemFinal.textContent = "Cadastro realizado com sucesso!";
        mensagemFinal.className = "mensagem-sucesso";
        form.reset(); // Limpa o formulário
    }
}