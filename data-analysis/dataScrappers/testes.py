from bs4 import BeautifulSoup
import requests

url = 'https://portal.ufcg.edu.br/graduacao/cursos-graduacao/1304-arquitetura-e-urbanismo.html'

print(f'Coletando e-mail de: {url}')

nPage = requests.get(url)

nSoup = BeautifulSoup(nPage.content, 'html.parser')

brutus = nSoup.body.find('div', class_ = 'layout').main.div.find_all('div')[2].find('div', id = 'content').section.find('div', class_ = 'row-fluid').find('div', class_ = 'item-page').find_all('p')

emails = []
for i in brutus:
    if '@' in i.text:
        lTexto = i.text.split()

        for j in lTexto:
            if '@' in j:
                emails.append(j)

print(emails)