<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - Nästa generation av en mångsidig verktygslåda designad för programmerare
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">Förhandsgranska Insider-versionen av LafTools</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: Den här sidan är genererad från LafTools internt.</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  [Deutsch](/docs/de/README.md)  |  [Español](/docs/es/README.md)  |  [Français](/docs/fr/README.md)  |  [日本語](/docs/ja/README.md)  |  [한국어](/docs/ko/README.md) | [More](/docs/) <br/>

# 🪄 Snabbtitt

För att snabbt kunna använda dessa funktioner har vi distribuerat en stabil onlinewebbplats i USA och CN-regionen som du kan använda. De flesta verktyg är tillgängliga på våra onlinewebbplatser förutom vissa verktyg som är beroende av specifika OS-funktioner.

- 🇺🇸 USA: [laftools.dev](https://laftools.dev)
- 🇨🇳 Endast fastlandet i Kina: [laftools.cn](https://laftools.cn)

# 💡 Introduktion

Du kanske undrar varför vi är fast beslutna att utveckla denna verktygslåda eftersom det finns många verktyg som kan användas på Internet. De flesta verktyg vi har tillhandahållit kan faktiskt lätt hittas på Internet, såsom codec, formatterare, översättning, QR-kod, etc... Det är dock inte det mest bekväma och effektiva sättet att använda dessa verktyg.

Har du någonsin stött på problemen nedan när du använde dessa onlineverktyg?

- Ingen offlinetillgänglighet.
- Inget globalt mörkt tema.
- Ingen produktiv UI-stil.
- Dålig nätverksprestanda.
- Upprörande reklam.
- Problem med dataläckage.

Om svaret på något av ovanstående är ja, bör du överväga att prova vår verktygslåda. Den erbjuder följande funktioner:

- FOSS för alltid
- Lättvikts körtid
- Fullständigt plattformsstöd (inklusive ARMv8)
- Fullständigt GPT-liknande stöd
- Mycket integrerad med produktivt användargränssnitt
- Tillgängliga Docker-bilder och Portable Edition
- Extra hjälpmedel såsom anteckningar, manualer, etc...

# 🌠 Förhandsvisning

> LafTools är fortfarande under utveckling, dess användargränssnitt, beroenden eller förutsättningar kan ändras vid behov.

### Förhandsvisning:

[Online Preview](http://laftools.dev)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🚀 Komma igång

## 1. Konfigurera systemmiljön

För enkelhetens skull, låt oss säga att du har klonat det här arkivet till antingen `C:\Usersjerry\project\laftools-repo` på Windows eller `/Users/jerry/projects/laftools-repo` på Linux/MacOS, då bör du deklarera env och ställa in config nedan i din fil **~/.bashrc* *, eller helt enkelt köra dem innan du kör något kommando.

Om du använder Windows OS, se till att alla kommandon körs i git-bash, läs mer se [BIDRAG](/docs/sv/CONTRIBUTION.md). Bortsett från detta rekommenderas det att undvika att använda blanksteg eller icke-engelska tecken i filsökvägen där detta projekt finns.

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

## 2. Kompilera och kör

```bash
# installera det globala biblioteket
npm i -g pnpm ts-node typescript

# installera projektdeps
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# köra kärntjänst
npm run fe-web

```

## 3. Bygga

```bash
cd pipeline
./build-all.sh "v1.9.9-beta"
```

# 🌱 Vad är det med namnet?

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Fantastic

In essence, LafTools is a suite that offers a series of linked, asynchronous, and fantastic toolsets.

Rest assured, this project will evolve in remarkable and fantastic ways over time. This project needs more time, just like wine, gets better with time.

# 📑 Andra material

Nedan finns ytterligare material som du kan ta en titt på om du vill veta mer om detta projekt:

- [FAQ](/docs/sv/FAQ.md)
- [BIDRAG](/docs/sv/CONTRIBUTION.md)
- [För utvecklare i Kina](/devtools/notes/common/issues.md)

# 💐 Icons

Vi skulle uppskatta talangartister som tillhandahåller nedanstående vackra ikoner:
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 Erkännanden

Detta projekt hade inte varit möjligt utan fantastiska projekt med öppen källkod som jag personligen skulle vilja uttrycka min djupaste tacksamhet till:

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

För visst finns det andra projekt med öppen källkod som har gynnat och underlättat detta projekt, som jag inte kunde beskriva i den här delen; Utan dessa projekt och dessa talangutvecklares insatser hade LafTools inte varit möjligt.

Thank you!

Ryan Laf  
2 februari 2023

# 🪪 License

Detta projekt är skyddat under GNU Affero General Public License, se LICENS-filen för mer information.
