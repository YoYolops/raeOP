library(dplyr)
library(tidyr)
library(stringr)

# Script para separação do dataframe em categorias pertinentes

exp <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/dados.csv')


# RENOMEAR ALGUMAS COLUNAS

names(exp)[1:4] <- c(
  'data', 'Período', 'Curso', 'Campus'
)

# CONVERTER PERIODO PARA FATOR
exp$Período <- as.factor(exp$Período)

# CRIANDO LISTAS COM OS VALORES A SEREM SEPARADOS NO FUTURO
cursos <- c(levels(exp$Curso))
periodos <- c(levels(exp$Período))
campi <- c(levels(exp$Campus))

# SEPARADORA:

  ## ESSA FUNÇÃO PERCORRE UMA COLUNA(analiseCol) DE UM DATAFRAME (dfEntrada) 
  ## COMPARANDO-A COM UM VALOR (comparar) E RETORNA UM DF COMPOSTO PELAS LINHAS
  ## QUE TINHAM O VALOR EXIGIDO(comparar) NA COLUNA EM QUESTÃO (analiseCol)
    ### Pode ser usada para separar qualquer coisa

separadora <- function(dfEntrada, analiseCol, comparar){
  cont <- 0
  val <- NULL
  
  for (i in analiseCol){
    cont = cont + 1
    
    if (i == comparar){
      val <- append(val, cont, after = length(val))
    }
  }
  
  case <- as.data.frame(dfEntrada[c(val),])
  
  string1 <- '~/Documentos/raeOP/data-analysis/Rsrc/'
  string2 <- comparar
  string3 <- '.csv'
  
  address <- str_c(string1, string2, string3)
  
  write.csv(case, address)
}

for (curso in cursos){
  separadora(exp, exp$Curso, curso)
}

for (campus in campi){
  separadora(exp, exp$Campus, campus)
}







