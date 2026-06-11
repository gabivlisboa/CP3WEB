var jogos = [
      "The Legend of Zelda: Breath of the Wild",
      "Dark Souls III",
      "Red Dead Redemption 2"
    ];

    var USUARIO_CORRETO = "aluno";
    var SENHA_CORRETA   = "fiap2025";

    var toastTimer = null;

    /* ───────────────────────────────────────────
       AUTENTICAÇÃO
    ─────────────────────────────────────────── */
    function fazerLogin() {
      var usuario = document.getElementById("input-user").value;
      var senha   = document.getElementById("input-pass").value;
      var errEl   = document.getElementById("login-error");

      if (usuario === "" || senha === "") {
        errEl.textContent = "⚠ Preencha todos os campos.";
        errEl.classList.add("visible");
        return;
      }

      if (usuario === USUARIO_CORRETO && senha === SENHA_CORRETA) {
        errEl.classList.remove("visible");
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("app-screen").style.display = "block";
        renderizarLista();
      } else {
        errEl.textContent = "⚠ Usuário ou senha inválidos. Tente novamente.";
        errEl.classList.add("visible");
        document.getElementById("input-pass").value = "";
      }
    }

    function fazerLogout() {
      document.getElementById("login-screen").style.display = "flex";
      document.getElementById("app-screen").style.display = "none";
      document.getElementById("input-user").value = "";
      document.getElementById("input-pass").value = "";
      document.getElementById("login-error").classList.remove("visible");
    }

    /* ───────────────────────────────────────────
       CRUD — ADICIONAR
    ─────────────────────────────────────────── */
    function pegarNomeNovo() {
      return document.getElementById("input-novo").value.trim();
    }

    function mostrarErroAdicao(visivel) {
      var el = document.getElementById("add-error");
      if (visivel) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    }

    function adicionarFim() {
      var nome = pegarNomeNovo();
      if (nome === "") {
        mostrarErroAdicao(true);
        return;
      }
      mostrarErroAdicao(false);
      jogos.push(nome);
      document.getElementById("input-novo").value = "";
      renderizarLista();
      mostrarToast("Jogo adicionado ao fim 🎮");
    }

    function adicionarInicio() {
      var nome = pegarNomeNovo();
      if (nome === "") {
        mostrarErroAdicao(true);
        return;
      }
      mostrarErroAdicao(false);
      jogos.unshift(nome);
      document.getElementById("input-novo").value = "";
      renderizarLista();
      mostrarToast("Jogo adicionado ao início 🎮");
    }

    /* ───────────────────────────────────────────
       CRUD — REMOVER
    ─────────────────────────────────────────── */
    function removerJogo(indice) {
      jogos.splice(indice, 1);
      renderizarLista();
      mostrarToast("Jogo removido.");
    }

    /* ───────────────────────────────────────────
       CRUD — EDITAR
    ─────────────────────────────────────────── */
    function editarJogo(indice) {
      renderizarLista(indice);
    }

    function salvarEdicao(indice) {
      var input = document.getElementById("edit-input-" + indice);
      var novoNome = input.value.trim();
      if (novoNome !== "") {
        jogos[indice] = novoNome;
        mostrarToast("Jogo atualizado ✓");
      }
      renderizarLista();
    }

    function cancelarEdicao() {
      renderizarLista();
    }

    /* ───────────────────────────────────────────
       RENDER
    ─────────────────────────────────────────── */
    function renderizarLista(indiceEditando) {
      var container = document.getElementById("game-list");
      document.getElementById("count-num").textContent = jogos.length;

      if (jogos.length === 0) {
        container.innerHTML =
          '<div class="empty-state">' +
          '<div class="empty-icon">🎮</div>' +
          '<div class="empty-text">Nenhum jogo na biblioteca ainda.<br>Adicione seu primeiro!</div>' +
          '</div>';
        return;
      }

      var html = "";
      for (var i = 0; i < jogos.length; i++) {
        var estaEditando = (i === indiceEditando);

        html += '<div class="game-item">';
        html += '<span class="item-index">' + (i + 1) + '</span>';
        html += '<span class="item-dot"></span>';

        if (estaEditando) {
          html += '<input id="edit-input-' + i + '" class="item-edit-input" type="text" value="' + escapeHtml(jogos[i]) + '" />';
          html += '<div class="item-actions">';
          html += '<button class="btn-icon btn-save"   onclick="salvarEdicao(' + i + ')"  title="Salvar">✓</button>';
          html += '<button class="btn-icon btn-cancel" onclick="cancelarEdicao()"          title="Cancelar">✕</button>';
          html += '</div>';
        } else {
          html += '<span class="item-name">' + escapeHtml(jogos[i]) + '</span>';
          html += '<div class="item-actions">';
          html += '<button class="btn-icon btn-edit"   onclick="editarJogo(' + i + ')"    title="Editar">✎</button>';
          html += '<button class="btn-icon btn-delete" onclick="removerJogo(' + i + ')"   title="Remover">🗑</button>';
          html += '</div>';
        }

        html += '</div>';
      }

      container.innerHTML = html;

      if (indiceEditando !== undefined && indiceEditando >= 0) {
        var campo = document.getElementById("edit-input-" + indiceEditando);
        if (campo) {
          campo.focus();
          campo.select();
        }
      }
    }

    /* ───────────────────────────────────────────
       UTILITÁRIOS
    ─────────────────────────────────────────── */
    function escapeHtml(texto) {
      return texto
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function mostrarToast(mensagem) {
      var toast = document.getElementById("toast");
      toast.textContent = mensagem;
      toast.classList.add("show");
      if (toastTimer !== null) {
        clearTimeout(toastTimer);
      }
      toastTimer = setTimeout(function() {
        toast.classList.remove("show");
        toastTimer = null;
      }, 2500);
    }

    /* ───────────────────────────────────────────
       ATALHOS DE TECLADO
    ─────────────────────────────────────────── */
    function configurarTeclado() {
      document.getElementById("input-pass").addEventListener("keydown", function(e) {
        if (e.key === "Enter") { fazerLogin(); }
      });
      document.getElementById("input-user").addEventListener("keydown", function(e) {
        if (e.key === "Enter") { document.getElementById("input-pass").focus(); }
      });
      document.getElementById("input-novo").addEventListener("keydown", function(e) {
        if (e.key === "Enter") { adicionarFim(); }
      });
    }

    /* ───────────────────────────────────────────
       INICIALIZAÇÃO
    ─────────────────────────────────────────── */
    configurarTeclado();