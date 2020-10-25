inp = 'asdasdaadasdasdasdasd/123123123123'

if '/' in inp:
    inp = inp.split()
    retorno.append(inp[0])

    if len(inp[1]) > 0:
        retorno.append(inp[1])

if inp[ len(inp) - 1 ] == '.':
    retorno.append(inp[:-1])

print(retorno)


