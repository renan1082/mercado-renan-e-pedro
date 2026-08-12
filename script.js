// =====================================
// CLIENTE
// =====================================

let nomeCliente = prompt("Digite o nome do cliente:");

if (nomeCliente === null || nomeCliente.trim() === "") {
  nomeCliente = "Cliente";
}

// =====================================
// VARIÁVEIS
// =====================================

let total = 0;

let totalItens = 0;

let produtos = [];

let continuar = "SIM";

// =====================================
// PRODUTOS
// =====================================

while (continuar === "SIM") {
  let produto = Number(
    prompt(
      "=== CAIXA DE MERCADO ===\n\n" +
        "1 - Arroz (R$ 25,90)\n" +
        "2 - Feijão (R$ 9,50)\n" +
        "3 - Leite (R$ 5,80)\n" +
        "4 - Café (R$ 18,90)\n" +
        "5 - Açúcar (R$ 4,75)\n\n" +
        "Digite o código do produto:",
    ),
  );

  let nomeProduto = "";

  let preco = 0;

  if (produto === 1) {
    nomeProduto = "Arroz";

    preco = 25.9;
  } else if (produto === 2) {
    nomeProduto = "Feijão";

    preco = 9.5;
  } else if (produto === 3) {
    nomeProduto = "Leite";

    preco = 5.8;
  } else if (produto === 4) {
    nomeProduto = "Café";

    preco = 18.9;
  } else if (produto === 5) {
    nomeProduto = "Açúcar";

    preco = 4.75;
  } else {
    alert("Produto inválido!");

    continue;
  }

  // =====================================
  // QUANTIDADE
  // =====================================

  let quantidade = Number(
    prompt("Digite a quantidade de " + nomeProduto + ":"),
  );

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Quantidade inválida!");

    continue;
  }

  // =====================================
  // SUBTOTAL
  // =====================================

  let subtotal = preco * quantidade;

  total = total + subtotal;

  totalItens = totalItens + quantidade;

  // Guarda o produto

  produtos.push({
    nome: nomeProduto,

    preco: preco,

    quantidade: quantidade,

    subtotal: subtotal,
  });

  // =====================================
  // CONTINUAR
  // =====================================

  continuar = prompt(
    "Deseja adicionar outro produto?\n\n" + "Digite SIM ou NÃO",
  );

  if (continuar === null) {
    continuar = "NÃO";
  } else {
    continuar = continuar.toUpperCase();
  }

  while (continuar !== "SIM" && continuar !== "NÃO") {
    alert("Digite somente SIM ou NÃO.");

    continuar = prompt(
      "Deseja adicionar outro produto?\n\n" + "Digite SIM ou NÃO",
    );

    if (continuar === null) {
      continuar = "NÃO";
    } else {
      continuar = continuar.toUpperCase();
    }
  }
}

// =====================================
// DESCONTO
// =====================================

let desconto = total * 0.1;

let totalFinal = total - desconto;

// =====================================
// PAGAMENTO
// =====================================

let pagamento = 0;

let formaPagamento = "";

let valorPago = totalFinal;

let troco = 0;

while (pagamento !== 1 && pagamento !== 2 && pagamento !== 3) {
  pagamento = Number(
    prompt(
      "=== FORMA DE PAGAMENTO ===\n\n" +
        "1 - Dinheiro\n" +
        "2 - Cartão\n" +
        "3 - Pix\n\n" +
        "Digite o código:",
    ),
  );

  if (pagamento === 1) {
    formaPagamento = "Dinheiro";

    valorPago = Number(
      prompt(
        "Total da compra: R$ " +
          totalFinal.toFixed(2) +
          "\n\nDigite o valor pago:",
      ),
    );

    while (isNaN(valorPago) || valorPago < totalFinal) {
      alert("Valor insuficiente!\n\n" + "Total: R$ " + totalFinal.toFixed(2));

      valorPago = Number(prompt("Digite o valor pago:"));
    }

    troco = valorPago - totalFinal;
  } else if (pagamento === 2) {
    formaPagamento = "Cartão de Crédito";

    valorPago = totalFinal;

    troco = 0;
  } else if (pagamento === 3) {
    formaPagamento = "Pix";

    valorPago = totalFinal;

    troco = 0;
  } else {
    alert("Forma de pagamento inválida!");
  }
}

