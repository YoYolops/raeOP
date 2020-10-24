from bs4 import BeautifulSoup
import requests

### >  BLOCO 1/ coleta as URLs de todas as páginas que possuem os emails das coordenações < ###

# Faz a requisição http
page = requests.get('https://portal.ufcg.edu.br/graduacao.html')

# Cria a sopa de conteúdo HTML
soup = BeautifulSoup(page.content, 'html.parser')

# Salva em blockBrutus a seção relevante
blockBrutus = soup.body.find('div', class_ = 'layout').main.find('div', class_ = 'container').find_all('div', class_ = 'row-fluid')

blockBrutus.pop(0)
blockBrutus.pop(2)
blockBrutus.pop(3)

# Retira tags irrelevantes de blockBrutus e salva o resultado em softBlcks
softBlocks = blockBrutus[0].find('div', class_ = 'row-fluid').find('div', class_ = 'row-fluid module').find('div', id = 'cursos').find('div', class_ = 'container2')

# Cria uma lista com todas as divs que contêm informação desejada
cursos = softBlocks.find_all('div')

# Retira a primeira div, que é inútil
cursos.pop(0)

# Percorre cada item da lista, coletando a informação e salvando em outra lista
urls = []
for i in cursos:
    urls.append(i.p.strong.a['href'])

### > BLOCO 2/ Acessa cara endereço dentro da lista urls e coleta o email da respectiva coordenação < ###


