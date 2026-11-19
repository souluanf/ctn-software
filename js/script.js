const servicos = {
    modernizacao: {
        nome: "Modernização de sistemas",
        descricao: "Para sistemas antigos que ninguém tem coragem de mexer. Trocamos uma parte de cada vez e a empresa continua funcionando.",
        entregas: ["Diagnóstico do sistema atual", "Plano de migração por etapas", "Testes automatizados", "Documentação atualizada"],
        prazo: "Prazo típico: a partir de 8 semanas"
    },
    sobmedida: {
        nome: "Sistemas sob medida",
        descricao: "Para empresas que dependem de planilhas e controles manuais. Criamos um sistema web com as regras do seu negócio.",
        entregas: ["Levantamento do processo", "Sistema web com login", "Relatórios e gráficos", "Treinamento da equipe"],
        prazo: "Prazo típico: a partir de 6 semanas"
    },
    integracoes: {
        nome: "Integração de sistemas",
        descricao: "Para quando o ERP, a loja virtual e o financeiro não conversam. Os dados passam a ir de um sistema para o outro sozinhos.",
        entregas: ["Mapa dos dados trocados", "Integração via API", "Alertas quando algo falha", "Painel de acompanhamento"],
        prazo: "Prazo típico: a partir de 3 semanas"
    }
};

const modalServico = new bootstrap.Modal(document.getElementById("modal-servico"));
const botoesDetalhes = document.querySelectorAll(".btn-detalhes");

botoesDetalhes.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const servico = servicos[botao.dataset.servico];

        document.getElementById("modal-servico-titulo").textContent = servico.nome;
        document.getElementById("modal-servico-descricao").textContent = servico.descricao;
        document.getElementById("modal-servico-prazo").textContent = servico.prazo;

        const lista = document.getElementById("modal-servico-entregas");
        lista.innerHTML = "";
        servico.entregas.forEach(function (entrega) {
            const item = document.createElement("li");
            item.textContent = entrega;
            lista.appendChild(item);
        });

        modalServico.show();
    });
});

const form = document.getElementById("form-contato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoAssunto = document.getElementById("assunto");
const campoMensagem = document.getElementById("mensagem");

function marcarCampo(campo, valido) {
    if (valido) {
        campo.classList.remove("is-invalid");
    } else {
        campo.classList.add("is-invalid");
    }
    return valido;
}

function emailValido(email) {
    return email.includes("@") && email.includes(".");
}

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nomeOk = marcarCampo(campoNome, campoNome.value.trim().length >= 3);
    const emailOk = marcarCampo(campoEmail, emailValido(campoEmail.value.trim()));
    const assuntoOk = marcarCampo(campoAssunto, campoAssunto.value !== "");
    const mensagemOk = marcarCampo(campoMensagem, campoMensagem.value.trim().length >= 10);

    if (nomeOk && emailOk && assuntoOk && mensagemOk) {
        document.getElementById("texto-enviado").textContent =
            "Obrigado, " + campoNome.value.trim() + "! Vamos responder no seu e-mail em até um dia útil.";
        new bootstrap.Modal(document.getElementById("modal-enviado")).show();
        form.reset();
    }
});
