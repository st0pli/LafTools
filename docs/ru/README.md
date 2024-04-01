<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - Следующее поколение универсального набора инструментов, предназначенного для программистов.
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">Предварительный просмотр инсайдерской версии LafTools</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: Эта страница создается внутри LafTools.</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  [Deutsch](/docs/de/README.md)  |  [Español](/docs/es/README.md)  |  [Français](/docs/fr/README.md)  |  [日本語](/docs/ja/README.md)  |  [한국어](/docs/ko/README.md) | [More](/docs/) <br/>

# 🪄 Быстрый просмотр

Чтобы быстро использовать эти функции, мы развернули для вас стабильный онлайн-сайт в США и Китае. Большинство инструментов доступно на наших веб-сайтах, за исключением некоторых инструментов, которые зависят от конкретных возможностей ОС.

- 🇺🇸 Соединенные Штаты: [laftools.dev](https://laftools.dev)
- 🇨🇳 Только материковый Китай: [laftools.cn](https://laftools.cn)

# 💡 Введение

Вы можете задаться вопросом, почему мы полны решимости разработать этот набор инструментов, поскольку в Интернете можно использовать множество инструментов. Действительно, большинство предоставленных нами инструментов можно легко найти в Интернете, например, кодек, форматтер, перевод, QR-код и т. д. Однако это не самый удобный и эффективный подход к использованию этих инструментов.

Сталкивались ли вы когда-нибудь с указанными ниже проблемами при использовании этих онлайн-инструментов?

- Нет автономного доступа.
- Нет глобальной темной темы.
- Нет продуктивного стиля пользовательского интерфейса.
- Плохая производительность сети.
- Возмутительная реклама.
- Проблема утечки данных.

Если ответ на любой из вышеперечисленных вопросов положительный, вам следует рассмотреть возможность использования нашего набора инструментов. Он предлагает следующие возможности:

- ФОСС навсегда
- Легкая среда выполнения
- Полная поддержка платформ (включая ARMv8)
- Полная поддержка GPT
- Высокая интеграция с продуктивным пользовательским интерфейсом
- Доступные образы Docker и портативная версия
- Дополнительные помощники, такие как заметки, руководства и т. д.

# 🌠 Предварительный просмотр

> LafTools все еще находится в стадии разработки, его пользовательский интерфейс, зависимости или предварительные требования могут быть изменены по мере необходимости.

### Предварительный просмотр:

[Online Preview](http://laftools.dev)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🚀 Начиная

## 1. Настройка системной среды

Для простоты предположим, что вы клонировали этот репозиторий либо в `C:\Usersjerry\project\laftools-repo` в Windows, либо в `/Users/jerry/projects/laftools-repo` в Linux/MacOS, затем вам следует объявить env и установить конфигурацию ниже в своем файле **~/.bashrc* * или просто выполните их перед запуском любой команды.

Если вы используете ОС Windows, убедитесь, что все команды выполняются в git-bash. Дополнительную информацию см. в разделе [ВКЛАД](/docs/ru/CONTRIBUTION.md). Помимо этого, рекомендуется избегать использования пробелов или неанглийских символов в пути к файлу, где находится этот проект.

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

## 2. Скомпилируйте и запустите

```bash
# установить необходимую глобальную библиотеку
npm i -g pnpm ts-node typescript

# установить описания проекта
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# запустить основной сервис
npm run fe-web

```

## 3. Строить

```bash
cd pipeline
./build-all.sh "v1.9.9-beta"
```

# 🌱 Что с именем?

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Fantastic

In essence, LafTools is a suite that offers a series of linked, asynchronous, and fantastic toolsets.

Rest assured, this project will evolve in remarkable and fantastic ways over time. This project needs more time, just like wine, gets better with time.

# 📑 Другие материалы

Ниже приведены дополнительные материалы, с которыми вы можете ознакомиться, если хотите узнать больше об этом проекте:

- [Часто задаваемые вопросы](/docs/ru/FAQ.md)
- [ВКЛАД](/docs/ru/CONTRIBUTION.md)
- [Для китайских разработчиков](/devtools/notes/common/issues.md)

# 💐 Icons

Мы будем признательны талантливым художникам, предоставившим ниже красивые иконки:
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 Благодарности

Этот проект был бы невозможен без замечательных проектов с открытым исходным кодом, которым я хотел бы лично выразить глубочайшую благодарность:

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

Конечно, есть и другие проекты с открытым исходным кодом, которые принесли пользу и облегчили этот проект, о которых я не мог подробно рассказать в этой части; Без этих проектов и усилий этих талантливых разработчиков создание LafTools было бы невозможно.

Thank you!

Ryan Laf  
2 февраля 2023 г.

# 🪪 License

Этот проект защищен Генеральной общественной лицензией GNU Affero. Более подробную информацию см. в файле ЛИЦЕНЗИИ.
