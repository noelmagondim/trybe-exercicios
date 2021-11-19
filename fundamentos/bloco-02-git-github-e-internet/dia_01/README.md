#DIA 1 - Git & GitHub - O que é e para que serve

O objetivo desses exercícios é aprender a instalar o git no terminal, configurar para que ele não fique pedindo senha

##Parte 1 - Instalação e configuração

-Para instalar o git no linux: sudo apt-get install git-all

-Para configurar o git afim de não solicitar senha:
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br

-Esse comando define o editor do .gitconfig como o VS Code , que é o editor que você usará ao longo curso:
git config --global core.editor "code --wait"

-Para abrir o VC COde: code .gitconfig

-Verificar a versão do git instalada: git --version

-Verificar se nome e e-mail estão cadastrados corretos: git config --list

##Parte 2 - Criar conta no GitHub

##Parte 3 - Adicionando uma chave SSH na sua conta do GitHub

-Criar a chave: ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com" // Após esse comando pressione enter para confirmar, o próximo passo é digitar uma senha segura

-Adicionando sua chave SSH ao ssh-agent: 
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa

-Adicionando a chave SSH na sua conta do GitHub:
cat ~/.ssh/id_rsa.pub // copie a chave na saída do terminal e coloque no GitHub

No canto superior direito do GitHub , clique na sua foto de perfil e clique em Settings ;
Na barra lateral esquerda, clique em SSH and GPG keys ;
Clique em New SSH key ou Add SSH key ;
No campo Título , adicione um descrição para a nova chave;
Cole sua chave dentro do campo Key ;
Clique em Add SSH key ;
Caso seja solicitado, confirme sua senha do Github.

##Parte 4 - O seu repositório no GitHub

-Primeiro vou criar um arquivo trybe-skills.txt e colocar dentro as informações:

O que eu vou aprender na Trybe:

- Unix
- Bash
- Git

-Tranformando a pasta em um repositório git:

Retorne para a raiz da pasta de exercícios;
Inicialize o repositório com git init ;
Crie um commit inicial utilizando:
git add .
git commit -m "Initial commit"

Vá até o seu GitHub e crie um repositório público , onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;
Dê ao repositório um nome descritivo, como por exemplo trybe-exercicios ;
Clique no botão SSH e então copie a URL do repositório;
Execute o comando para adicionar a URL ao repositório local git remote add origin "URL_DO_REPOSITÓRIO" ;
Verifique se tudo está certo com sua URL remota utilizando o comando git remote -v 
Execute o comando git push origin master no terminal;
Vá até o seu GitHub e verifique as novas alterações.

-Após cada alteração sempre fazer um commit e um git push para atualizar no repositório local



















