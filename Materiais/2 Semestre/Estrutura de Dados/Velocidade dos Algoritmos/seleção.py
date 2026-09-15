def seleção(v):
  r = []
  while v: #len(v) > 0
    m = min(v) 
    r.append(m)
    v.remove(m)
  return r

from time import time
from random import shuffle
v = list(range(20000))
shuffle(v)
t1 = time()
seleção(v)
t2 = time()
print (t2-t1)

