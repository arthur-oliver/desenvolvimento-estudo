import requests
url = 'https://fatec-cafe.glitch.me/'
texto = requests.get(url).text  
preço = texto[234:238]
print (preço)

