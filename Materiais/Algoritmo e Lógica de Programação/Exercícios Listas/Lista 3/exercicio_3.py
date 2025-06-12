a = int(80000)
b = int(200000)
ano=0

while a < b:
    ca=a*0.03
    a=a+ca
    cb=b*1.5/100
    b=b+cb
    ano=ano+1
print(f'{ano} anos.')