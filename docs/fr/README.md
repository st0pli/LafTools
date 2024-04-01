<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - La nouvelle génération d'une boîte à outils polyvalente conçue pour les programmeurs
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">Aperçu de la version Insider de LafTools</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: Cette page est générée à partir de LafTools en interne.</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  [Deutsch](/docs/de/README.md)  |  [Español](/docs/es/README.md)  |  Français  |  [日本語](/docs/ja/README.md)  |  [한국어](/docs/ko/README.md) | [More](/docs/) <br/>

# 🪄 Aperçu rapide

Pour utiliser rapidement ces fonctions, nous avons déployé un site Web en ligne stable dans la région des États-Unis et du CN pour que vous puissiez l'utiliser. La plupart des outils sont disponibles sur nos sites Web en ligne, à l'exception de certains outils qui reposent sur des capacités spécifiques du système d'exploitation.

- 🇺🇸 Etats Unis: [laftools.dev](https://laftools.dev)
- 🇨🇳 Chine continentale uniquement: [laftools.cn](https://laftools.cn)

# 💡 Introduction

Vous vous demandez peut-être pourquoi nous sommes déterminés à développer cette boîte à outils alors qu'il existe de nombreux outils utilisables sur Internet. En effet, la plupart des outils que nous avons fournis peuvent être facilement trouvés sur Internet, comme le codec, le formateur, la traduction, le QR Code, etc… Cependant, ce n'est pas l'approche la plus confortable et la plus efficace pour utiliser ces outils.

Avez-vous déjà rencontré les problèmes ci-dessous lors de l'utilisation de ces outils en ligne ?

- Aucune accessibilité hors ligne.
- Pas de thème sombre global.
- Aucun style d'interface utilisateur productif.
- Mauvaises performances du réseau.
- Des publicités bouleversantes.
- Problème de fuite de données.

Si la réponse à l’une des questions ci-dessus est oui, vous devriez alors envisager d’essayer notre boîte à outils. Il offre les fonctionnalités suivantes :

- Logiciel libre pour toujours
- Durée d'exécution légère
- Prise en charge complète de la plateforme (y compris ARMv8)
- Prise en charge complète de type GPT
- Hautement intégré avec une interface utilisateur productive
- Images Docker disponibles et édition portable
- Aides supplémentaires telles que des notes, des manuels, etc...

# 🌱 C'est quoi ce nom ?

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Fantastic

In essence, LafTools is a suite that offers a series of linked, asynchronous, and fantastic toolsets.

Rest assured, this project will evolve in remarkable and fantastic ways over time. This project needs more time, just like wine, gets better with time.

# 🌠 Aperçu

> LafTools est encore en développement, son interface utilisateur, ses dépendances ou ses prérequis peuvent être modifiés selon les besoins.

### Aperçu:

[Online Preview](http://laftools.dev)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🚀 Commencer

## 1. Configuration de l'environnement système

Par souci de simplicité, disons que vous avez cloné ce référentiel sur `C:\Usersjerry\project\laftools-repo` sous Windows ou `/Users/jerry/projects/laftools-repo` sur Linux/MacOS, vous devez alors déclarer env et définir la configuration ci-dessous dans votre fichier **~/.bashrc* *, ou exécutez-les simplement avant d'exécuter une commande.

Si vous utilisez le système d'exploitation Windows, assurez-vous que toutes les commandes sont exécutées dans git-bash. Pour en savoir plus, veuillez vous référer à [CONTRIBUTION](/docs/fr/CONTRIBUTION.md). En dehors de cela, il est recommandé d’éviter d’utiliser des espaces ou des caractères non anglais dans le chemin du fichier où se trouve ce projet.

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

## 2. Compiler et exécuter

```bash
# installer la bibliothèque globale requise
npm i -g pnpm ts-node typescript

# installer les départements du projet
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# exécuter le service de base
npm run fe-web

```

## 3. Construire

```bash
cd pipeline
./build-all.sh "v1.9.9-beta"
```

# 📑 Autres matériaux

Vous trouverez ci-dessous d'autres documents que vous pouvez consulter si vous souhaitez en savoir plus sur ce projet :

- [FAQ](/docs/fr/FAQ.md)
- [CONTRIBUTION](/docs/fr/CONTRIBUTION.md)
- [Pour les développeurs chinois](/devtools/notes/common/issues.md)

# 💐 Icons

Nous apprécierions les artistes talentueux qui fournissaient ci-dessous de belles icônes :
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 Remerciements

Ce projet n'aurait pas été possible sans de superbes projets open source auxquels je voudrais personnellement exprimer ma plus profonde gratitude :

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

Bien sûr, il existe d'autres projets open source qui ont bénéficié et facilité ce projet, que je n'ai pas pu détailler dans cette partie ; Sans ces projets et les efforts de ces développeurs de talents, LafTools n'aurait pas été possible.

Thank you!

Ryan Laf  
2 février 2023

# 🪪 License

Ce projet est protégé sous la licence publique générale GNU Affero, veuillez consulter le fichier LICENSE pour plus de détails.
