from math import factorial
n = 100
print(len(str(2**n)))               #31
print(len(str(factorial(n))))       #158
n = 1000
print(len(str(2**n)))               #302
print(len(str(factorial(n))))       #2568
n = 10000
print(len(str(2**n)))               #3011
print(len(str(factorial(n))))       #Sangra a tela

'''
Como gerar subconjuntos, para n elementos:
1. Come�ando de 1, aumente de 1 em 1, at� chegar a n
2. Quando chegar � n, remover o �ltimo, e aumenta de 1 o anterior ao �ltimo
3. Tente aumentar novamente
n=6

1
12
123
1234
12345
123456
12346
1235
12356
1236
124
1245
12456
1246
125
1256
126
13
134
1345
13456
1346
135
1356
136
14
145
1456
146
15
156
16
2
23
234
2345
23456
2346
235
2356
236
24
245
2456
246
25
256
26
3
34
345
3456
346
35
356
36
4
45
456
46
5
56
6

Permuta��es, como gerar para n elementos:
1. Fixe o primeiro, dando vez a todos os elementos
2. Fa�a as permuta��es com n-1 elementos
n=4

1234
1243
1324
1342
1423
1432
2134
2143
2314
2341
2413
2431
3124
3142
3214
3241
3412
3421
4123
4132
4213
4231
4312
4321
'''