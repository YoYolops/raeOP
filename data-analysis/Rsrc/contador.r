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
Gcinco <- summary(exp[,6])
Gseis <- summary(exp[,7])
Gsete <- summary(exp[,8])
Goito <- summary(exp[,9])
GnoveGeral <- summary(exp[,10])
Gdez <- summary(exp[,11])
Gonze <- summary(exp[,12])
Gdoze <- summary(exp[,13])
GtrezeGeral <- summary(exp[,14])
GcatorzeGeral <- summary(exp[,15])
GquinzeGeral <- summary(exp[,16])
GdezesseisGeral <- summary(exp[,17])
Gdezesete <- summary(exp[,18])
GdezoitoGeral <- summary(exp[,19])
GdezenoveGeral <- summary(exp[,20])

###

DIREITO <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Direito.csv')
ENGCIVIL <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Engenharia Civil.csv')
CIENCDACOMPUTAÇAO <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Ciência da Computação.csv')
ENGELETRICA <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Engenharia Elétrica.csv')
GEOGRAFIA <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Geografia.csv')
CIENCBIOLOGICAS <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Ciências Biológicas.csv')
NUTRICAO <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Nutrição.csv')
FARMACIA <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Farmácia.csv')
ENFERMAGEM <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Enfermagem.csv')
MATEMATICA <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Matemática.csv')
HISTORIA <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/História.csv')
MEDICINA <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Medicina.csv')
DESIGN <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Design.csv')
QUIMICA <- read.csv('~/Documentos/raeOP/data-analysis/Rsrc/pCurso/Química.csv')

# G4 por Curso
summary(DIREITO[,6])
summary(ENGCIVIL[,6])
summary(CIENCDACOMPUTAÇAO[,6])
summary(ENGELETRICA[,6])
summary(GEOGRAFIA[,6])
summary(CIENCBIOLOGICAS[,6])
summary(NUTRICAO[,6])
summary(FARMACIA[,6])
summary(ENFERMAGEM[,6])
summary(MATEMATICA[,6])
summary(HISTORIA[,6])
summary(MEDICINA[,6])
summary(DESIGN[,6])
summary(QUIMICA[,6])

# G9 por Curso
summary(DIREITO[,11])
summary(ENGCIVIL[,11])
summary(CIENCDACOMPUTAÇAO[,11])
summary(ENGELETRICA[,11])
summary(GEOGRAFIA[,11])
summary(CIENCBIOLOGICAS[,11])
summary(NUTRICAO[,11])
summary(FARMACIA[,11])
summary(ENFERMAGEM[,11])
summary(MATEMATICA[,11])
summary(HISTORIA[,11])
summary(MEDICINA[,11])
summary(DESIGN[,11])
summary(QUIMICA[,11])

# G11 por Curso
summary(DIREITO[,13])
summary(ENGCIVIL[,13])
summary(CIENCDACOMPUTAÇAO[,13])
summary(ENGELETRICA[,13])
summary(GEOGRAFIA[,13])
summary(CIENCBIOLOGICAS[,13])
summary(NUTRICAO[,13])
summary(FARMACIA[,13])
summary(ENFERMAGEM[,13])
summary(MATEMATICA[,13])
summary(HISTORIA[,13])
summary(MEDICINA[,13])
summary(DESIGN[,13])
summary(QUIMICA[,13])

# G13 por Curso
summary(DIREITO[,15])
summary(ENGCIVIL[,15])
summary(CIENCDACOMPUTAÇAO[,15])
summary(ENGELETRICA[,15])
summary(GEOGRAFIA[,15])
summary(CIENCBIOLOGICAS[,15])
summary(NUTRICAO[,15])
summary(FARMACIA[,15])
summary(ENFERMAGEM[,15])
summary(MATEMATICA[,15])
summary(HISTORIA[,15])
summary(MEDICINA[,15])
summary(DESIGN[,15])
summary(QUIMICA[,15])

############################################
valores <- NA

summary(DIREITO[,20])
summary(ENGCIVIL[,20])
summary(CIENCDACOMPUTAÇAO[,20])
summary(ENGELETRICA[,20])
summary(GEOGRAFIA[,20])
summary(CIENCBIOLOGICAS[,20])
summary(NUTRICAO[,20])
summary(FARMACIA[,20])
summary(ENFERMAGEM[,20])
summary(MATEMATICA[,20])
summary(HISTORIA[,20])
summary(MEDICINA[,20])
summary(DESIGN[,20])
summary(QUIMICA[,20])


geraLista <- function (z){
  valores <- NA
  j <- ''
  for (i in summary(DIREITO[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(ENGCIVIL[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(CIENCDACOMPUTAÇAO[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(ENGELETRICA[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(GEOGRAFIA[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(CIENCBIOLOGICAS[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(NUTRICAO[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(FARMACIA[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(ENFERMAGEM[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(MATEMATICA[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(HISTORIA[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(MEDICINA[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(DESIGN[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  j <- ''
  for (i in summary(QUIMICA[,z])){
    j <- c(str_c(j, ',',i))
  }
  valores <- c(valores, j)
  
  for (i in valores){
    print(i)
  }
}

[28,9,17,18,40,26],
[36,51,5,3,27,6],
[49,43,10,1,8,3],
[35,41,9,1,19,7],
[43,18,6,2,29,1],
[41,13,4,2,25,7],
[28,8,3,6,34,11],
[23,12,4,8,29,6],
[29,15,6,3,17,3],
[31,17,7,15,1],
[30,27,4,5],
[11,3,1,22,14,12],
[25,16,3,1,5,3],
[21,7,2,2,11,3]







