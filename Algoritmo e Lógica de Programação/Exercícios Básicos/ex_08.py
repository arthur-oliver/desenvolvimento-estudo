#Exibindo palavras da frase da lista que começam com vogal
texto = 'batatinha quando nasce esparrama pelo chão'
texto = texto.split()
for palavra in texto:
 if palavra[0] in 'aeiou':
     print (palavra)