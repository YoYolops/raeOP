library(dplyr)
library(tidyr)
library(stringr)


exp <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/dados.csv')


# RENOMEAR ALGUMAS COLUNAS

names(exp)[1:4] <- c(
  'data', 'Período', 'Curso', 'Campus'
)

# CONVERTER PERIODO PARA FATOR
exp$Período <- as.factor(exp$Período)

cursos <- c(levels(exp$Curso))
periodos <- c(levels(exp$Período))
campi <- c(levels(exp$Campus))



val <- NULL
for (i in summary(exp$Curso)){
  val <- c(val, i)
}

label <- NULL
for (i in cursos){
  print(i)
}

tt1 <- sort(summary(exp$Campus), decreasing = TRUE)
tt2 <- sort(summary(exp$Curso), decreasing = TRUE)
###

p41 <- summary(exp[,5])
Gtres <- summary(exp[,4])
