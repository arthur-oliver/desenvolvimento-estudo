import os
os.system("cls")

#Busca Binária

'''
Considere:
arthur (posição no vetor ordenado)
gabriela (posição no vetor ordenado)

Localizados nos extremos do vetor ordenado.
Eles vão se aproximando, pulando para o meio (mais eficiente) do caminho entre eles.
Precisam se encontrar: ficar um ao lado do outro = 1 posição de diferença.
'''

cont = 0
def busca_binaria(x, vetor):
  global cont
  arthur = -1           #representa a posição antes do primeiro elemento
  gabriela = len(vetor) #representa a posição depois do último elemento
  while arthur < gabriela-1:            #para quando estão um ao lado do outro arthur = gabriela - 1
    metade = (arthur + gabriela) // 2   #metade do caminho entre eles
    cont = cont + 1                     #utilizado para contar quantas vezes o laço foi executado - os "passos", etapas que vão dar para se alcançarem
    if vetor[metade] < x:               #ponto de encontro depois
      arthur = metade      #arthur dá um "pulão" - vai para a metade do caminho entre eles
    else:
      gabriela = metade    #gabriela volta um "pulão" - vai para a metade do caminho entre eles
  return gabriela          #retorna gabriela porque ela é a posição do elemento que estamos procurando, ou seja, o índice do elemento x no vetor ordenado
vetor = list(range(1000000))
from random import randint
print (busca_binaria(randint(1, 1000000), vetor)) #índice do elemento "x" que estamos procurando no vetor ordenado - aleatório entre 1 e 1000000
print (cont)

print(f"\nTamanho do vetor: {len(vetor)}\nPassos para encontrar um ao outro: {cont}\n")