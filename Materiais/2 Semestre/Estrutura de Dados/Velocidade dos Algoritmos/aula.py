#Busca Binária

from math import log
n = 1000000
print(log(n, 2))
n=n*1000
print(log(n, 2))
n=n*1000
print(log(n, 2))
n=n*1000
print(log(n, 2))

#Percorrer cada elemento, comparar e ordenar
#75012364
'''
7               7 faz nada
57              5 empurra 7
057             0 empurra 57
0157            1 empurra 57
01257           2 empurra 57
012357          3 empurra 57
0123567         6 empurra 7
01234567        4 empurra 567
'''

# Para estudar o caso acima
'''
#Gera um número de 7 dígitos (sem repetir) e embaralha
import random
n = list(range(8))
random.shuffle(n)
print(n)
'''

# Percorrer cada elemento, comparar e ordenar (trocando quando encontrar o número da sequência)
#20573164
'''
02573164 troca 0 com 2
01573264 troca 1 com 2
01273564 troca 2 com 5
01237564 troca 3 com 7
01234567 troca 4 com 5
01234567 troca 5 com 5
01234567 troca 6 com 6
01234567 troca 7 com 7
'''

#Seleção é PIOR que inserção, pois percorre o vetor inteiro para cada elemento, mesmo que ele já esteja ordenado.