d = int(input('Digite um número de dias: '))
h = int(input('Digite um número de horas: '))
m = int(input('Digite um número de minutos: '))
s = int(input('Digite um número de segundos: '))
resultado = d*24*60*60 + h*60*60 + m*60 + s
print (f'Igual a {resultado} segundos')