library(dplyr)
library(tidyr)
library(stringr)

# Script para separação do dataframe em categorias pertinentes

exp <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/cobaia/incomplete.csv')


# RENOMEAR ALGUMAS COLUNAS

names(exp)[1:4] <- c(
  'data', 'Período', 'Curso', 'Campus'
)

# CONVERTER PERIODO PARA FATOR
exp$Período <- as.factor(exp$Período)

# CRIANDO LISTAS COM OS VALORES A SEREM SEPARADOS NO FUTURO
cursos <- list(levels(exp$Curso))
periodos <- list(levels(exp$Período))
campi <- list(levels(exp$Campus))

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
  
  as.data.frame(dfEntrada[c(val),])
}


