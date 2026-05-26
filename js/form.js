//class contato

class contato {
  constructor(
    nome,
    sobrenome,
    email,
    cpf,
    telefone,
    contato,
    tipoContato,
    caixaTexto,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.contato = contato;
    this.tipoContato = tipoContato;
    this.caixaTexto = caixaTexto;
  }
}
function Post(form) {
  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("contato").value,
    form.elements.namedItem("tipo-contato").value,
    form.elements.namedItem("caixa-texto").value,
  );

  console.table(data);
  Enviar();
  form.reset();
  return false;
}

function Enviar() {
  var nome = document.getElementById("nomeid");
  if (nome.value != "") {
    alert(
      "Obrigado sr(a) " +
        nome.value +
        " os seus dados foram encaminhados com sucesso",
    );
  }
}
