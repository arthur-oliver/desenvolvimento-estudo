n = int(input('Digite um valor: '))
a,b = 1,1
k=1
while k<=n-2:
    a,b = b,a +b
    k=k+1
print(b)
