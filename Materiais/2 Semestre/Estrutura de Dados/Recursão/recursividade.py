import os
os.system("cls")

#RECURSIVIDADE = FUNÇÃO DENTRO DE FUNÇÃO...

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

 # método mais eficiente que o anterior (não calcula o que já foi calculado) - utilizando a memória (programação de alto nível)
from functools import cache
@cache
def fib(n): #somente o número na posição n da sequência de fiboonacci: 1 1 2 3 5 8 13 21 34
   if n == 1 or n == 2 : return 1
   return fib(n-1) + fib(n-2)
print(fib(100))

# ----------------------

def mdc(a,b): # cálculo mdc
   if b == 0: return a
   return mdc(b, a % b)
print(mdc(21,15)) #saída 3

# ----------------------

def dec2bin(n): #dec2bin(18) -> '10010'
   if n == 0: return ''
   return dec2bin(n // 2) + str(n % 2)
print(dec2bin(18))
# suponha  n > 0 para a conversão para binário

# ----------------------

#EXERCÍCIO
#as duas funções são iguais, sim ou não, explique. Melhore se estiver ineficiente.

def f1(n):
   if n == 0 : return 1
   return 2 * f1(n-1)
print(f1(100))

from functools import cache #adicionei (melhorei)
@cache #adicionei (melhorei)
def f2(n):
   if n == 0 : return 1
   return f2(n-1) + f2(n-1)
print(f2(100))

#R: Não são iguais, a primeira calcula sem repetir e a segunda duplica (mas tem a mesma função).

# ----------------------

# EXERCÍCIOS EXTRA!
'''
def cont_dig(n):      # cont_dig(12345) -> 5
def soma_lista(lst):  # soma_lista([2,4,6]) -> 12
def max_lista(lst):   # max_lista([3,8,2,5]) -> 8
def pal(s):           # pal('radar') -> True
def conta_vogal(s):   # conta_vogal('abacate') -> 4
def soma_par(n):      # soma_par(6) -> 2+4+6 -> 12
#soma dos pares de 1 até n (inclusive)
'''

def cont_dig(n):      # cont_dig(12345) -> 5 recursividade
   if n < 10: return 1
   return 1 + cont_dig(n // 10)
print(cont_dig(12345))

def soma_lista(lst):  # soma_lista([2,4,6]) -> 12
   if len(lst) == 0: return 0
   return lst[0] + soma_lista(lst[1:])
print(soma_lista([2, 4, 6]))

def max_lista(lst):   # max_lista([3,8,2,5]) -> 8
   if len(lst) == 1: return lst[0]
   max_rest = max_lista(lst[1:])
   return lst[0] if lst[0] > max_rest else max_rest
print(max_lista([3, 8, 2, 5]))

def pal(s):           # pal('radar') -> True
   if len(s) <= 1: return True
   if s[0] != s[-1]: return False
   return pal(s[1:-1])
print(pal('radar'))

def conta_vogal(s):   # conta_vogal('abacate') -> 4
   if len(s) == 0: return 0
   count = 1 if s[0].lower() in 'aeiou' else 0
   return count + conta_vogal(s[1:])
print(conta_vogal('abacate'))

def soma_par(n):      # soma_par(6) -> 2+4+6 -> 12 - OBS: soma dos pares de 1 até n (inclusive)
   if n <= 0: return 0
   if n % 2 == 0:
       return n + soma_par(n - 2)
   else:
       return soma_par(n - 1)
print(soma_par(6))