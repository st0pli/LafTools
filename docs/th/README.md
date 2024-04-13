<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - กล่องเครื่องมืออเนกประสงค์เจเนอเรชันถัดไปที่ออกแบบมาสำหรับโปรแกรมเมอร์
</span>
<!-- <center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laftools.cn">ดูตัวอย่าง LafTools เวอร์ชัน Insider</a>
</div>
</center> -->
<br><br>
</p>

<i>Note: หน้านี้สร้างขึ้นจาก LafTools ภายใน</i> <br/> [English](/docs/en_US/README.md)  |  [简体中文](/docs/zh_CN/README.md)  |  [繁體中文](/docs/zh_HK/README.md)  |  [Deutsch](/docs/de/README.md)  |  [Español](/docs/es/README.md)  |  [Français](/docs/fr/README.md)  |  [日本語](/docs/ja/README.md)  |  [한국어](/docs/ko/README.md) | [More](/docs/) <br/>

# 🔮 Vision

LafTools is a privacy-first, self-hosted, fully open source toolbox designed for programmers, you can find plentful toolsets on this website.

# 💌 Features

- ฟอสส์ตลอดไป
- รันไทม์น้ำหนักเบา
- รองรับแพลตฟอร์มเต็มรูปแบบ (รวมถึง ARMv8)
- รองรับ GPT เต็มรูปแบบ
- บูรณาการอย่างสูงกับ UI ที่มีประสิทธิผล
- มี Docker Images และ Portable Edition
- Desktop edition support(Planning)
- ...

# 🚀 Run it on Docker

For GLOBAL users:

```
docker run -e LAFREGION=US -e APPLANG=en_US --name mylaftools -d -p 0.0.0.0:39899:39899 codegentoolbox/laftools-linux-x64:latest
```

For CHINESE users(国内用户):

```
docker run -e LAFREGION=CN -e APPLANG=zh_CN --name mylaftools -d -p 0.0.0.0:39899:39899 codegentoolbox/laftools-linux-x64:latest
```

**NOTE**:

1. Default port is set to 39899, you can adjust it if needed.
2. LafTools will always be upgraded to latest version automatically to let you can enjoy latest functions and bugfixs.

Docker Images:

