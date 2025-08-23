# aprendizado-js 

Este repositório é meu diário de evolução no estudo de JavaScript, HTML e CSS.  
A cada versão, aplico algo novo que aprendi e documentei aqui.

---

## Como usar
1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Teste o formulário e veja a validação em ação.

---

## Histórico de versões

v001 → Formulário básico com comparação de email e senha.
v002 → Adicionada validação de campos vazios.
v003 → Implementada validação simples de e-mail com '@' e '.com', além de tamanho mínimo para telefone e senha.
v004 → Melhoria na lógica de captura de valores com o uso do .trim() para limpar espaços extras.
v005 → Refatoração da Validação e Feedback ao Usuário
Substituição de todos os alert() por mensagens de erro dinâmicas, exibidas diretamente no HTML abaixo de cada campo.
Melhora radical na experiência do usuário (UX), que agora recebe um feedback visual claro.
Implementação de id único para cada campo de erro, permitindo um controle preciso com getElementById.
Lógica de validação aprimorada para verificar todos os campos de uma vez e exibir múltiplos erros simultaneamente, em vez de parar no primeiro.

v006 → Refinamento Completo do Estilo (CSS)
Criação de um layout mais limpo, moderno e centralizado, utilizando box-shadow e border-radius para um design mais suave.
Estilização profissional para campos de formulário, labels e botões, incluindo efeitos hover para melhor interatividade.
Criação de classes CSS específicas para mensagens de erro (.mensagem-erro) e sucesso (.mensagem-sucesso), tornando o feedback visualmente claro.
Menu de navegação estilizado no cabeçalho.

Próximos Passos
Implementar uma validação de e-mail mais robusta utilizando Expressões Regulares (Regex).
Adicionar responsividade ao layout para que se adapte bem a telas de celulares.
Criar máscaras de input para campos como telefone (ex: (21) 99999-9999).
