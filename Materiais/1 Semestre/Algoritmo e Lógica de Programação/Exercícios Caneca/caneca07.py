import urllib.request
preço = 99.99
while preço >= 4.74:
    pagina = urllib.request.urlopen(
    'https://fatec-cafe.glitch.me/vip') 
    texto = pagina.read().decode('utf8') 
    onde = texto.find('R$')
    inicio = onde + 2
    fim = inicio + 4
    preço = float(texto[inicio:fim])
print (f'Comprar: R$ {preço:.2f}')

