import requests
url = 'https://fatec-cafe.glitch.me/vip'
texto = requests.get(url).text  
onde = texto.find('R$')
inicio = onde + 2
fim = inicio + 4
preço = texto[inicio:fim]
if preço < 4.74:
    print (preço)

