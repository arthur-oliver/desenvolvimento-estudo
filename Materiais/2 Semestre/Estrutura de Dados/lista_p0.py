import os
os.system("cls")

#Seja uma lista de inteiros, mostre apenas os números pares usando list comprehension.
list = [1, 2, 5, 6, 9,12]
saida = [n for n in list if n%2==0]
print(f'1 -', saida)

#Crie uma lista com os quadrados de todos os números pares de 1 a 20 usando list comprehension.
list = range(1,21)
saida = [n**2 for n in list if n%2==0]
print(f'2 -', saida)

#Dada uma lista de palavras, ordene-a pelo tamanho das palavras em ordem crescente, utilizando sorted() com a cláusula key=.
list = 'au batata mel'.split()
saida = sorted(list,key=len)
print(f'3 -', saida)

#Dada uma lista de palavras, ordene-a pelo número de vogais presentes em cada palavra.
list = 'au batata mel'.split()
def contador_vogal(palavra):
    return sum(1 for letra in palavra if letra in 'aeiou')
saida = sorted(list,key=contador_vogal)
print(f'4 -', saida)

#Dada uma lista de palavras, ordene-a pelo último caractere de cada palavra.
list = 'au batata mel'.split()
def ultimo_caractere(palavra):
    return palavra[-1]
saida = sorted(list,key=ultimo_caractere)
print(f'5 -', saida)

#Dada uma string, utilize list comprehension para criar uma nova string
#onde os caracteres aparecem alternando entre maiúsculas e  minúsculas.

#ERRO! CONSERTAR
#string = 'cachorro'
#saida = ''.join([letra.upper() if posicao % 2 == 0 else letra.lower() for posicao, letra in string])
#print(f'6 -', saida)
