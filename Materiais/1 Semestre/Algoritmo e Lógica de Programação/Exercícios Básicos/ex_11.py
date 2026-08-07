#Criando uma função que receba palavras e, se tiver uma letra na palavra que também contenha na palavra "python", exiba o valor "True"
def pitonica(p):
    for letra in p:
        if letra in 'python':
            return True
    return False  # Agora o return False está fora do for, para ser retornado apenas após percorrer toda a palavra

# Teste da função
resultado = pitonica('abacate')
print(resultado)  # Isso vai exibir o resultado booleano, True ou False (possui "T")
# Teste da função
resultado = pitonica('maracujá')
print(resultado)  # Isso vai exibir o resultado booleano, True ou False (não possui letras iguais)
