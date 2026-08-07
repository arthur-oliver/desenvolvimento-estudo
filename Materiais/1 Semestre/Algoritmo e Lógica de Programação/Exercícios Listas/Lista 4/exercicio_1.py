from random import sample
lista = sample(range(1, 101), 10)
maior = menor = lista[0]
cont = 1
while cont < 10:
  if lista[cont] > maior: maior = lista[cont]
  if lista[cont] < menor: menor = lista[cont]
  cont = cont + 1
print ('lista:', lista)
print (f'Maior número = {maior}')
print (f'Menor número = {menor}')