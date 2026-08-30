import os
os.system("cls")

#PONTEIRO   

a = [1, 2 ,3]
b = a
a [0] = 20
print(a)
print(b)
print(id(a)) #ponteiro (mesmo endereço de memória)
print(id(b)) #ponteiro (mesmo endereço de memória)

# --------------------------------------------
print('\n')

a = [4, 5 ,6]
b = list (a)
a[0] = 100
print(a)
print(b)
print(id(a)) #ponteiro diferente (diferente endereço de memória)
print(id(b)) #ponteiro diferente (diferente endereço de memória)

# --------------------------------------------

'''
#Declaração de ponteiro
int* x;

#Usando ponteiro para apontar para um inteiro
*x = 42;

#Aloca memória para um inteiro
x = malloc(sizeof(int));
'''

#OBS: PONTEIRO É DIFERENTE DO QUE ESTÁ APONTANDO, MAS PODE SER USADO PARA ACESSAR O QUE ESTÁ APONTANDO.