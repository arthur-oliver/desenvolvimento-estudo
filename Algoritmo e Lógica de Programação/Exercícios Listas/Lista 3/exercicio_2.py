nome = str(input('Digite o nome de usuário: '))
senha = str(input('Digite a senha de usuário: '))
while nome==senha:
    print('Senha inválida!\nDigite uma senha diferente do nome do usuário.')
    senha = str(input('Digite a senha de usuário: '))
print('Senha válida!')