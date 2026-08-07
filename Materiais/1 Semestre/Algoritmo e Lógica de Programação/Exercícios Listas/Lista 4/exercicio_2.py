from random import sample
lista = sample(range(1, 101), 20)
ímpar = []
par = []
for número in lista:
  if número % 2 == 0:
    par.append(número)
  else:
    ímpar.append(número)
print (f'Lista: {lista}')
print (f'Pares: {par}')
print (f'Ímpares: {ímpar}')