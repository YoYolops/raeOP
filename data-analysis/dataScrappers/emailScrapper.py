from bs4 import BeautifulSoup
import requests

def cleaner(inp):
    inp = inp.replace('Site:', '')
    inp = inp.replace(' ', '')
    retorno = []

    if '/' in inp:
        inp = inp.split('/')
        retorno.append(inp[0])

        if len(inp[1]) > 0:
            retorno.append(inp[1])
        return retorno
    
    if inp[ len(inp) - 1 ] == '.':
        retorno.append(inp[:-1])
        return retorno
    else:
        retorno.append(inp)
        return retorno



urls = open('urls.txt', 'r')

emails = []

for element in urls:

    url = 'https://portal.ufcg.edu.br' + element

    print(f'Coletando e-mail de: {url}')

    nPage = requests.get(url)

    nSoup = BeautifulSoup(nPage.content, 'html.parser')

    brutus = nSoup.body.find('div', class_ = 'layout').main.div.find_all('div')[2].find('div', id = 'content').section.find('div', class_ = 'row-fluid').find('div', class_ = 'item-page').find_all('p')

    for i in brutus:
        if '@' in i.text:
            lTexto = i.text.split()

            for j in lTexto:
                if '@' in j:
                    emails.append(j)

urls.close()

print('Limpando e gravando dados em disco...')
arquivo = open('emails.txt', 'w')

for email in emails:
    cleanedEmail = cleaner(email)

    for item in cleanedEmail:
        arquivo.write(item+'\n')

arquivo.close()

print('Dados gravados em "emails.txt"')