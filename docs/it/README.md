<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - La prossima generazione di un toolbox versatile progettato per i programmatori
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">Anteprima della versione Insider di LafTools</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: Questa pagina è generata internamente da LafTools.</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  [Deutsch](/docs/de/README.md)  |  [Español](/docs/es/README.md)  |  [Français](/docs/fr/README.md)  |  [日本語](/docs/ja/README.md)  |  [한국어](/docs/ko/README.md) | [More](/docs/) <br/>

# 🪄 Occhiata veloce

Per utilizzare rapidamente queste funzioni, abbiamo implementato un sito Web online stabile nelle regioni degli Stati Uniti e della Carolina del Nord affinché tu possa utilizzarlo. La maggior parte degli strumenti sono disponibili nei nostri siti Web online, ad eccezione di alcuni strumenti che si basano su funzionalità specifiche del sistema operativo.

- 🇺🇸 stato unito: [laftools.dev](https://laftools.dev)
- 🇨🇳 Solo Cina continentale: [laftools.cn](https://laftools.cn)

# 🌱 Cosa significa il nome?

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Fantastic

In essence, LafTools is a suite that offers a series of linked, asynchronous, and fantastic toolsets.

Rest assured, this project will evolve in remarkable and fantastic ways over time. This project needs more time, just like wine, gets better with time.

# 💡 introduzione

Potresti chiederti perché siamo determinati a sviluppare questo toolbox poiché esistono numerosi strumenti che possono essere utilizzati su Internet. In effetti, la maggior parte degli strumenti che abbiamo fornito possono essere facilmente reperiti su Internet, come codec, formattatore, traduzione, codice QR, ecc… Tuttavia, non è l'approccio più comodo ed efficiente per utilizzare questi strumenti.

Hai mai riscontrato i seguenti problemi durante l'utilizzo di questi strumenti online?

- Nessuna accessibilità offline.
- Nessun tema oscuro globale.
- Nessuno stile dell'interfaccia utente produttivo.
- Scarse prestazioni di rete.
- Pubblicità sconvolgenti.
- Problema di perdita di dati.

Se la risposta a una qualsiasi delle domande precedenti è sì, allora dovresti considerare di provare la nostra cassetta degli attrezzi. Offre le seguenti funzionalità:

- FOSS per sempre
- Autonomia leggera
- Supporto completo della piattaforma (incluso ARMv8)
- Supporto completo simile a GPT
- Altamente integrato con un'interfaccia utente produttiva
- Immagini Docker disponibili ed edizione portatile
- Supporti extra come appunti, manuali, ecc...

# 🌠 Anteprima

> LafTools è ancora in fase di sviluppo, la sua interfaccia utente, le dipendenze o i prerequisiti potrebbero essere modificati in base alle necessità.

### Anteprima:

[Online Preview](http://laftools.dev)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🚀 Iniziare

## 1. Imposta l'ambiente di sistema

Per semplicità, supponiamo che tu abbia clonato questo repository su `C:\Usersjerry\project\laftools-repo` su Windows o `/Users/jerry/projects/laftools-repo` su Linux/MacOS, quindi dovresti dichiarare env e impostare config di seguito nel tuo file **~/.bashrc* *, o semplicemente eseguirli prima di eseguire qualsiasi comando.

Se utilizzi il sistema operativo Windows, assicurati che tutti i comandi siano eseguiti in git-bash, per ulteriori informazioni fai riferimento a [CONTRIBUTO](/docs/it/CONTRIBUTION.md). Oltre a ciò, si consiglia di evitare di utilizzare spazi bianchi o caratteri non inglesi nel percorso del file in cui si trova questo progetto.

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

## 2. Compila ed esegui

```bash
# installare la libreria globale richiesta
npm i -g pnpm ts-node typescript

# installa le dipendenze del progetto
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# eseguire il servizio principale
npm run fe-web

```

## 3. Costruire

```bash
cd pipeline
./build-all.sh "v1.9.9-beta"
```

# 📑 Altri materiali

Di seguito sono riportati ulteriori materiali a cui puoi dare un'occhiata se desideri saperne di più dettagli su questo progetto:

- [FAQ](/docs/it/FAQ.md)
- [CONTRIBUTO](/docs/it/CONTRIBUTION.md)
- [Per gli sviluppatori cinesi](/devtools/notes/common/issues.md)

# 💐 Icons

Apprezzeremmo gli artisti di talento che fornissero di seguito bellissime icone:
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 Ringraziamenti

Questo progetto non sarebbe stato possibile senza fantastici progetti open source ai quali vorrei esprimere personalmente la mia più profonda gratitudine:

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

Sicuramente ci sono altri progetti open source che hanno beneficiato e facilitato questo progetto, che non ho potuto dettagliare in questa parte; Senza questi progetti e gli sforzi di questi talentuosi sviluppatori, LafTools non sarebbe stato possibile.

Thank you!

Ryan Laf  
2 febbraio 2023

# 🪪 License

Questo progetto è protetto dalla GNU Affero General Public License, per maggiori dettagli consultare il file LICENSE.
