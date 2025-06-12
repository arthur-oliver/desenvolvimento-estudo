#Algoritmo de Euclides
n1 = int(input('Digite um número: '))
n2 = int(input('Digite outro número: '))
while n1%n2!=0:
    n1,n2=n2,n1%n2
print(f'MDC = {n2}')