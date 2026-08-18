import os
os.system("cls")

#RECURSIVIDADE
def fat(n):
    if n == 0 or n == 1: return 1
    return n * fat(n-1) #n! = n*(n-1)!
print (fat(3))

#TESTE DE MESA
#def fat(3):
#    if 3 == 0 or 3 == 1:
#    return 3 * fat(2) #ao acordar executa 3 * 2 = 6
#def fat(2):
#    if 2 == 0 or 2 == 1:
#    return 2 * fat(1) #ao acordar executa 2 * 1 = 2
#def fat(1):
#    if 1 == 0 or 1 == 1: return 1
#Acima tenho 3 instâncias de fat, no return 1 saio da última instância,
#acordo a anterior que faz 2*1, e saio da instância, que acorda a anterior e faz 3*2 = 6, que é o que imprime 6
