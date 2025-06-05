#1L = 3m²
#Lata  = 18L = 54m² = R$80,00
area = float(input('Digite o tamanho da área a ser pintada (m²): '))
if area % 54 == 0:
    quant_lata = area/54
else:
    quant_lata = int(area/54)+1 #"+1" garante que, quando o número não for exato, as latas sejam suficientes para cobrir o que resta.
preco_total = quant_lata*80
print(f'{quant_lata:.0f} lata(s)\nValor: R${preco_total:.2f}')