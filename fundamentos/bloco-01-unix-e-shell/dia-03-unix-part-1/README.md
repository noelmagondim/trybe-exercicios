# DIA 3 - Criação de arquivos e diretórios

O objetivo dos exercÃ­cios desse dia foi colocar em prÃ¡tica o que aprendemos sobre os comandos básicos no unix and shell.

Os requisitos do exercÃ­cio sÃ£o:

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele

R =
mkdir unix_tests // mkdir é utilizado para criar um diretório
ls // ls é utilizado para vizualisar 
cd unix_tests // cd é utilizado para entrar no diretório

2. Crie um arquivo de texto com o nome trybe.txt

R =
touch trybe.txt // touch é utilizado para criar um arquivo vazio
ls 

3. Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt 

R =
cp trybe.txt trybe_backup.txt // cp utilizado para copiar

4. Renomeie o arquivo trybe.txt 

R =
mv trybe.txt trybe2.txt // mv serve para mover ou renomear

5. Dentro de unix_tests , crie um novo diretório chamado backup 

R =
mkdir backup

6. Mova o arquivo trybe_backup.txt para o diretório backup 
Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

R =
mv trybe_backup.txt backup

7. Dentro de unix_tests , crie um novo diretório chamado backup2

R =
mkdir backup2

8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2

R =
mv backup/trybe_backup.txt backup2

9. Apague a pasta backup 

R =
rmdir backup // rmdir utilizado para apagar diretórios vazios

10. Renomeie a pasta backup2 para backup

R =
mv backup2 backup

11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

R = 
pwd -l

12. Apague o diretório backup 

R = 
rm -rd backup // rm não apaga diretórios que não estão vazios mas -r significa recursive e sim apaga. -d significa diretório. 

13. Limpe o terminal.

R = 
clear

Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :

Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

14. Mostre na tela as 5 primeiras skills do arquivo skills.txt 

15. Mostre na tela as 4 últimas skills do arquivo skills.txt 

16. Apague todos os arquivos que terminem em .txt 

# DIA 3 - Parte II - Manipulação & Busca

1. Na pasta unix-tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:

R = 
  curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

2. Mostre todo o conteúdo do arquivo countries.txt na tela.

R =
cat coutries.txt // cat serve para mostrar todos

3. Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia

R = 
less coutries.txt // less serve para mostrar tudo, mas página por página

4. Mostre novamente o conteúdo de countries.txt pagina por pagina, mas agora utilize um comando para buscar por Zambia 

R = 
less coutries.txt // ao fim da págia é só coloca /local
/Zambia

5. Busque por Brazil no countries.txt 

R =
grep Brazil coutries.txt // grep vai buscar uma palavra específica

6. Busque novamente por brazil , mas agora utilizando o lower case

R =
grep -i brazil coutrins.txt // -i tira o kayse sensitive

Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.

7. Busque pelas frases que não contenham a palavra fox 

R = grep -v fox phrases.txt // -v vai procurar palavras que não contenham a chave

8. Conte o número de palavras do arquivo phrases.txt 

R =
wc -w phrases.txt // wc conta e -w conta só as palavras

9. Conte o número de linhas do arquivo phrases.txt 

R =
wc -l phrases.txt // -l conta só as linhas

10. Crie os arquivos empty.tbt e empty.pdf

R =
touch empty.tbt
touch empty.pdf

11. Liste todos os arquivos do diretório unix_tests

R =
ls -l

12. Liste todos os arquivos que terminem com txt

R =
ls -l *txt // * significa todos

13. Liste todos os arquivos que terminem com tbt ou txt 

R =
ls -l *tbt *txt

14. Acesse o manual do comando ls 

R =
man ls // man é utilizado para ver o manual de qualquer comando
