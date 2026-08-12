import os
os.system("cls")

# DICT COMPREHENSION

#Dada uma lista de dicionários em Python com as chaves
#'nome', 'preco' (numérico) e 'ativo' (booleano), construa,
#obrigatoriamente usanddo dict commprehension. Mostre os produtos ativos com aumento de 10%.

#{chave: valor        for x in domínio        condição}
entrada = [{'nome': 'Mouse', 'preco': 50, 'ativo': True}, {'nome': 'Teclado', 'preco': 100, 'ativo': False}]
saida = {x['nome']:x['preco']*1.1 for x in entrada if x['ativo'] == True}
print(saida)

#Se disponível, adiciona mais 50 páginas
entrada = [{'titulo': 'Python Fluente', 'paginas': 400, 'disponivel': True}, {'titulo': 'C Completo', 'paginas': 700, 'disponivel': False}]
saida = {x['titulo']:x['paginas']+50 for x in entrada if x['disponivel'] == True}
print(saida)