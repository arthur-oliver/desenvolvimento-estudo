import requests
url = 'https://fatec-cafe.glitch.me/'
texto = requests.get(url).text
print (texto)

