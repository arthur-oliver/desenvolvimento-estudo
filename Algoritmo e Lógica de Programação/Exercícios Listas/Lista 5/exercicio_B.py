contador = 0
for i in range (1, 10):
    if i != 3:
        for j in range(1, 7):
            print('oi')
            contador = contador + 1
print(f'\n"oi" foi impresso {contador} vezes!')