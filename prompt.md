Usei o mesmo prompt para as três IAS 

Prompt Utilizado:

Você vai criar uma aplicação web com tema livre que simula um sistema simples de cadastro de itens. A aplicação deve ter uma tela de login e, após autenticação, exibir a lista com as operações de CRUD.
O tema da lista é sua escolha: filmes assistidos, jogos favoritos, lista de compras, ideias de projeto, ou qualquer outro que faça sentido para você.
O que a aplicação deve ter
Tela de login
A aplicação começa com o formulário de login visível e a lista oculta.
As credenciais corretas são:

* Usuário: `aluno`
* Senha: `fiap2025`
Se as credenciais estiverem corretas, a tela de login deve redirecionar para a página da lista. Se estiverem erradas, uma mensagem de erro deve aparecer na tela — não apenas no console.
Após o login, o usuário pode:

* Adicionar um item ao final da lista
* Adicionar um item ao início da lista
* Ver todos os itens exibidos dinamicamente na tela
* Editar qualquer item individualmente
* Remover qualquer item individualmente
Toda vez que a lista muda, a tela deve ser atualizada automaticamente para refletir o estado atual dos dados. A lista deve conter pelo menos 3 itens iniciais, que serão exibidos ao carregar a primeira vez a página.
Requisitos obrigatórios

* A aplicação deve ser desenvolvida com HTML, CSS e JavaScript puro — sem frameworks ou bibliotecas externas
* Os dados devem ser armazenados em um array de strings — sem uso de objetos dentro do array
* A lógica deve ser organizada em funções nomeadas — sem código solto fora de funções, exceto a declaração de variáveis e a chamada inicial de renderização
* Somente são aceitos comandos e recursos abordados em aula ou presentes nos materiais e apostilas da disciplina — qualquer recurso diferente deve ser justificado no vídeo com uma explicação clara do que ele faz e por que foi necessário
* O estudante deve aparecer obrigatoriamente no vídeo, de forma a evitar narrações feitas por IA
Validações obrigatórias

* Os campos de login não podem ser enviados vazios
* Nenhum item pode ser salvo com o campo vazio — a mensagem de erro deve aparecer na tela
* Ao editar um item, se o usuário cancelar ou confirmar com o campo vazio, o item original deve permanecer sem alteração
* A remoção de um item deve considerar sua posição na lista, não o seu valor — para evitar que itens com o mesmo texto sejam removidos ao mesmo tempo


IA 1 - Chathpt

Problemas Encontrados
Utilizou recursos não vistos em aula.


IA 2 - BlackBoxIA

Problemas Encontrados
Remoção baseada no valor e não na posição.
Organização do código poderia ser melhor.
A lista não adicionava os intens, por algum motivo entrava em conflito


IA Escolhida

ClaudeCode

Justificativa

A solução apresentou todos os requisitos solicitados pela atividade, incluindo autenticação, CRUD completo, uso de array de strings e validações obrigatórias. Foram realizados apenas ajustes visuais e pequenas melhorias na organização do código.



