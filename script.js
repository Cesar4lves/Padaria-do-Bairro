// escrever 3 variaveis contendo nome, endereco e telefone
let nomePadaria = "Padaria do Bairro";
let endereco = "Rua Nossa Senhora de FATma, nº 123 – Centro";
let telefone = "(11) 91234 5678";

//escrever 3 variaveis com preços dos produtos
let precoPaoFrances = "R$ 0,80";
let precoPaoLeite = "R$ 1,20";
let precoPaoIntegral = "R$ 1,50";

//escrever 3 variaveis do controle do estoque
let estoquePao = 1000;
let estoqueBolo = 300;
let estoqueSalgado = 1500;

//array de produtos
const produtos = ["Coxinha", "Pao de Queijo", "Empada de Frango", "Bolo de Chocolate", "Sonho Recheado", "Pão Doce"];

// array de categorias
const produto = {
    nome: "Café",
    categoria: "Bebida",
    tipo: "Preto", 
    preco: "R$ 3,00"
}

// Exemplo de var (não recomendado)
var horarioFuncionamento = "06h às 19h";

// Constante que não pode ser alterada
const localizacao = "São Paulo - SP"

// Let que pode ser reatribuída
let quantidadePaesAtual = 238;

//criar array de objetos
const listaProdutos = [
    {
        nome: "Café Preto", 
        preco: "R$ 3,00"
    }, 
    {
        nome: "Café com Leite",
        preco: "R$ 4,00"
    }, 
    {
        nome: "Suco Natural",
        preco: "R$ 5,50"
    }
]

//criar uma função que sauda o cliente de acordo com o horário que ele entra no site
function saudar(hora) {
    if (hora < 12) {
        console.log("Bom dia!");
    } else if (hora < 18) {
        console.log("Boa tarde!");
    } else {
        console.log("Boa noite!");
    }
}

saudar(22);