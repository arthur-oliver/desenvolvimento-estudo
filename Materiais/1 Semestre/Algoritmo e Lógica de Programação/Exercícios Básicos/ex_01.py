#Fazendo lista e exibindo elementos com "while"
lista = ['abacate', 42, 3.14]
len (lista)
print(f'Número de itens: {len(lista)}\n')
x=0
while x<=len(lista)-1:
    item = lista[x]
    print(f'Elemento {x+1}: {item}')
    x=x+1