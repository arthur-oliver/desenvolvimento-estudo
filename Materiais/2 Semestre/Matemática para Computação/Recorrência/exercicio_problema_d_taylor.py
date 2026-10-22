from math import factorial
from xml.etree.ElementTree import PI
'''
def taylor(x):
    resultado=0
    n=5
    i=0
    soma=0
    sinal=1
    while  i <= n:
        soma = soma + sinal * x**(2*i)/factorial(2*i)
    return resultado 
print(taylor(5))
#para x = 5 : saída = 0.996
'''

# Recorrência
def taylor_rec(x):
    if x > 90 or x < 0:
        return "x precisa ser <= 0 e >= 90"
    PI = 3.1415
    R = x * PI / 180
    soma = 0
    a = 1
    b = 1
    for i in range(1, 5):
        soma = soma + (a / b)
        a = a * (-R**2)
        b = b * i * (i+1)        
    return soma
print(taylor_rec(5))