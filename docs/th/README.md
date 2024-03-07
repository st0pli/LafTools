<p align="center">
<img width="100" src="https://github.com/work7z/LafTools/blob/dev/modules/web2/public/static/icon.png?raw=true"></img>
<br>
<span style="font-size:20px">LafTools - กล่องเครื่องมืออเนกประสงค์เจเนอเรชันถัดไปที่ออกแบบมาสำหรับโปรแกรมเมอร์
</span>
<center>
<div style="text-align:center;">
<a target="_blank" href="http://cloud.laf-tools.com">ดูตัวอย่าง LafTools เวอร์ชัน Insider</a>
</div>
</center>
<br><br>
</p>

 [English](/docs/en_US)  |  [简体中文](/docs/zh_CN)  |  [繁體中文](/docs/zh_HK)  |  [Deutsch](/docs/de)  |  [Español](/docs/es)  |  [Français](/docs/fr)  |  [日本語](/docs/ja)  |  [한국어](/docs/ko) | [More](/docs/) <br/> <i>Note: หน้านี้สร้างขึ้นจาก LafTools ภายใน</i> <br/>

# 💡 การแนะนำ

คุณอาจสงสัยว่าเหตุใดเราจึงมุ่งมั่นที่จะพัฒนากล่องเครื่องมือนี้เนื่องจากมีเครื่องมือมากมายที่สามารถใช้งานบนอินเทอร์เน็ตได้ แท้จริงแล้ว เครื่องมือส่วนใหญ่ที่เราจัดเตรียมให้นั้นหาได้ง่ายบนอินเทอร์เน็ต เช่น โคเดก ฟอร์แมตเตอร์ การแปล รหัส QR ฯลฯ อย่างไรก็ตาม การใช้เครื่องมือเหล่านี้ไม่สะดวกสบายและมีประสิทธิภาพที่สุด

คุณเคยพบปัญหาด้านล่างขณะใช้เครื่องมือออนไลน์เหล่านั้นหรือไม่

- ไม่มีการเข้าถึงแบบออฟไลน์
- ไม่มีธีม Global Dark
- ไม่มีสไตล์ UI ที่มีประสิทธิผล
- ประสิทธิภาพของเครือข่ายแย่
- โฆษณาที่ทำให้เสียอารมณ์
- ปัญหาการรั่วไหลของข้อมูล

หากคำตอบข้างต้นคือใช่ คุณควรลองใช้กล่องเครื่องมือของเรา มันมีคุณสมบัติดังต่อไปนี้:

- ฟอสส์ตลอดไป
- รันไทม์น้ำหนักเบา
- รองรับแพลตฟอร์มเต็มรูปแบบ (รวมถึง ARMv8)
- รองรับ GPT เต็มรูปแบบ
- บูรณาการอย่างสูงกับ UI ที่มีประสิทธิผล
- มี Docker Images และ Portable Edition
- ตัวช่วยพิเศษ เช่น บันทึกย่อ คู่มือ ฯลฯ...

# 🌠 ดูตัวอย่าง

> LafTools ยังอยู่ระหว่างการพัฒนา UI การขึ้นต่อกัน หรือข้อกำหนดเบื้องต้นอาจเปลี่ยนแปลงได้ตามความจำเป็น

### ดูตัวอย่าง:

