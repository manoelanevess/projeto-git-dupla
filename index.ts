function saudacao(nome: string): void {
    console.log(`Olá ${nome}, bem-vindo ao projeto!`);
}

saudacao("Usuário");

function soma(a: number, b: number): number {
    return a + b;
}

console.log("Resultado:", soma(5, 3));

function media(a: number, b: number, c: number): number {
    return (a + b + c) / 3;
}

console.log("Média:", media(7, 8, 9));