import urllib.request
pagina = urllib.request.urlopen(
    'https://fatec-cafe.glitch.me/vip') 
texto = pagina.read().decode('utf8') 
preço = texto[234:238]
print (preço)

