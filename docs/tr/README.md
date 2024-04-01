<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - Programcılar için tasarlanmış yeni nesil çok yönlü araç kutusu
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">LafTools'un Insider Sürümünü Önizleyin</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: Bu sayfa dahili olarak LafTools'tan oluşturulmuştur.</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  [Deutsch](/docs/de/README.md)  |  [Español](/docs/es/README.md)  |  [Français](/docs/fr/README.md)  |  [日本語](/docs/ja/README.md)  |  [한국어](/docs/ko/README.md) | [More](/docs/) <br/>

# 🪄 Hızlı Görünüm

Bu işlevleri hızlı bir şekilde kullanabilmeniz için, ABD ve CN bölgesinde kullanmanız için istikrarlı bir çevrimiçi web sitesi kurduk. Belirli işletim sistemi özelliklerine dayanan bazı araçlar dışında çoğu araç çevrimiçi web sitelerimizde mevcuttur.

- 🇺🇸 Birleşik Devlet: [laftools.dev](https://laftools.dev)
- 🇨🇳 Yalnızca Çin Anakarası: [laftools.cn](https://laftools.cn)

# 💡 giriiş

İnternette kullanılabilecek çok sayıda araç varken neden bu araç kutusunu geliştirmeye kararlı olduğumuzu merak edebilirsiniz. Aslında sunduğumuz codec, formatlayıcı, çeviri, QR Code vb. gibi araçların çoğu internette kolaylıkla bulunabilir. Ancak bu araçları kullanmak en rahat ve verimli yaklaşım değildir.

Bu çevrimiçi araçları kullanırken aşağıdaki sorunlarla hiç karşılaştınız mı?

- Çevrimdışı Erişilebilirlik Yok.
- Küresel Karanlık Tema Yok.
- Üretken kullanıcı arayüzü stili yok.
- Zayıf Ağ Performansı.
- Üzücü Reklamlar.
- Veri Sızıntısı Sorunu.

Yukarıdakilerden herhangi birine cevabınız evet ise araç kutumuzu denemeyi düşünmelisiniz. Aşağıdaki özellikleri sunar:

- Sonsuza Kadar FOSS
- Hafif Çalışma Süresi
- Tam platform desteği (ARMv8 dahil)
- Tam GPT benzeri destek
- Üretken kullanıcı arayüzüyle son derece entegre
- Mevcut Docker Görüntüleri ve Taşınabilir Sürüm
- Notlar, kılavuzlar vb. gibi ekstra yardımcılar...

# 🌠 Ön izleme

> LafTools hala geliştirilme aşamasındadır; kullanıcı arayüzü, bağımlılıkları veya önkoşulları gerektiği gibi değiştirilebilir.

### Ön izleme:

[Online Preview](http://laftools.dev)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🚀 Başlarken

## 1. Sistem Ortamını Kurma

Basitlik adına, bu depoyu Windows'ta `C:\Usersjerry\project\laftools-repo`'a veya Linux/MacOS'ta `/Users/jerry/projects/laftools-repo`'e kopyaladığınızı varsayalım, ardından env'yi bildirmeli ve **~/.bashrc* dosyanızda aşağıdaki config'i ayarlamalısınız. * veya herhangi bir komutu çalıştırmadan önce bunları yürütün.

Windows işletim sistemi kullanıyorsanız lütfen tüm komutların git-bash'ta yürütüldüğünden emin olun, daha fazla bilgi için lütfen [CONTRIBUTION](/docs/tr/CONTRIBUTION.md) konusuna bakın. Bunun dışında bu projenin bulunduğu dosya yolunda boşluk veya İngilizce olmayan karakterlerin kullanılmaması tavsiye edilir.

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

## 2. Derle ve Çalıştır

```bash
# gerekli global kütüphaneyi yükleyin
npm i -g pnpm ts-node typescript

# proje bölümlerini yükle
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# çekirdek hizmeti çalıştır
npm run fe-web

```

## 3. İnşa etmek

```bash
cd pipeline
./build-all.sh "v1.9.9-beta"
```

# 🌱 İsmin nesi var?

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Fantastic

In essence, LafTools is a suite that offers a series of linked, asynchronous, and fantastic toolsets.

Rest assured, this project will evolve in remarkable and fantastic ways over time. This project needs more time, just like wine, gets better with time.

# 📑 Diğer materyaller

Bu proje hakkında daha fazla ayrıntı öğrenmek istiyorsanız aşağıda göz atabileceğiniz diğer materyaller bulunmaktadır:

- [SSS](/docs/tr/FAQ.md)
- [KATKI](/docs/tr/CONTRIBUTION.md)
- [Çin Geliştiricileri için](/devtools/notes/common/issues.md)

# 💐 Icons

Aşağıdaki güzel simgeleri sunan yetenekli sanatçıları takdir ediyoruz:
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 Teşekkür

Bu proje, kişisel olarak en derin minnettarlığımı ifade etmek istediğim muhteşem açık kaynak projeleri olmasaydı mümkün olamazdı:

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

Elbette bu projeye fayda sağlayan ve kolaylaştıran, bu bölümde detaylandıramayacağım başka açık kaynaklı projeler de var; Bu projeler ve yetenek geliştiricilerin çabaları olmasaydı LafTools mümkün olmazdı.

Thank you!

Ryan Laf  
2 Şubat 2023

# 🪪 License

Bu proje GNU Affero Genel Kamu Lisansı kapsamında korunmaktadır; daha fazla ayrıntı için lütfen LİSANS dosyasına bakın.
