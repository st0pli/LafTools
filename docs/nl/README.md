<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - De volgende generatie van een veelzijdige toolbox ontworpen voor programmeurs
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">Bekijk een voorbeeld van de Insider-versie van LafTools</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: Deze pagina wordt intern gegenereerd vanuit LafTools.</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  [Deutsch](/docs/de/README.md)  |  [Español](/docs/es/README.md)  |  [Français](/docs/fr/README.md)  |  [日本語](/docs/ja/README.md)  |  [한국어](/docs/ko/README.md) | [More](/docs/) <br/>

# 🪄 Snelle kijk

Om deze functies snel te kunnen gebruiken, hebben we een stabiele online website in de VS en de CN-regio geïmplementeerd die u kunt gebruiken. De meeste tools zijn beschikbaar op onze online websites, met uitzondering van enkele tools die afhankelijk zijn van specifieke mogelijkheden van het besturingssysteem.

- 🇺🇸 Verenigde staat: [laftools.dev](https://laftools.dev)
- 🇨🇳 Alleen het vasteland van China: [laftools.cn](https://laftools.cn)

# 🔋 Wat is er met de naam?

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Functional

In wezen is LafTools een suite die een reeks gekoppelde, asynchrone en fantastische toolsets biedt.

Wees gerust, dit project zal in de loop van de tijd op opmerkelijke en fantastische manieren evolueren. Dit project heeft meer tijd nodig, net zoals wijn met de tijd beter wordt.

# 💡 Invoering

U vraagt ​​zich misschien af ​​waarom we vastbesloten zijn deze toolbox te ontwikkelen, aangezien er op internet talloze tools kunnen worden gebruikt. De meeste door ons geleverde tools zijn inderdaad gemakkelijk te vinden op internet, zoals codec, formatter, vertaling, QR-code, enz. Het is echter niet de meest comfortabele en efficiënte manier om deze tools te gebruiken.

Bent u ooit de onderstaande problemen tegengekomen tijdens het gebruik van deze online tools?

- Geen offline toegankelijkheid.
- Geen mondiaal donker thema.
- Geen productieve UI-stijl.
- Slechte netwerkprestaties.
- Verontrustende advertenties.
- Probleem met gegevenslekken.

Als het antwoord op een van de bovenstaande vragen ja is, kunt u overwegen onze toolbox te proberen. Het biedt de volgende functies:

- FOSS voor altijd
- Lichtgewicht looptijd
- Volledige platformondersteuning (inclusief ARMv8)
- Volledige GPT-achtige ondersteuning
- Sterk geïntegreerd met productieve gebruikersinterface
- Beschikbare Docker-images en Portable Edition
- Extra hulpmiddelen zoals notities, handleidingen, enz...

# 🌠 Voorbeeld

> LafTools is nog in ontwikkeling, de gebruikersinterface, afhankelijkheden of vereisten kunnen indien nodig worden gewijzigd.

### Voorbeeld:

[Online Preview](http://laftools.dev)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🚀 Aan de slag

## 1. Systeemomgeving instellen

Laten we voor de eenvoud zeggen dat je deze repository hebt gekloond naar `C:\Usersjerry\project\laftools-repo` op Windows of naar `/Users/jerry/projects/laftools-repo` op Linux/MacOS, dan moet je env declareren en config hieronder instellen in je bestand **~/.bashrc* *, of voer ze eenvoudigweg uit voordat u een opdracht uitvoert.

Als je Windows OS gebruikt, zorg er dan voor dat alle opdrachten worden uitgevoerd in git-bash. Voor meer informatie raadpleeg je [CONTRIBUTION](/docs/nl/CONTRIBUTION.md). Daarnaast wordt aanbevolen om geen spaties of niet-Engelse tekens te gebruiken in het bestandspad waar dit project zich bevindt.

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

## 2. Compileren en uitvoeren

```bash
# installeer de vereiste globale bibliotheek
npm i -g pnpm ts-node typescript

# projectdepartementen installeren
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# kerndienst uitvoeren
npm run fe-web

```

## 3. Bouwen

```bash
cd pipeline
./build-all.sh "v1.9.9-beta"
```

# 📑 Andere materialen

Hieronder vindt u nog meer materialen die u kunt bekijken als u meer details over dit project wilt weten:

- [FAQ](/docs/nl/FAQ.md)
- [BIJDRAGE](/docs/nl/CONTRIBUTION.md)
- [Voor Chinese ontwikkelaars](/devtools/notes/common/issues.md)

# 💐 Icons

We zouden talentkunstenaars op prijs stellen die onderstaande prachtige iconen aanleveren:
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 Dankbetuigingen

Dit project zou niet mogelijk zijn geweest zonder geweldige open source-projecten waarvoor ik persoonlijk mijn diepste dankbaarheid wil uiten:

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

Zeker, er zijn andere open source-projecten die dit project hebben geprofiteerd en gefaciliteerd, die ik in dit deel niet in detail kon beschrijven; Zonder deze projecten en de inspanningen van deze talentontwikkelaars zou LafTools niet mogelijk zijn geweest.

# 🎷 Inspiratie

Dit project is voornamelijk geïnspireerd door de volgende muzikanten:

- Joe Pass
- The Manhattan Transfer
- Laura Shigihara
- Asleep at the Wheel
- Khalil Fong
- Li Rong Hao
- Chet Atkins
- Les Paul
- Tommy Emmanuel
- Martin Taylor
- Frank Vignola
- Frédéric Chopin
- Claude Debussy
- Oscar Peterson
- Hugo Strasser
- Jay Chou
- Stefanie Sun
- David Tao
- Jacky Cheung
- Teresa Teng
- Jack Johnson
- Harry Styles(As It Was)
- Lovebugs

Vooral de uitvoering van **Satin Doll** door de virtuoos **Joe Pass** in 'An Evening With Joe Pass' (1994) is voor mij een bron van kracht en vertrouwen geweest, waardoor ik elk dilemma in het leven het hoofd kan bieden. .

# 🪪 License

Dit project is beschermd onder de GNU Affero General Public License. Zie het LICENSE-bestand voor meer details.
