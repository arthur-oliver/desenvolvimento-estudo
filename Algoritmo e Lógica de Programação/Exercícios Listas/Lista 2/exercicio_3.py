peso = float(input('Digite o peso dos peixes pescados (Kg): '))
if peso > 50:
    excesso = peso - 50
    multa = excesso * 4
else:
    excesso = multa = 0
print (f'Excesso = {excesso:.2f} Kg\nMulta = R${multa:.2f}')