// =====================================
// MONTAR TABELA
// =====================================

let tabela = "";

for (let i = 0; i < produtos.length; i++) {
  tabela += `
 
        <tr>
 
            <td>
                ${i + 1}
            </td>
 
            <td>
                ${produtos[i].nome}
            </td>
 
            <td>
                R$ ${produtos[i].preco.toFixed(2)}
            </td>
 
            <td>
                ${produtos[i].quantidade}
            </td>
 
            <td>
                R$ ${produtos[i].subtotal.toFixed(2)}
            </td>
 
        </tr>
 
    `;
}

// =====================================
// MOSTRAR NA PÁGINA
// =====================================

document.getElementById("app").innerHTML = `
 
    <div class="container">
 
        <div class="caixa">
 
 
            <div class="cabecalho-caixa">
 
    <div class="titulo-caixa">
 
        <span class="icone-caixa">🛒</span>
 
        <div>
            <h1>Caixa de Mercado</h1>
            <small>PDV • Sistema de vendas</small>
        </div>
 
    </div>
 
    <div class="numero-caixa">
        CAIXA 001
    </div>
 
</div>
 
 
            <hr>
 
 
            <!-- CLIENTE -->
 
            <div class="cliente">
 
    <div class="cliente-icone">
        👤
    </div>
 
    <div class="cliente-info">
 
        <span class="cliente-label">
            CLIENTE
        </span>
 
        <strong>
            ${nomeCliente}
        </strong>
 
    </div>
 
</div>
 
 
            <!-- PRODUTOS -->
 
            <h4>
                Resumo da compra
            </h4>
 
 
            <table class="table table-bordered">
 
 
                <thead>
 
                    <tr>
 
                        <th>#</th>
 
                        <th>
                            Produto
                        </th>
 
                        <th>
                            Preço unitário
                        </th>
 
                        <th>
                            Quantidade
                        </th>
 
                        <th>
                            Subtotal
                        </th>
 
                    </tr>
 
                </thead>
 
 
                <tbody>
 
                    ${tabela}
 
                </tbody>
 
 
            </table>
 
 
            <!-- INFORMAÇÕES -->
 
            <div class="row">
 
 
                <div class="col-md-6">
 
                    <div class="info">
 
                        Produtos adicionados:
 
                        <b>
                            ${produtos.length}
                        </b>
 
                    </div>
 
                </div>
 
 
                <div class="col-md-6">
 
                    <div class="info">
 
                        Total de itens:
 
                        <b>
                            ${totalItens}
                        </b>
 
                    </div>
 
                </div>
 
 
            </div>
 
 
            <!-- VALORES -->
 
            <div class="row">
 
 
                <div class="col-md-4">
 
                    <div class="valor">
 
                        <small>
                            Total bruto
                        </small>
 
                        <h5>
 
                            R$
                            ${total.toFixed(2)}
 
                        </h5>
 
                    </div>
 
                </div>
 
 
                <div class="col-md-4">
 
                    <div class="valor">
 
                        <small>
                            Desconto
                        </small>
 
                        <h5>
                            10%
                        </h5>
 
                        <small>
 
                            R$
                            ${desconto.toFixed(2)}
 
                        </small>
 
                    </div>
 
                </div>
 
 
                <div class="col-md-4">
 
                    <div class="valor final">
 
                        <small>
                            Total final
                        </small>
 
                        <h5>
 
                            R$
                            ${totalFinal.toFixed(2)}
 
                        </h5>
 
                    </div>
 
                </div>
 
 
            </div>
 
 
            <!-- PAGAMENTO -->
 
            <div class="pagamento">
 
 
                <h3>
                    Forma de pagamento
                </h3>
 
 
                <p>
 
                    <b>
                        Forma:
                    </b>
 
                    ${formaPagamento}
 
                </p>
 
 
                <p>
 
                    <b>
                        Valor pago:
                    </b>
 
                    R$
                    ${valorPago.toFixed(2)}
 
                </p>
 
 
                <p>
 
                    <b>
                        Troco:
                    </b>
 
                    R$
                    ${troco.toFixed(2)}
 
                </p>
 
 
            </div>
 
 
            <!-- SUCESSO -->
 
            <div class="alert alert-success text-center">
 
                Pagamento realizado com sucesso!
 
            </div>
 
 
        </div>
 
    </div>
 
`;
