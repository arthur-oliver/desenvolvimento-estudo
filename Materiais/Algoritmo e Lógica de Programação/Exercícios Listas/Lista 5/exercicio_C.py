x = 0
for n in range (1067, 3627):
    if n%2 == 0 and n%7 == 0:
        x = x + 1
print(f'Resposta = {x}')