- [Docker Hub - laftools-linux-x64](https://hub.docker.com/r/codegentoolbox/laftools-linux-x64)
- [Docker Hub - laftools-arm64-x64](https://hub.docker.com/r/codegentoolbox/laftools-arm64-x64)

# 🔋 Official Websites

เพื่อใช้ฟังก์ชันเหล่านี้อย่างรวดเร็ว เราได้ปรับใช้เว็บไซต์ออนไลน์ที่มีความเสถียรในภูมิภาคสหรัฐอเมริกาและ CN เพื่อให้คุณใช้งานได้ เครื่องมือส่วนใหญ่มีอยู่ในเว็บไซต์ออนไลน์ของเรา ยกเว้นเครื่องมือบางอย่างที่ต้องอาศัยความสามารถเฉพาะของระบบปฏิบัติการ

- 🇺🇸 อเมริกา: [laftools.dev](https://laftools.dev)
- 🇨🇳 จีนแผ่นดินใหญ่เท่านั้น: [laftools.cn](https://laftools.cn)

# 🌠 ดูตัวอย่าง

![](https://github.com/work7z/LafTools/blob/dev/devtools/images/portal-1.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 📡 About LAF

- `L` -> Linked
- `A` -> Asynchronous
- `F` -> Functional

โดยพื้นฐานแล้ว LafTools เป็นชุดเครื่องมือที่นำเสนอชุดเครื่องมือที่เชื่อมโยง อะซิงโครนัส และยอดเยี่ยม

มั่นใจได้ว่าโปรเจ็กต์นี้จะพัฒนาไปในทางที่น่าทึ่งและน่าอัศจรรย์เมื่อเวลาผ่านไป โปรเจ็กต์นี้ต้องใช้เวลามากขึ้น เช่นเดียวกับไวน์ และจะดีขึ้นเมื่อเวลาผ่านไป

# 🌠 Contribution

## 1. ตั้งค่าสภาพแวดล้อมระบบ

เพื่อความเรียบง่าย สมมติว่าคุณได้โคลนพื้นที่เก็บข้อมูลนี้เป็น `C:\Usersjerry\project\laftools-repo` บน Windows หรือ `/Users/jerry/projects/laftools-repo` บน Linux/MacOS จากนั้นคุณควรประกาศ env และตั้งค่าการกำหนดค่าด้านล่างในไฟล์ของคุณ **~/.bashrc* * หรือเพียงดำเนินการก่อนที่จะรันคำสั่งใด ๆ

หากคุณใช้ Windows OS โปรดตรวจสอบให้แน่ใจว่าคำสั่งทั้งหมดดำเนินการใน git-bash เรียนรู้เพิ่มเติม โปรดดูที่ [CONTRIBUTION](/docs/th/CONTRIBUTION.md) นอกจากนี้ ขอแนะนำให้หลีกเลี่ยงการใช้ช่องว่างหรืออักขระที่ไม่ใช่ภาษาอังกฤษในเส้นทางไฟล์ที่เป็นที่ตั้งของโปรเจ็กต์นี้

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

## 2. Compile and Run

```bash
# ติดตั้งไลบรารีส่วนกลางที่จำเป็น
npm i -g pnpm ts-node typescript

# ติดตั้ง deps โครงการ
cd $LAFTOOLS_ROOT && npm install -S -D --force
cd $LAFTOOLS_ROOT/modules/web2 && npm install -S -D --force
cd $LAFTOOLS_ROOT/devtools/scripts/scan && npm install -S -D --force

# เรียกใช้บริการหลัก
npm run fe-web

```

## 3. สร้าง

```bash
cd pipeline
./build-all.sh
```

# 📑 วัสดุอื่นๆ

ด้านล่างนี้เป็นเอกสารเพิ่มเติมที่คุณสามารถดูได้หากต้องการเรียนรู้รายละเอียดเพิ่มเติมเกี่ยวกับโครงการนี้:

- [คำถามที่พบบ่อย](/docs/th/FAQ.md)
- [ผลงาน](/docs/th/CONTRIBUTION.md)
- [สำหรับนักพัฒนาชาวจีน](/devtools/notes/common/issues.md)

# 💐 Icons

เราขอขอบคุณศิลปินที่มีพรสวรรค์ที่ให้ไอคอนที่สวยงามด้านล่าง:
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by heisenberg_jr - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/fund" title="fund icons">Fund icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/translate" title="translate icons">Translate icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/timer" title="timer icons">Timer icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/dictionary" title="dictionary icons">Dictionary icons created by Freepik - Flaticon</a>

# 🙏 รับทราบ

โครงการนี้คงเป็นไปไม่ได้หากไม่มีโครงการโอเพ่นซอร์สที่ยอดเยี่ยม ซึ่งฉันอยากจะแสดงความขอบคุณอย่างสุดซึ้งเป็นการส่วนตัวต่อ:

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

แน่นอนว่ายังมีโครงการโอเพ่นซอร์สอื่น ๆ ที่เป็นประโยชน์และสนับสนุนโครงการนี้ ซึ่งฉันไม่สามารถให้รายละเอียดได้ในส่วนนี้ หากไม่มีโครงการเหล่านี้และความพยายามของนักพัฒนาที่มีความสามารถเหล่านี้ LafTools คงเป็นไปไม่ได้

# 🪪 License

โครงการนี้ได้รับการคุ้มครองภายใต้สัญญาอนุญาตสาธารณะทั่วไปของ GNU โปรดดูไฟล์ใบอนุญาตสำหรับรายละเอียดเพิ่มเติม
