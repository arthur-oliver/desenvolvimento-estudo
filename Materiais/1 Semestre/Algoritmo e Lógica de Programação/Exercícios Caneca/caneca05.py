import urllib.request
pagina = urllib.request.urlopen(
    'https://fatec-cafe.glitch.me/vip') 
texto = pagina.read().decode('utf8') 
onde = texto.find('R$')
inicio = onde + 2
fim = inicio + 4
preço = texto[inicio:fim]
if preço < 4.74:
    print ('Compre pelo valor', preço)

