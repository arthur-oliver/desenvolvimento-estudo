c = int(input('Digite a quantidade de cigarros que você fuma por dia: '))
a = int(input('Digite a quantidade de anos que você fuma: '))
tc = c*365*a
r = tc/144
print (f'Você perdeu {r:.0f} dias!')