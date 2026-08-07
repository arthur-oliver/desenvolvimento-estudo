import urllib.request
pagina = urllib.request.urlopen(
         'https://fatec-cafe.glitch.me/') 
texto = pagina.read().decode('utf8') 
print (texto)

