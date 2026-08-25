import os
os.system("cls")

#PONTEIRO   

a = [1, 2 ,3]
b = a
a [0] = 42
print(a)
print(b)
id(a) #ponteiro (mesmo endereço de memória)
id(b) #ponteiro (mesmo endereço de memória)

# --------------------------------------------

a = [4, 5 ,6]
b = list (a)
a[0] = 42
print(a)
print(b)
id(a) #ponteiro diferente (diferente endereço de memória)
id(b) #ponteiro diferente (diferente endereço de memória)

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