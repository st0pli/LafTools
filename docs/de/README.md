<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - Die nächste Generation einer vielseitigen Toolbox für Programmierer
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">Vorschau der Insider-Version von LafTools</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: Diese Seite wird intern von LafTools generiert.</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  Deutsch  |  [Español](/docs/es/README.md)  |  [Français](/docs/fr/README.md)  |  [日本語](/docs/ja/README.md)  |  [한국어](/docs/ko/README.md) | [More](/docs/) <br/>

# 🪄 Schnellansicht

Um diese Funktionen schnell nutzen zu können, haben wir in den USA und China eine stabile Online-Website für Sie bereitgestellt. Die meisten Tools sind auf unseren Online-Websites verfügbar, mit Ausnahme einiger Tools, die auf bestimmten Betriebssystemfunktionen basieren.

- 🇺🇸 Vereinigter Staat: [laftools.dev](https://laftools.dev)
- 🇨🇳 Nur auf dem chinesischen Festland: [laftools.cn](https://laftools.cn)

# 💡 Einführung

Sie fragen sich vielleicht, warum wir entschlossen sind, diese Toolbox zu entwickeln, da es im Internet zahlreiche Tools gibt, die verwendet werden können. Tatsächlich sind die meisten von uns bereitgestellten Tools wie Codec, Formatierer, Übersetzung, QR-Code usw. leicht im Internet zu finden. Allerdings ist die Verwendung dieser Tools nicht die bequemste und effizienteste.

Sind Ihnen bei der Verwendung dieser Online-Tools schon einmal die folgenden Probleme begegnet?

- Keine Offline-Zugänglichkeit.
- Kein globales dunkles Thema.
- Kein produktiver UI-Stil.
- Schlechte Netzwerkleistung.
- Verstörende Werbung.
- Problem mit Datenlecks.

Wenn die Antwort auf eine der oben genannten Fragen „Ja“ lautet, sollten Sie unsere Toolbox ausprobieren. Es bietet folgende Funktionen:

- FOSS für immer
- Leichte Laufzeit
- Vollständige Plattformunterstützung (einschließlich ARMv8)
- Vollständige GPT-ähnliche Unterstützung
- Hochintegriert mit produktiver Benutzeroberfläche
- Verfügbare Docker-Images und Portable Edition
- Zusätzliche Hilfsmittel wie Notizen, Handbücher usw.

# 🌠 Vorschau

> LafTools befindet sich noch in der Entwicklung, seine Benutzeroberfläche, Abhängigkeiten oder Voraussetzungen können sich bei Bedarf ändern.

### Vorschau:

[Online Preview](http://laftools.dev)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🚀 Erste Schritte

## 1. Systemumgebung einrichten

Nehmen wir der Einfachheit halber an, dass Sie dieses Repository entweder auf `C:\Usersjerry\project\laftools-repo` unter Windows oder auf `/Users/jerry/projects/laftools-repo` unter Linux/MacOS geklont haben. Dann sollten Sie env deklarieren und unten in Ihrer Datei config festlegen **~/.bashrc* *, oder führen Sie sie einfach aus, bevor Sie einen Befehl ausführen.

Wenn Sie ein Windows-Betriebssystem verwenden, stellen Sie bitte sicher, dass alle Befehle in Git-Bash ausgeführt werden. Weitere Informationen finden Sie unter [BEITRAG](/docs/de/CONTRIBUTION.md). Darüber hinaus wird empfohlen, im Dateipfad, in dem sich dieses Projekt befindet, keine Leerzeichen oder nicht-englischen Zeichen zu verwenden.

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

## 2. Kompilieren und ausführen

```bash
# Installieren Sie die erforderliche globale Bibliothek
npm i -g pnpm ts-node typescript

# Projekt-Abhängigkeiten installieren
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# Kerndienst ausführen
npm run fe-web

```

## 3. Bauen

```bash
cd pipeline
./build-all.sh "v1.9.9-beta"
```

# 🌱 Was ist mit dem Namen?

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Fantastic

In essence, LafTools is a suite that offers a series of linked, asynchronous, and fantastic toolsets.

Rest assured, this project will evolve in remarkable and fantastic ways over time. This project needs more time, just like wine, gets better with time.

# 📑 Andere Materialien

Nachfolgend finden Sie weitere Materialien, die Sie sich ansehen können, wenn Sie mehr Details über dieses Projekt erfahren möchten:

- [FAQ](/docs/de/FAQ.md)
- [BEITRAG](/docs/de/CONTRIBUTION.md)
- [Für chinesische Entwickler](/devtools/notes/common/issues.md)

# 💐 Icons

Wir würden uns über talentierte Künstler freuen, die die folgenden wunderschönen Symbole zur Verfügung gestellt haben:
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 Danksagungen

Dieses Projekt wäre ohne großartige Open-Source-Projekte nicht möglich gewesen, bei denen ich persönlich meinen tiefsten Dank aussprechen möchte:

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

Sicherlich gibt es andere Open-Source-Projekte, die diesem Projekt geholfen und es erleichtert haben, worauf ich in diesem Teil nicht näher eingehen kann; Ohne diese Projekte und die Bemühungen dieser Talententwickler wäre LafTools nicht möglich gewesen.

Thank you!

Ryan Laf  
2. Februar 2023

# 🪪 License

Dieses Projekt ist unter der GNU Affero General Public License geschützt. Weitere Informationen finden Sie in der LIZENZdatei.
