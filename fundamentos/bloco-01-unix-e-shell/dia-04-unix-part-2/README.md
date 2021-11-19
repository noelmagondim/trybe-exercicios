# DIA 4 - comando find, operadores, permissões, verificar o status e enviar sinais a processos UNIX

O objetivo dos exercÃ­cios desse dia foi colocar em prÃ¡tica o que aprendemos sobre os comandos básicos no unix and bash.

Os requisitos do exercÃ­cio sÃ£o:

1.Navegue até a pasta unix_tests ;

R =
Utilizar o comando cd para navegar entre os diretórios e ls sempre para verificar o que tem dentro

2. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.

R =
cat > skills2.txt // cat recebe valores como inputse > atribui valores
Internet
Unix
Bash

3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

R = 
cat >> skills2.txt // >> adiciona valores por ultimo
Informática
Programação
JavaScript
Phyton
Css
ctrl+d // para sair e salvar
sort < skills2.txt // sort ordena e < mostra sem alterar

4. Conte quantas linhas tem o arquivo skills2.txt 

R =
wc -l skills2.txt // wc conta e -l somente as linhas

5. Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.

R =

sort < skills2.txt | head -n 3 > top_skills.txt // a | é para redirecionar comandos

6. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

R =
cat > phrases2.txt
Eu sou aluna da trybe
Estou a caminho do sucesso
ctrl+d

7. Conte o número de linhas que contêm as letras br

R =
grep br phrases2.txt | wc -l

8. Conte o número de linhas que não contêm as letras br 

R =
grep -v br phrases2.txt | wc -l

9. Adicione dois nomes de países ao final do arquivo phrases2.txt 

R = 
cat >> phrases2.txt
Brasil
Argentina
ctrl+d

10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

R =
cat phrases2.txt countries.txt > bunch_of_things.txt

11. Ordene o arquivo bunch_of_things.txt 

R = 
sort -o bunch_of_things.txt bunch_of_things.tx // -o diz que quer copiar o arquivo de um para outro

# Parte 2 - Permissões

1. Navegue até a pasta unix_tests ;

R = 
pwd // para você saber onde está e depois ir navegando entre os diretorios usando cd para entrar e ls para ver o que tem dentro

2. Rode o comando ls -l e veja quais as permissões dos arquivos;

R =
ls -l

3. Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;

R = 
chmod a+rw bunch_of_things.txt // a significa all/todos usuários, + para indicar que é para dar permissão, r significa ler e w significa escrever
ls -l

Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

4. Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;

R =
chmod a-w bunch_of_things.txt // - indica que é para tirar a permissão
ls -l

Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

5. Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .

R = chmod 644 bunch_of_things.txt 

Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

//rwx = 111 ( 7 | Acesso Total )
//r-- = 100 ( 4 | Somente Leitura )
//-w- = 010 ( 2 | Somente Escrita )
//--x = 001 ( 1 | Somente Execução )
//rw- = 110 ( 6 | Somente Leitura e Escrita )
//r-x = 101 ( 5 | Somente Leitura e Execução )
//-wx = 011 ( 3 | Somente Escrita e Execução )
//--- = 000 ( 0 | Todos Acessos Negados )

# Parte 3 - Processos & Jobs

1. Liste todos os processos;

R = 
ps

2. Agora use o comando sleep 30 & ;

R =
sleep 30 & // & serve para deixar em segundo plano

2. Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;

R =
ps
kill 16244

3. Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;

R =
sleep 30
ctrl+z
bg

4. Crie um processo em background que rode o comando sleep por 300 segundos.

R =
sleep 300 &

5. Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.

R = 
sleep 200
crtl+z
sleep 100
ctrl+z

6. Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.
Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.

R = 
jobs // vê os processos em execução
fg 1
ctrl+z

7. Retome a execução do processo sleep 100 em background com o comando bg .
R =
bg 3

8. Termine a execução de todos os processos sleep (mate os processos) .

R = 
kill %1
kill %2
kill %3 

# Bonus

1. Se você utiliza o Linux , abra o terminal e execute o comando sudo apt-get install cmatrix , ou para pessoas usuárias de macOS , utilize no terminal brew install cmatrix . Depois, execute o comando cmatrix . Quando estiver se sentindo como o Neo , aperte ctrl+c para voltar ao terminal;

2. No sistema Linux , execute o comando sudo apt-get install fortune , ou no macOS brew install fortune , e após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune , e o operador > ;

3. Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc ;

4. Execute o comando sudo apt-get install sl em um terminal Linux , ou brew install sl em um terminal macOS . Após a instalação, execute o comando sl . Agora tente sl -F ;

5. No sistema Linux , execute o comando sudo apt-get install cowsay , ou brew install cowsay no macOS . Após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt ;

6. Descubra os fatores primos usando o comando factor e em seguida o número 42 ;

7. Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev .
Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅
