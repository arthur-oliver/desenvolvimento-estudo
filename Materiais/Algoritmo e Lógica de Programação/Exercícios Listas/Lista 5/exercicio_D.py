cont = 0
for sortudo in range (18644, 33088):
    if '2' in str(sortudo) and '7'  not in str(sortudo):
        cont=cont+1
print(f'Há {cont} números sortudos!')