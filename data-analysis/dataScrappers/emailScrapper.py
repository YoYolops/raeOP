from bs4 import BeautifulSoup
import requests


urls = open('urls.txt', 'r')

emails = []

for element in urls:

    url = 'https://portal.ufcg.edu.br' + element

    print(f'Coletando e-mail de: {url}')

    nPage = requests.get(url)

    nSoup = BeautifulSoup(nPage.content, 'html.parser')

    brutus = nSoup.body.find('div', class_ = 'layout').main.div.find_all('div')[2].find('div', id = 'content').section.find('div', class_ = 'row-fluid').find('div', class_ = 'item-page').find_all('p')

    for i in brutus:

        if '@ufcg.edu.br' in i.text:
            lTexto = i.text.split()

            for j in lTexto:
                if '@ufcg.edu.br' in j:
                    emails.append(j)

urls.close()

arquivo = open('emails.txt', 'w')

for email in emails:
    arquivo.write(email+'\n')

arquivo.close()