import os
os.system("cls")

'''
Exercício 1:
Você decidiu juntar dinheiro para comprar um notebook de R$6000,00.
Todo mês consegue guardar 15% do seu salário líquido de R$2000,00.
Em cada mês, primeiro guarde o valor mensal; em seguida, se for o caso, aplique as dispesas bônus.
A cada 5 meses ocorre uma despesa fixa de R$300,00.
Além disso, a cada 8 meses você recebe um presente de uma tia de R$800,00, que é totalmente acrescentado ao valor acumulado.
Escreva um programa que calcule em quantos meses você atinge ou ultrapassa o valor de R$6000,00
e informe também quanto dinheiro sobra após atingir a meta.
Use necessariamente while.
'''

mes = 1
dinheiro = 2000
while dinheiro < 6000:
   mes = mes + 1
   dinheiro = dinheiro + 2000*0.15
   if mes % 5:
     dinheiro = dinheiro - 300
   if mes % 8:
     dinheiro = dinheiro + 800

print(f'Exercício 1: \n(Básico)\n\nEm {mes} meses, atinge R$ {dinheiro:.2f}')
print(f'Sobrando R$ {dinheiro - 6000:.2f}')

'''
Exercício 2:
Implemente uma função Python chamada conta_pulo(s) que recebe uma string s.
A função deve contar quantas vezes o padrão "p*lo" aparece na string,
onde o caractere '*' pode ser qualquer letra ou simbolo.
Exemplos: "pulo", "palo", "p#lo" devem ser contabilizados.
Regra: a busca deve diferencia maiúsculas de minúsculas (ex: "Pulo" não deve ser contabilizado).
Requisito: Use um  laço de repetição e fatiamento (slicing) para percorrer a string,
garantindo que o índice não ultrapasse o tamanho do texto.
'''

def conta_pulo(string):
    contador = 0
    for letra in range(len(string) - 3):
        if string[letra] == 'p' and string[letra+2 : letra+4] == 'lo':
            contador += 1
    return contador

print(f'\nExercício 2:\n(List Comprehension)\n\n{conta_pulo("pulo palo p#lo Pulo")}')

'''
Exercício 3:
Seja um dicionário de alunos, com suas notas.
Mostre os alunos por ordem de notas.
alunos = {'jose': 10, 'maria': 7, 'ulisses': 8}
saída = ['maria', 'ulisses', 'jose']
Use sorted com a cláusula key=
'''
alunos = {'jose': 10, 'maria': 7, 'ulisses': 8}
def nota(nome):
   return alunos[nome]
print(f'\nExercício 3:\n(Dict Comprehension)\n\n{sorted(alunos, key=nota)}')

'''
Exercício 4:
Faça uma função recursiva que calcule o Fibonacci de um inteiro positivo n.
Exemplo: fib(1) = 1, fib(2) = 1, fib(3) = 2, fib(4) = 3, etc.
Retorne o valor da posição, não a sequência inteira
'''
from functools import cache
@cache
def fib(n):
  if n == 1 or n == 2 : return 1
  return fib(n-1) + fib(n-2)
print(f'\nExercício 4:\n(Recursão)\n\n{fib(1), fib(2), fib(3), fib(4), fib(5),}')

'''
Exercício 5:
Analise o código abaixo que utiliza uma estrutura para armazenar dados de um aluno.
O programa compila sem erros, mas apresenta uma falha ao ser executado.
Identifique a linha onde ocorre o erro, expplique detalhadamente o motivo e
forneça a linha de código corrigida

typedef struct { int ra; int nota; } Aluno;
void registrar() {
Aluno *a; //Declaração de um ponteiro para struct
a->ra = 12345; // Atribuição de um valor
a->nota = 10;
printf("Aluno RA %d tirou nota %d , a->ra, a->nota);
}

Corrigido:

typedef struct { int ra; int nota; } Aluno;
void registrar() {
Aluno *a; //Declaração de um ponteiro para struct
a = malloc(sizeof(Aluno)); // ou Aluno x; a = &x;  (Cria um lugar para o ponteiro "jogar" o que ele está apontando)
a->ra = 12345; // Atribuição de um valor
a->nota = 10;
printf("Aluno RA %d tirou nota %d , a->ra, a->nota);
}
'''