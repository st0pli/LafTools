<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - A próxima geração de uma caixa de ferramentas versátil projetada para programadores
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">Visualize a versão interna do LafTools</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: Esta página é gerada internamente pelo LafTools.</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  [Deutsch](/docs/de/README.md)  |  [Español](/docs/es/README.md)  |  [Français](/docs/fr/README.md)  |  [日本語](/docs/ja/README.md)  |  [한국어](/docs/ko/README.md) | [More](/docs/) <br/>

# 🪄 Olhada rápida

Para usar essas funções rapidamente, implantamos um site on-line estável nas regiões dos EUA e CN para você usar. A maioria das ferramentas está disponível em nossos sites on-line, exceto algumas ferramentas que dependem de recursos específicos do sistema operacional.

- 🇺🇸 Estado unido: [laftools.dev](https://laftools.dev)
- 🇨🇳 Apenas China Continental: [laftools.cn](https://laftools.cn)

# 💡 Introdução

Você pode se perguntar por que estamos determinados a desenvolver esta caixa de ferramentas, já que existem inúmeras ferramentas que podem ser usadas na Internet. Na verdade, a maioria das ferramentas que disponibilizamos podem ser facilmente encontradas na Internet, como codec, formatador, tradução, QR Code, etc… No entanto, não é a abordagem mais confortável e eficiente para utilizar estas ferramentas.

Você já encontrou os problemas abaixo ao usar essas ferramentas online?

- Sem acessibilidade off-line.
- Nenhum tema escuro global.
- Nenhum estilo de UI produtiva.
- Mau desempenho da rede.
- Anúncios perturbadores.
- Problema de vazamento de dados.

Se a resposta a alguma das perguntas acima for sim, você deve considerar experimentar nossa caixa de ferramentas. Ele oferece os seguintes recursos:

- Software Livre para Sempre
- Tempo de execução leve
- Suporte completo à plataforma (incluindo ARMv8)
- Suporte completo semelhante ao GPT
- Altamente integrado com UI produtiva
- Imagens Docker disponíveis e edição portátil
- Ajudantes extras, como notas, manuais, etc.

# 🌠 Visualização

> LafTools ainda está em desenvolvimento, sua UI, dependências ou pré-requisitos podem ser alterados conforme necessário.

### Visualização:

[Online Preview](http://laftools.dev)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🚀 Começando

## 1. Configurar ambiente do sistema

Para simplificar, digamos que você clonou este repositório para `C:\Usersjerry\project\laftools-repo` no Windows ou `/Users/jerry/projects/laftools-repo` no Linux/MacOS, então você deve declarar env e definir config abaixo em seu arquivo **~/.bashrc* *, ou simplesmente execute-os antes de executar qualquer comando.

Se você estiver usando o sistema operacional Windows, certifique-se de que todos os comandos sejam executados no git-bash. Para saber mais, consulte [CONTRIBUIÇÃO](/docs/pt/CONTRIBUTION.md). Além disso, é recomendável evitar o uso de espaços em branco ou caracteres que não sejam do inglês no caminho do arquivo onde este projeto está localizado.

**Env for Windows:**

```bash
git config core.ignorecase false
export LAFTOOLS_ROOT="C:\users\jerry\project\laftools-repo"
export PATH=$PATH:$LAFTOOLS_ROOT\dev\source\windows-bin
```

**Env for Linux/MacOS:**

```bash
export LAFTOOLS_ROOT=/users/jerry/projects/laftools-repo
```

## 2. Compilar e executar

```bash
# instale a biblioteca global necessária
npm i -g pnpm ts-node typescript

# instalar dependências do projeto
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# executar o serviço principal
npm run fe-web

```

## 3. Construir

```bash
cd pipeline
./build-all.sh "v1.9.9-beta"
```

# 🌱 O que há com o nome?

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Fantastic

In essence, LafTools is a suite that offers a series of linked, asynchronous, and fantastic toolsets.

Rest assured, this project will evolve in remarkable and fantastic ways over time. This project needs more time, just like wine, gets better with time.

# 📑 Outros materiais

Abaixo estão outros materiais que você pode dar uma olhada se quiser saber mais detalhes sobre este projeto:

- [Perguntas frequentes](/docs/pt/FAQ.md)
- [CONTRIBUIÇÃO](/docs/pt/CONTRIBUTION.md)
- [Para desenvolvedores da China](/devtools/notes/common/issues.md)

# 💐 Icons

Gostaríamos de agradecer aos artistas talentosos que forneceram os belos ícones abaixo:
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 Reconhecimentos

Este projeto não teria sido possível sem incríveis projetos de código aberto aos quais gostaria de expressar pessoalmente minha mais profunda gratidão:

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

Com certeza existem outros projetos open source que beneficiaram e facilitaram este projeto, que não pude detalhar nesta parte; Sem esses projetos e os esforços desses desenvolvedores de talentos, o LafTools não teria sido possível.

Thank you!

Ryan Laf  
2 de fevereiro de 2023

# 🪪 License

Este projeto está protegido pela Licença Pública Geral GNU Affero. Consulte o arquivo LICENSE para obter mais detalhes.
