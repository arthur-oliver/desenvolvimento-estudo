import os
os.system("cls")

#LIST COMPREHENSION
#{chave: valor        for x in domínio        condição}

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
#Outro método
list = 'au batata mel'.split()
saida = sorted(list,key=lambda letra : letra[-1])
print(f'5 -', saida)

#Dada uma string, utilize list comprehension para criar uma nova string
#onde os caracteres aparecem alternando entre maiúsculas e  minúsculas.

string = 'cachorro'
saida = ''.join([letra.upper() if posicao % 2 == 0 else letra.lower() for posicao, letra in enumerate(string)]) #enumerate pega os respectivos valores da string (posição, letra)
print(f'6 -', saida)

#Dada uma lista de strings contendo números misturados com letras
#(por exemplo, "a3b", "z12y", "c1x"), ordene a lista com base no número contido na string.

list = ["a3b", "z12y", "c1x"]
def separa_n (string):
    indice = ''.join([letra for letra in string if letra in '0123456789'])
    return int(indice)
saida = sorted(list, key=separa_n)
print(f'7 -',saida)

#Crie um dicionário que mapeia os números de 1 a 10 para seus respectivos quadrados, usando dict comprehension.
dicionario = {n: n**2 for n in range(1, 11)}
print(f'8 -', dicionario)

#Dada uma string, crie um dicionário onde as chaves são os caracteres e os valores são a contagem de vezes que cada caractere aparece.
string = 'arthur'
dicionario = {letra: string.count(letra) for letra in string}
print(f'9 -', dicionario)

#Dado um dicionário qualquer, crie um novo dicionário onde as chaves e os valores estejam invertidos.
dicionario = {'a': 1, 'b': 2, 'c': 3}
dicionario_final = {numero: letra for letra, numero in dicionario.items()}
print(f'10 -', dicionario_final)

#Dado um dicionário de números, crie um novo dicionário contendo apenas os pares chave-valor onde o valor seja maior que um determinado número.
dicionario = {'a': 13, 'b': 10, 'c': 3, 'd': 4}
chave_valor = 4
dicionario_final = {letra: valor for letra, valor in dicionario.items() if valor > chave_valor}
print(f'11 -', dicionario_final)

#Dado um dicionário, ordene-o pelos valores.
dicionario = {'a': 13, 'b': 10, 'c': 3, 'd': 4}
dicionario_final = dict(sorted(dicionario.items(), key=lambda item: item[1]))
print(f'12 -', dicionario_final)

#Dado um dicionário onde as chaves são palavras, ordene-o com base no comprimento das chaves.
dicionario = {'banana': 1, 'abacaxi': 2, 'uva': 3}
dicionario_final = dict(sorted(dicionario.items(), key=lambda item: len(item[0])))
print(f'13 -', dicionario_final)

#Dada uma frase, crie um dicionário onde as chaves são palavras e os valores são a contagem de vezes que cada palavra aparece.
frase = "abacate no almoco e melhor que abacate na janta".split()
dicionario = {palavra: frase.count(palavra) for palavra in frase}
print(f'15 -', dicionario)

#Dado um dicionário onde os valores são números, crie um novo dicionário onde cada valor seja a raiz quadrada do original.
#TERMINAR!

#Dada uma lista de palavras, crie um dicionário onde as chaves sejam as primeiras letras e os valores sejam listas das palavras correspondentes.
#TERMINAR!