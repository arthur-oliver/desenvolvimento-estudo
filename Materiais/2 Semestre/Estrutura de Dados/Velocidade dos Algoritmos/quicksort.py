##from memory_profiler import profile
##@profile
def quicksort(v):
  if len(v) <= 1: return v    
  pivô = v[0]
  iguais  = [x for x in v if x == pivô] # list comprehension
  menores = [x for x in v if x <  pivô]
  maiores = [x for x in v if x >  pivô]
  return quicksort(menores) + iguais + quicksort(maiores) #recursão

from time import time
from random import shuffle
v = list(range(20000))
shuffle(v)
t1 = time()
quicksort(v)
t2 = time()
print (t2-t1)
##from random import sample
##v = sample(range(10), 10)
##print (v)
##v = quicksort(v)
##print (v)





# "Quicksort" não é eficiente - gasta: pouco tempo e muito espaço.
# Pior caso: vetor ordenado (um dos lados não tem nenhum valor, vai demorar mais - analisar elemento por elemento)

#Teste de mesa
# 8 4 2 11 7 13 9 1 12 5 15 3 10 6 0

# ------------------------------------------------------------------------------------------------

#                          guarda 8
# 4 2 7 9 1 5 3 6 0   <-esq   8   ->dir   11 13 12 15 10

# ------------------------------------------------------------------------------------------------
     
#                                       <-esq   8   ->dir     
#               guarda 4                                             guarda 11     
# 2 1 3 0  <-esq   4   ->dir   7 9 5 6                      10  <-esq   11   ->dir   13 12 15  