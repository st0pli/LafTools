<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - 프로그래머를 위해 설계된 차세대 다목적 도구 상자
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">LafTools의 내부자 버전 미리보기</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: 이 페이지는 LafTools에서 내부적으로 생성됩니다.</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  [Deutsch](/docs/de/README.md)  |  [Español](/docs/es/README.md)  |  [Français](/docs/fr/README.md)  |  [日本語](/docs/ja/README.md)  |  한국어 | [More](/docs/) <br/>

# 🪄 퀵뷰

이러한 기능을 빠르게 사용할 수 있도록 미국과 CN 지역에 안정적인 온라인 웹사이트를 배포했습니다. 특정 OS 기능에 의존하는 일부 도구를 제외하고 대부분의 도구는 온라인 웹사이트에서 사용할 수 있습니다.

- 🇺🇸 미국: [laftools.dev](https://laftools.dev)
- 🇨🇳 중국 본토만 해당: [laftools.cn](https://laftools.cn)

# 🔋 이름이 뭐예요?

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Functional

본질적으로 LafTools는 일련의 연결되고 비동기적이며 환상적인 도구 세트를 제공하는 제품군입니다.

안심하십시오. 이 프로젝트는 시간이 지남에 따라 놀랍고 환상적인 방식으로 발전할 것입니다. 이 프로젝트는 와인처럼 시간이 지날수록 더 좋아지듯이 더 많은 시간이 필요합니다.

# 💡 소개

인터넷에는 수많은 도구를 사용할 수 있는데 왜 우리가 이 도구 상자를 개발하기로 결정했는지 궁금할 것입니다. 실제로 우리가 제공하는 대부분의 도구는 코덱, 포맷터, 번역, QR 코드 등 인터넷에서 쉽게 찾을 수 있습니다. 그러나 이러한 도구를 사용하는 것이 가장 편안하고 효율적인 접근 방식은 아닙니다.

해당 온라인 도구를 사용하는 동안 아래 문제를 만난 적이 있습니까?

- 오프라인 접근성이 없습니다.
- 글로벌 다크 테마가 없습니다.
- 생산적인 UI 스타일이 없습니다.
- 네트워크 성능이 좋지 않습니다.
- 혼란스러운 광고.
- 데이터 유출 문제.

위 항목 중 하나라도 '예'라고 답했다면 당사의 도구 상자를 사용해 보시기 바랍니다. 다음과 같은 기능을 제공합니다.

- 포스 포에버
- 경량 런타임
- 전체 플랫폼 지원(ARMv8 포함)
- 완전한 GPT 유사 지원
- 생산적인 UI와 고도로 통합됨
- 사용 가능한 Docker 이미지 및 Portable Edition
- 메모, 매뉴얼 등과 같은 추가 도우미...

# 🌠 시사

> LafTools는 아직 개발 중이므로 필요에 따라 UI, 종속성 또는 전제 조건이 변경될 수 있습니다.

### 시사:

[Online Preview](http://laftools.dev)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🚀 시작하기

## 1. 시스템 환경 설정

단순화를 위해 이 저장소를 Windows의 `C:\Usersjerry\project\laftools-repo` 또는 Linux/MacOS의 `/Users/jerry/projects/laftools-repo`에 복제했다고 가정하고 **~/.bashrc* 파일에서 env를 선언하고 아래 구성을 설정해야 합니다. * 또는 명령을 실행하기 전에 간단히 실행하십시오.

Windows OS를 사용하는 경우 모든 명령이 git-bash에서 실행되는지 확인하세요. 자세한 내용은 [CONTRIBUTION](/docs/ko/CONTRIBUTION.md)을 참조하세요. 이 외에도 이 프로젝트가 있는 파일 경로에는 공백이나 영어가 아닌 문자를 사용하지 않는 것이 좋습니다.

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

## 2. 컴파일 및 실행

```bash
# 필요한 전역 라이브러리 설치
npm i -g pnpm ts-node typescript

# 프로젝트 뎁스 설치
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# 핵심 서비스 실행
npm run fe-web

```

## 3. 짓다

```bash
cd pipeline
./build-all.sh "v1.9.9-beta"
```

# 📑 기타 재료

다음은 이 프로젝트에 대해 더 자세히 알아보고 싶은 경우 살펴볼 수 있는 추가 자료입니다.

- [자주하는 질문](/docs/ko/FAQ.md)
- [기부금](/docs/ko/CONTRIBUTION.md)
- [중국 개발자의 경우](/devtools/notes/common/issues.md)

# 💐 Icons

아래의 아름다운 아이콘을 제공해 주신 재능 있는 아티스트에게 감사드립니다.
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 감사의 말

이 프로젝트는 멋진 오픈 소스 프로젝트가 없었다면 불가능했을 것입니다. 개인적으로 깊은 감사를 표하고 싶습니다.

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

확실히 이 프로젝트에 도움이 되고 촉진된 다른 오픈 소스 프로젝트가 있지만 이 부분에서는 자세히 설명할 수 없습니다. 이러한 프로젝트와 인재 개발자들의 노력이 없었다면 LafTools는 불가능했을 것입니다.

Thank you!

Ryan Laf  
2023년 2월 2일

# 🪪 License

이 프로젝트는 GNU Affero General Public License에 따라 보호됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
