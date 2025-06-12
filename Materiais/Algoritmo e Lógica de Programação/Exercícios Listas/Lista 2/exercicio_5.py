n1 = int(input('Digite um número: '))
n2 = int(input('Digite outro número: '))
n3 = int(input('Digite outro número: '))

if n1==n2==n3:
    print('São iguais!')
elif n1>=n2  and n1>=n3:
    print(f'Maior: {n1}')
elif n2>=n1 and n2>=n3:
    print(f'Maior: {n2}')
else:
    print(f'Maior: {n3}')
if n1==n2==n3:
    print()
elif n1<=n2  and n1<=n3:
    print(f'Menor: {n1}')
elif n2<=n1 and n2<=n3:
    print(f'Menor: {n2}')
else:    
    print(f'Menor: {n3}')