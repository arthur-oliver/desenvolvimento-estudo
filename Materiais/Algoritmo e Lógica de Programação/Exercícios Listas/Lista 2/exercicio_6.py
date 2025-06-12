sh = float(input('Digite seu salário (por hora): R$'))
h = float(input('Digite o número de horas trabalhadas por mês: '))
sb = sh*h
ir =  sb*0.11 #11%
inss = sb*0.08 #8%
sindicato = sb*0.05 #5%
sl = sb-ir-inss-sindicato
print(f'\nSalário Bruto = R${sb:.2f}\nDesconto do Importo de Renda = R${ir:.2f}\nDesconto do INSS = R${inss:.2f}\nDesconto do Sindicato = R${sindicato:.2f}\nSalário Líquido = R${sl:.2f}\n')
