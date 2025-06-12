#Fazendo lista e exibindo elementos com "for"
lista = ['abacate', 42, 3.14]
len (lista)
print(f'Número de itens: {len(lista)}\n')
x=0
for item in lista:
    print(f'Elemento {x+1}: {item}')
    x=x+1
