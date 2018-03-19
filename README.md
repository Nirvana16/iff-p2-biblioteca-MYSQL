Sistema de Gest�o de Bibliotecas. 
Projeto realizado para a disciplina de Laborat�rio de Orienta��o a Objeto, IFF - Campus Centro - 2017.2

---------------------------------------------------------------------------------------

Trata-se de um mini sistema para gerenciamento de livros na Base de dados. Elaborado com o Framework Spring com a utiliza��o da linguagem Java e outros recursos como:
BootStrap
JQuery
Spring Security 
Spring Data
Upload de Imagem

---------------------------------------------------------------------------------------

Essa aplica��o esta dispon�vel em : https://iff2018-loo.herokuapp.com/
Tamb�m existe uma vers�o no meu GitHub com o Deploy no heroku realizado com Postgree : https://github.com/Nirvana16/iff_p2_biblioteca

---------------------------------------------------------------------------------------
Observa��es: 

1) Usuario e senha para testes da aplica��o: 
*** usuario: admin
*** Senha: 1

*** usuario: user
*** senha : 1

2) Levei algumas horas para perceber que havia feito todo meu projeto utilizado o empacotamento em WAR, essa forma ocasionou um erro de incompatibilidade no heroku resultando na falha ao startar a aplica��o (Erro H10 e H14) Acabei tendo de mudar meu empacotamento para JAR de forma a ficar compat�vel com Drive indicado no meu Procfile. 

3) Mantive essa vers�o utilizando Mysql pois queria testar como funciona esse Banco de dados dentro do heroku com o ClearDBMySQL 

4) O pacote storage � apenas uma firula que coloquei, trata-se de um servi�o de armazenamento de  arquivos o qual queria implantar. 
4.1 - Dentro do projeto existe uma view chamada UP que n�o esta mapeada, por�m a mesma � funcional. Nela o usu�rio pode subir qualquer tipo de ficheiro para servidor A ideia iniciar era permitir que usu�rio subisse livros em PDF, por�m n�o tive tempo h�bil para terminar nessa implementa��o, apesar disso, o upload de ficheiros esta totalmente funcional na view supracitada.

---------------------------------------------------------------------------------------

"Confie no Senhor de todo o seu cora��o e n�o se apoie em seu pr�prio entendimento; reconhe�a o Senhor em todos os seus caminhos,
e ele endireitar� as suas veredas." Prov�rbios 3:5-6


