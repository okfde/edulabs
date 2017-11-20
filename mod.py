import sys

f = open(sys.argv[1]).readlines()
s = []
for l in f:
    if 'kmk-' in l:
        s.append(l)
ns = set([e[:e.rfind('-')].replace('kmk', 'top-kmk') for e in s])
ns = 'top-kmk:\n' + '\n'.join(ns) + '\n'
line = f.index('kmk:\n')
of = open(sys.argv[1] + '-new', 'w')
of.writelines(f[:line] + list(ns) + f[line:])
