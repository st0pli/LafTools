<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - Den neste generasjonen av en allsidig verktøykasse designet for programmerere
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">Forhåndsvis Insider-versjonen av LafTools</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: Denne siden er generert fra LafTools internt.</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  [Deutsch](/docs/de/README.md)  |  [Español](/docs/es/README.md)  |  [Français](/docs/fr/README.md)  |  [日本語](/docs/ja/README.md)  |  [한국어](/docs/ko/README.md) | [More](/docs/) <br/>

# 🪄 Hurtigvisning

For raskt å bruke disse funksjonene har vi distribuert en stabil nettside i USA og CN-regionen som du kan bruke. De fleste verktøyene er tilgjengelige på nettsidene våre, bortsett fra noen verktøy som er avhengige av spesifikke OS-funksjoner.

- 🇺🇸 forent stat: [laftools.dev](https://laftools.dev)
- 🇨🇳 Kun fastlandet i Kina: [laftools.cn](https://laftools.cn)

# 💡 Introduksjon

Du lurer kanskje på hvorfor vi er fast bestemt på å utvikle denne verktøykassen, siden det er mange verktøy som kan brukes på Internett. De fleste verktøyene vi har levert kan faktisk enkelt finnes på Internett, for eksempel kodek, formatering, oversettelse, QR-kode, osv... Det er imidlertid ikke den mest komfortable og effektive tilnærmingen til å bruke disse verktøyene.

Har du noen gang møtt problemene nedenfor mens du brukte disse nettverktøyene?

- Ingen frakoblet tilgjengelighet.
- Ikke noe globalt mørkt tema.
- Ingen produktiv UI-stil.
- Dårlig nettverksytelse.
- Opprørende annonser.
- Problem med datalekkasje.

Hvis svaret på noen av de ovennevnte er ja, bør du vurdere å prøve verktøykassen vår. Den tilbyr følgende funksjoner:

- FOSS for alltid
- Lett kjøretid
- Full plattformstøtte (inkludert ARMv8)
- Full GPT-lignende støtte
- Svært integrert med produktivt brukergrensesnitt
- Tilgjengelige Docker Images og Portable Edition
- Ekstra hjelpere som notater, manualer osv...

# 🌱 Hva er det med navnet?

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Fantastic

In essence, LafTools is a suite that offers a series of linked, asynchronous, and fantastic toolsets.

Rest assured, this project will evolve in remarkable and fantastic ways over time. This project needs more time, just like wine, gets better with time.

# 🌠 Forhåndsvisning

> LafTools er fortsatt under utvikling, brukergrensesnittet, avhengighetene eller forutsetningene kan endres etter behov.

### Forhåndsvisning:

[Online Preview](http://laftools.dev)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🚀 Starter

## 1. Sett opp systemmiljø

For enkelhets skyld, la oss si at du har klonet dette depotet til enten `C:\Usersjerry\project\laftools-repo` på Windows eller `/Users/jerry/projects/laftools-repo` på Linux/MacOS, så bør du erklære env og angi config nedenfor i filen **~/.bashrc* *, eller bare kjør dem før du kjører en kommando.

Hvis du bruker Windows OS, sørg for at alle kommandoer utføres i git-bash, les mer, se [BIDRAG](/docs/no/CONTRIBUTION.md). Bortsett fra dette, anbefales det å unngå å bruke mellomrom eller ikke-engelske tegn i filbanen der dette prosjektet er plassert.

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

## 2. Kompiler og kjør

```bash
# installer det nødvendige globale biblioteket
npm i -g pnpm ts-node typescript

# installere prosjektdeps
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# drive kjernetjeneste
npm run fe-web

```

## 3. Bygge

```bash
cd pipeline
./build-all.sh "v1.9.9-beta"
```

# 📑 Andre materialer

Nedenfor er ytterligere materialer som du kan ta en titt på hvis du ønsker å lære mer detaljer om dette prosjektet:

- [FAQ](/docs/no/FAQ.md)
- [BIDRAG](/docs/no/CONTRIBUTION.md)
- [For Kina-utviklere](/devtools/notes/common/issues.md)

# 💐 Icons

Vi vil sette pris på talentartister som har gitt under vakre ikoner:
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 Anerkjennelser

Dette prosjektet ville ikke vært mulig uten fantastiske åpen kildekode-prosjekter som jeg personlig vil uttrykke min dypeste takknemlighet til:

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

Sikkert er det andre åpen kildekode-prosjekter som har vært til nytte og tilrettelagt for dette prosjektet, som jeg ikke kunne beskrive i denne delen; Uten disse prosjektene og disse talentutviklernes innsats hadde ikke LafTools vært mulig.

Thank you!

Ryan Laf  
2. februar 2023

# 🪪 License

Dette prosjektet er beskyttet under GNU Affero General Public License, vennligst se LICENSE-filen for flere detaljer.
