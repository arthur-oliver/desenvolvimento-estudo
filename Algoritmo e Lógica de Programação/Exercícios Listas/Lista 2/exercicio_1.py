n1 = int(input('Digite o primeiro número: '))
n2 = int(input('Digite o segundo número: '))
n3 = int(input('Digite o terceiro número: '))

if n1>n2+n3 or n2>n1+n3 or n3>n2+n1:
    print ('Conceito Matemático: Um dos lados é maior que a soma dos demais.\nPortanto, não é um triângulo!')
elif n1 == n2 == n3:
    print ('Triângulo Equilátero')
elif n1 == n2 or n1 == n3 or n2 == n3:
    print ('Triângulo Isóceles')
else:
    print ('Triângulo Escaleno')
