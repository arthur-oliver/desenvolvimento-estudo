#Tratando o texto para receber cada palavra e guardá-las em uma lista/vetor separadamente
texto = '''The Python Software Foundation and the global Python community welcome and encourage participation by everyone. Our community is based on mutual respect, tolerance, and encouragement, and we are working to help each other live up to these principles.'''
texto = texto.lower()
texto = texto.replace('.', ' ')
texto = texto.replace(',', ' ')
texto = texto.replace(':', ' ')
texto = texto.split()
print(texto)
