#Separando palavras da frase em um  vetor/lista com "while"
texto = 'batatinha quando nasce esparrama pelo chão'
texto = texto.split()
x=0
while x<=len(texto)-1:
    palavra=texto[x]
    print(palavra)
    x=x+1