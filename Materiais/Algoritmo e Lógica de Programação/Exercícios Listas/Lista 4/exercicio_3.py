from random import sample
lista_1 = sample(range(1, 101), 10)
lista_2 = sample(range(1, 101), 10)
lista_3 = []

for n in zip(lista_1, lista_2):
  lista_3.extend(list(n))
print('lista_1:', lista_1)
print('lista_2:', lista_2)
print('lista_3:', lista_3)