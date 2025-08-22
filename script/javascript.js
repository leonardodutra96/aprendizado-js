function confirmar() {
    //VARIAVEIS
    let nome, sobrenome, telefone, email, senha, sucesso, semsucesso, campovazio, senhacurta, telinvalido
    // VALORES DAS VARIAVEIS
    nome = document.getElementById("nome").value.trim()
    sobrenome = document.getElementById("sobrenome").value.trim()
    telefone = document.getElementById("telefone").value.trim()
    email = document.getElementById("email").value.trim()
    cemail = document.getElementById("cemail").value.trim()
    senha = document.getElementById("password").value.trim()
    csenha = document.getElementById("cpassword").value.trim()
    sucesso = ("Cadastro realizado com sucesso!")
    semsucesso = ("Não foi possivel realizar o cadastro")
    campovazio = ("Precisa preencher todos os campos")
    senhacurta = ("Senha curta demais")
    telinvalido =("Número de telefone inválido, corrija!")

    // CONDIÇÕES
    if (!nome || !sobrenome || !telefone || !email || !cemail || !senha || !csenha) {
        alert(campovazio)
        return
    }
    if (!email.includes("@") || !email.includes(".com") || !cemail.includes("@") || !cemail.includes(".com")) {
        alert("E-mail inválido, corrija!")
        return
    }
    if (telefone.length < 8){
        alert(telinvalido)
        return
    }
    if (senha.length < 8 || csenha.length < 8) {
        alert(senhacurta)
        return
    }

    if (email === cemail && senha === csenha) {
        alert(sucesso)
        document.getElementById("cadastrook").innerHTML = sucesso
        return
    }

    else {
        alert(semsucesso)
        document.getElementById("cadastrook").innerHTML = semsucesso
        return
    }

}