[Online Preview](http://cloud.laf-tools.com)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview.png?raw=true)
![](https://github.com/work7z/LafTools/blob/dev/devtools/images/preview-dark.png?raw=true)

# 🍀 เริ่มต้นใช้งาน

## 0. การปรับโครงสร้างใหม่

ล่าสุด เรากำลังปรับโครงสร้างสถาปัตยกรรมของ LafTools ใหม่โดยใช้ next.js ขั้นตอนด้านล่างอาจมีการเปลี่ยนแปลงตามความจำเป็น

## 1. ตั้งค่าสภาพแวดล้อมระบบ

เพื่อความเรียบง่าย สมมติว่าคุณได้โคลนพื้นที่เก็บข้อมูลนี้ไปที่ `C:\\Users\jerry\\project\\laftools-repo` บน Windows หรือ `/Users/jerry/projects/laftools-repo` บน Linux/MacOS คุณควรประกาศ env และตั้งค่าการกำหนดค่าด้านล่างในไฟล์ของคุณ **~/.bashrc** หรือเพียงแค่ดำเนินการก่อนที่จะรันคำสั่งใดๆ

หากคุณใช้ Windows OS โปรดตรวจสอบให้แน่ใจว่าคำสั่งทั้งหมดดำเนินการใน git-bash เรียนรู้เพิ่มเติม โปรดดูที่ [CONTRIBUTION](./docs/CONTRIBUTION.md) นอกจากนี้ ขอแนะนำให้หลีกเลี่ยงการใช้ช่องว่างหรืออักขระที่ไม่ใช่ภาษาอังกฤษในเส้นทางไฟล์ที่เป็นที่ตั้งของโปรเจ็กต์นี้

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

## 2. เปิดตัวบริการ Go (การปรับโครงสร้างใหม่)

หากต้องการเรียกใช้บริการ Go ในเทอร์มินัล คุณสามารถดำเนินการคำสั่งด้านล่าง:

```shell
go run ./core/app.go server
```

ในการแก้ไขข้อบกพร่องของบริการ Go เราได้กำหนดค่าไว้ใน VSCode คุณสามารถทำตามขั้นตอนด้านล่าง:

1. ป้อน Visual Studio Code
2. Click "Run and Debug" on your sidebar
3. Click "Run" button.

## 3. เปิดตัวโมดูล FrontEnd (ย้ายไปที่ web2)

```bash
# ติดตั้งไลบรารีส่วนกลางที่จำเป็น
npm i -g pnpm ts-node typescript

# ติดตั้ง deps โครงการ
cd $LAFTOOLS_ROOT && pnpm install
cd $LAFTOOLS_ROOT/modules/web && pnpm install
cd $LAFTOOLS_ROOT/modules/purejs && pnpm install
cd $LAFTOOLS_ROOT/devtools/scripts/scan && pnpm install

npm run win-clean # มีไว้สำหรับ Windows เท่านั้น โดยจะปิดเทอร์มินัลและกระบวนการก่อนหน้าทั้งหมด

# เรียกใช้บริการเว็บบนเทอร์มินัล 1
npm run fe-web

# รันโปรเซสเซอร์ CSS บนเทอร์มินัล 2
npm run fe-css

# รันงานพิเศษบนเทอร์มินัล 3
npm run fe-extra

```

โปรดทราบว่าคุณสามารถใช้สัญลักษณ์ '&' สำหรับการดำเนินการในเบื้องหลังได้ หากคุณไม่ต้องการเรียกใช้คำสั่งเหล่านี้ในอินสแตนซ์เทอร์มินัลที่แยกจากกัน

## 4. เริ่มการพัฒนา

เมื่อบริการ Go ทำงาน คุณควรจะเห็นลิงก์ที่พิมพ์ออกมาในเทอร์มินัล ตอนนี้ คัดลอก URL นี้และวางลงในเบราว์เซอร์ของคุณเพื่อเริ่มพัฒนา ลุยเลย!

ตัวอย่าง:

```output
-----------------------------------------------
PLEASE ACCESS THE LINK BELOW IN BROWSER.
请复制下方链接并在浏览器端打开(for zh-hans users)
請復製下方鏈接並在瀏覽器端打開(for zh-hant users)
http://127.0.0.1:35000/app/entry?t={YOUR_SECRET_ID}
-----------------------------------------------
```

## 5. สร้าง

```bash
cd pipeline
./build-all.sh
```

# 🌱 ชื่ออะไรคะ?

#### _The Tools for Laffin' At Life_

ชื่อของโปรเจ็กต์นี้ได้รับแรงบันดาลใจจาก Laffin' At Life ซึ่งเป็นเพลงคันทรีคลาสสิกจากปี 1987 ของ Chet Atkins ซึ่งมีความพิเศษอยู่ในใจของผู้แต่งด้วย

หวังว่า LafTools จะทำให้งานประจำวันของคุณง่ายขึ้น ลดความจำเป็นในการทำงานล่วงเวลา และช่วยให้คุณรักษาสมดุลระหว่างชีวิตและการทำงานที่ดี ให้เราละทิ้งชีวิตกันเถอะ!

# 📑 วัสดุอื่นๆ

ด้านล่างนี้เป็นเอกสารเพิ่มเติมที่คุณสามารถดูได้หากต้องการเรียนรู้รายละเอียดเพิ่มเติมเกี่ยวกับโครงการนี้:

- [คำถามที่พบบ่อย](/docs/th/FAQ.md)
- [ผลงาน](/docs/th/CONTRIBUTION.md)
- [สำหรับนักพัฒนาชาวจีน](/devtools/notes/common/issues.md)

# 💐 Icons

เราขอขอบคุณศิลปินที่มีพรสวรรค์ที่ให้ไอคอนที่สวยงามด้านล่าง:
<a href="https://www.flaticon.com/free-icons/ide" title="ide icons">Ide icons created by umartvurdu - Flaticon</a>

# 🙏 รับทราบ

โครงการนี้คงเป็นไปไม่ได้หากไม่มีโครงการโอเพ่นซอร์สที่ยอดเยี่ยม ซึ่งฉันอยากจะแสดงความขอบคุณอย่างสุดซึ้งเป็นการส่วนตัวต่อ:

1. [Blueprint UI](https://blueprintjs.com/) - a React-based UI toolkit.
1. [CyberChef](https://github.com/gchq/CyberChef/tree/master) - a web app for encryption, encoding, compression and data analysis.
1. [Lodash](https://github.com/lodash/lodash) - a modern JavaScript utility library delivering modularity, performance, & extras.
1. [one-api](https://github.com/songquanpeng/one-api) - an OpenAI key management & redistribution system.

แน่นอนว่ายังมีโครงการโอเพ่นซอร์สอื่น ๆ ที่เป็นประโยชน์และสนับสนุนโครงการนี้ ซึ่งฉันไม่สามารถให้รายละเอียดได้ในส่วนนี้ หากไม่มีโครงการเหล่านี้และความพยายามของนักพัฒนาที่มีความสามารถเหล่านี้ LafTools คงเป็นไปไม่ได้

Thank you!

Ryan Laf  
2 กุมภาพันธ์ 2023

# 🪪 License

โครงการนี้ได้รับการคุ้มครองภายใต้สัญญาอนุญาตสาธารณะทั่วไปของ GNU โปรดดูไฟล์ใบอนุญาตสำหรับรายละเอียดเพิ่มเติม
