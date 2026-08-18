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

#EXERCÍCIO

def pot(x, n): #potência de x elevado à n, sem usar **
  if n == 0: return 1
  return x * pot(x, n-1) # conceito da matemática: x**n = x * x**(n-1)
print (pot(2, 3)) #saída é 8

# ----------------------

def inv(s): #inverter uma string 'abacate' ---> 'etacaba'
   if len(s) == 1: return s
   return inv(s[1:]) + s[0]
print(inv('abacate'))

# ----------------------

def sd(n): #soma dos dígitos de n - EX: 123 = 1 + 2 + 3
   if n <= 9 : return n
   return n % 10 + sd(n // 10) # // é uma divisão por inteiro
print(sd(123))

# ----------------------

def fib(n): #somente o número na posição n da sequência de fiboonacci: 1 1 2 3 5 8 13 21 34
   if n == 1 or n == 2 : return 1
   return fib(n-1) + fib(n-2)
print(fib(6)) #saída = 8

 # método mais eficiente que o anterior
dic = {}
def fib(n): #somente o número na posição n da sequência de fiboonacci: 1 1 2 3 5 8 13 21 34
   if n == 1 or n == 2 : return 1
   if n not in dic: dic[n] = fib(n-1) + fib(n-2)
   return dic[n]
print(fib(100)) #saída = 354224848179261915075 (no anterior demoraria 4h para encontrar fib(100))

 # método mais eficiente que o anterior (não calcula o que já foi calculado)
from functools import cache
@cache
def fib(n): #somente o número na posição n da sequência de fiboonacci: 1 1 2 3 5 8 13 21 34
   if n == 1 or n == 2 : return 1
   return fib(n-1) + fib(n-2)
print(fib(100))