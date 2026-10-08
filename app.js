const $=s=>document.querySelector(s);
const BANK={
"Matematika":{1:["Bilangan","Penjumlahan","Pengurangan","Bangun datar","Pengukuran"],2:["Bilangan","Penjumlahan & pengurangan","Perkalian dasar","Bangun datar","Waktu & uang"],3:["Bilangan","Perkalian & pembagian","Pecahan","Keliling & luas","Pengukuran"],4:["Bilangan","Pecahan","KPK & FPB","Bangun datar","Pengukuran"],5:["Pecahan & desimal","Volume","Bangun ruang","Skala","Kecepatan"],6:["Operasi bilangan","Pecahan","Bangun ruang","Perbandingan","Data & peluang"]},
"Bahasa Indonesia":{1:["Membaca kata","Kosakata","Kalimat sederhana","Teks pendek"],2:["Kalimat","Kosakata","Teks cerita","Tanda baca"],3:["Ide pokok","Kosakata","Teks informasi","Kalimat efektif"],4:["Ide pokok","Ringkasan","Teks narasi","Teks informasi"],5:["Ide pokok & simpulan","Iklan","Teks eksplanasi","Kalimat efektif"],6:["Simpulan","Pidato","Teks eksplanasi","Fakta & opini"]},
"Bahasa Inggris":{1:["Greetings","Numbers","Colors","Family"],2:["Daily activities","Numbers","Things around us","Animals"],3:["Days & time","Hobbies","Family","Simple sentences"],4:["Daily activities","Places","Describing people","Simple present"],5:["Activities","Directions","Food & drinks","Simple present"],6:["Past activities","Descriptions","Public places","Simple past"]},
"PAI":{1:["Rukun Islam","Wudhu","Doa sehari-hari","Akhlak"],2:["Salat","Asmaul Husna","Akhlak terpuji","Surah pendek"],3:["Rukun iman","Salat berjamaah","Akhlak","Kisah nabi"],4:["Malaikat","Zakat","Puasa","Kisah nabi"],5:["Al-Qur'an","Puasa","Zakat","Akhlak"],6:["Iman kepada hari akhir","Qada & qadar","Sejarah Islam","Akhlak"]},
"IPAS":{1:["Pancaindra","Makhluk hidup","Lingkungan","Benda"],2:["Tumbuhan","Hewan","Cuaca","Lingkungan"],3:["Siklus hidup","Energi","Lingkungan","Peta sederhana"],4:["Gaya","Energi","Tumbuhan","Sumber daya alam"],5:["Ekosistem","Siklus air","Energi","Keragaman"],6:["Sistem tubuh","Listrik","Tata surya","Ekosistem"]},
"IPS":{1:["Keluarga","Lingkungan sekitar","Kebutuhan"],2:["Pekerjaan","Lingkungan","Kegiatan ekonomi"],3:["Peta","Keragaman","Kegiatan ekonomi"],4:["Keragaman budaya","Sumber daya","Kegiatan ekonomi"],5:["Keragaman Indonesia","Kegiatan ekonomi","Sejarah"],6:["ASEAN","Globalisasi","Kegiatan ekonomi","Sejarah Indonesia"]}};
const $grade=$("#grade"),$sub=$("#subject"),$topic=$("#topic");
for(let i=1;i<=6;i++)$grade.add(new Option("Kelas "+i,i));
[5,10,15,20,25,30,40,50].forEach(x=>$("#amount").add(new Option(x+" soal",x)));
Object.keys(BANK).forEach(x=>$sub.add(new Option(x,x)));
$grade.value=4;$sub.value="Matematika";updateTopics();
function updateTopics(){$topic.innerHTML="";BANK[$sub.value][$grade.value].forEach(x=>$topic.add(new Option(x,x)))}
$grade.onchange=updateTopics;$sub.onchange=updateTopics;
const R=(a,b)=>Math.floor(Math.random()*(b-a+1))+a, P=a=>a[R(0,a.length-1)], S=a=>[...a].sort(()=>Math.random()-.5);
function q(text,answer,explain){return{text,answer,explain}}
function math(g,t,l){
let max=l=="easy"?20:l=="medium"?100:500,a=R(2,max),b=R(2,max),ans,txt,exp;
if(/Penjumlahan|Bilangan|Operasi/.test(t)){ans=a+b;txt=`Hitung ${a} + ${b} = ...`;exp=`Tambahkan ${a} dan ${b}: hasilnya ${ans}.`}
else if(/Pengurangan/.test(t)){if(b>a)[a,b]=[b,a];ans=a-b;txt=`Hitung ${a} − ${b} = ...`;exp=`${a} dikurangi ${b} = ${ans}.`}
else if(/Perkalian/.test(t)){a=R(2,g<=3?10:20);b=R(2,10);ans=a*b;txt=`Berapakah ${a} × ${b}?`;exp=`${a} × ${b} = ${ans}.`}
else if(/pembagian/.test(t)){b=R(2,10);ans=R(2,15);a=b*ans;txt=`Berapakah ${a} ÷ ${b}?`;exp=`${b} × ${ans} = ${a}, jadi jawabannya ${ans}.`}
else if(/Pecahan/.test(t)){let d=P([2,3,4,5,8,10]),n=R(1,d-1);ans=`${n}/${d}`;txt=`Pecahan yang menunjukkan ${n} bagian dari ${d} bagian sama besar adalah ...`;exp=`Pembilang = ${n}, penyebut = ${d}, jadi ${n}/${d}.`}
else if(/Keliling/.test(t)){let p=R(4,15),l=R(2,10);ans=2*(p+l);txt=`Persegi panjang panjang ${p} cm dan lebar ${l} cm. Berapa kelilingnya?`;exp=`2 × (${p}+${l}) = ${ans} cm.`}
else if(/luas/i.test(t)){let p=R(4,15),l=R(2,10);ans=p*l;txt=`Persegi panjang berukuran ${p} cm × ${l} cm. Berapa luasnya?`;exp=`${p} × ${l} = ${ans} cm².`}
else if(/Volume/.test(t)){let p=R(2,10),l=R(2,8),h=R(2,6);ans=p*l*h;txt=`Balok berukuran ${p} × ${l} × ${h} cm. Berapa volumenya?`;exp=`${p} × ${l} × ${h} = ${ans} cm³.`}
else{ans=R(2,20);txt=`Ibu mempunyai ${a} buah. Ia membeli lagi ${ans} buah. Berapa buah sekarang?`;ans=a+ans;exp=`${a} + ${ans-a} = ${ans}.`}
return q(txt,ans,exp)}
function english(t,seed=0){
const d={
Greetings:["Good morning","Good afternoon","Good evening","Hello","Hi","Goodbye","See you","Thank you","You're welcome","Excuse me","Sorry","How are you?"],
Numbers:["one","two","three","five","seven","ten","twelve","fifteen","twenty","thirty","forty","fifty"],
Colors:["red","blue","green","yellow","black","white","orange","purple","brown","pink","gray","blue"],
Family:["mother","father","sister","brother","grandmother","grandfather","uncle","aunt","cousin","parents"],
Animals:["cat","bird","fish","rabbit","elephant","tiger","lion","monkey","giraffe","horse","cow","chicken"],
"Daily activities":["wake up","study","sleep","eat breakfast","brush my teeth","go to school","read a book","play football","take a bath","do homework","have lunch","go to bed"],
Hobbies:["reading","swimming","drawing","cycling","singing","dancing","cooking","fishing","playing chess","collecting stamps","gardening","playing badminton"],
Places:["school","market","hospital","library","park","bank","museum","station","post office","restaurant","mosque","supermarket"],
"Public places":["library","hospital","police station","post office","bank","market","park","museum","bus station","train station","school","public swimming pool","fire station","town hall","supermarket","restaurant","airport","zoo","clinic","pharmacy"],
Directions:["turn left","turn right","go straight","cross the road","next to","between","in front of","behind","opposite","near","far from","on the corner"],
"Simple present":["She goes to school every day.","He plays football on Sunday.","They study English every morning.","My mother cooks dinner every evening.","Rina reads a book after school.","Budi drinks milk every morning.","The cat sleeps on the sofa.","We clean the classroom every Friday."],
"Past activities":["played football yesterday","visited grandma last Sunday","watched a movie last night","studied English yesterday","cleaned my room this morning","went to the market yesterday","helped my mother yesterday","visited the museum last week"],
Descriptions:["tall","short","kind","friendly","diligent","smart","happy","young","old","strong"],
"Food & drinks":["rice","bread","noodles","chicken","apple","banana","milk","water","juice","tea","soup","egg"]
};
const m={
"Good morning":"selamat pagi","Good afternoon":"selamat siang","Good evening":"selamat sore/malam","Hello":"halo","Hi":"hai","Goodbye":"selamat tinggal","See you":"sampai jumpa","Thank you":"terima kasih","You're welcome":"sama-sama","Excuse me":"permisi","Sorry":"maaf","How are you?":"apa kabar?",
one:"satu",two:"dua",three:"tiga",five:"lima",seven:"tujuh",ten:"sepuluh",twelve:"dua belas",fifteen:"lima belas",twenty:"dua puluh",thirty:"tiga puluh",forty:"empat puluh",fifty:"lima puluh",
red:"merah",blue:"biru",green:"hijau",yellow:"kuning",black:"hitam",white:"putih",orange:"oranye",purple:"ungu",brown:"cokelat",pink:"merah muda",gray:"abu-abu",
mother:"ibu",father:"ayah",sister:"saudara perempuan",brother:"saudara laki-laki",grandmother:"nenek",grandfather:"kakek",uncle:"paman",aunt:"bibi",cousin:"sepupu",parents:"orang tua",
cat:"kucing",bird:"burung",fish:"ikan",rabbit:"kelinci",elephant:"gajah",tiger:"harimau",lion:"singa",monkey:"monyet",giraffe:"jerapah",horse:"kuda",cow:"sapi",chicken:"ayam",
school:"sekolah",market:"pasar",hospital:"rumah sakit",library:"perpustakaan",park:"taman",bank:"bank",museum:"museum",station:"stasiun","post office":"kantor pos",restaurant:"restoran",mosque:"masjid",supermarket:"supermarket","police station":"kantor polisi","bus station":"terminal bus","train station":"stasiun kereta","fire station":"pemadam kebakaran","town hall":"balai kota","public swimming pool":"kolam renang umum",airport:"bandara",zoo:"kebun binatang",clinic:"klinik",pharmacy:"apotek",
"turn left":"belok kiri","turn right":"belok kanan","go straight":"jalan lurus","cross the road":"menyeberang jalan","next to":"di sebelah","between":"di antara","in front of":"di depan","behind":"di belakang",opposite:"berseberangan dengan",near:"dekat","far from":"jauh dari","on the corner":"di pojok",
reading:"membaca",swimming:"berenang",drawing:"menggambar",cycling:"bersepeda",singing:"bernyanyi",dancing:"menari",cooking:"memasak",fishing:"memancing","playing chess":"bermain catur","collecting stamps":"mengoleksi perangko",gardening:"berkebun","playing badminton":"bermain bulu tangkis",
"rice":"nasi",bread:"roti",noodles:"mi",chicken:"ayam",apple:"apel",banana:"pisang",milk:"susu",water:"air",juice:"jus",tea:"teh",soup:"sup",egg:"telur",
tall:"tinggi",short:"pendek",kind:"baik hati",friendly:"ramah",diligent:"rajin",smart:"pintar",happy:"senang",young:"muda",old:"tua",strong:"kuat"
};
const arr=d[t]||["book","school","teacher","house"];
const x=arr[(seed+R(0,arr.length-1))%arr.length];
if(t==="Public places"||t==="Places") return q(`What is “${x}” in Indonesian?`,m[x]||x,`“${x}” berarti “${m[x]||x}”.`);
if(t==="Directions") return q(`What does “${x}” mean in Indonesian?`,m[x]||x,`“${x}” berarti “${m[x]||x}”.`);
if(t==="Simple present") return q(`Which sentence is an example of the simple present tense?`,x,`“${x}” describes a habitual or repeated activity, so it uses the simple present tense.`);
if(t==="Past activities") return q(`Which phrase describes an activity that happened in the past?`,x,`The phrase “${x}” uses a past-time expression or past form.`);
return q(`What does “${x}” mean in Indonesian?`,m[x]||x,`“${x}” berarti “${m[x]||x}”.`)
}
function indo(t){let n=P(["Rani","Bima","Siti","Doni"]),a=P(["membaca buku","menanam bunga","bermain bola","membantu ibu"]);if(/Ide pokok|simpulan/.test(t)){let p=`${n} rajin ${a}. Ia melakukannya setiap sore. Kegiatan itu membuat ${n} menjadi anak yang bertanggung jawab.`;let ans=/Ide/.test(t)?`Kegiatan ${n} yang dilakukan dengan rajin`:`${n} adalah anak yang bertanggung jawab`;return q(`Bacalah teks berikut: “${p}”<br><br>Apa ${/Ide/.test(t)?"ide pokok":"simpulan"} teks tersebut?`,ans,`Jawaban diambil dari gagasan utama teks: ${ans}.`)}return q(`Manakah yang paling tepat untuk menjelaskan ${t.toLowerCase()}?`,"Sesuai dengan pengertian materi tersebut","Pilih pernyataan yang sesuai dengan konsep materi.")}
function pai(t){let m={"Rukun Islam":["Mengucapkan syahadat","Salat","Zakat","Puasa","Haji"],Wudhu:["Membasuh wajah","Membasuh tangan","Mengusap kepala","Membasuh kaki"],"Rukun iman":["Iman kepada Allah","Iman kepada malaikat","Iman kepada kitab","Iman kepada rasul"],Puasa:["Menahan diri dari hal yang membatalkan sejak fajar hingga magrib","Makan sepanjang hari","Tidur sepanjang hari","Bermain tanpa aturan"],Zakat:["Membersihkan harta dan membantu yang membutuhkan","Membeli barang baru","Mengumpulkan mainan","Menghindari tetangga"]};let a=P(m[t]||["berbuat jujur","menolong","bersyukur","menjaga kebersihan"]);return q(`Manakah pernyataan yang benar tentang ${t.toLowerCase()}?`,a,`Pernyataan tersebut sesuai dengan materi ${t.toLowerCase()}.`)}
function other(sub,t){let m={IPAS:{"Tumbuhan":"Tumbuhan membutuhkan air dan cahaya untuk tumbuh","Energi":"Energi dapat berubah bentuk","Ekosistem":"Makhluk hidup dan lingkungan saling berinteraksi"},IPS:{"Pekerjaan":"Petani menghasilkan bahan pangan","Kegiatan ekonomi":"Produksi, distribusi, dan konsumsi","Keragaman budaya":"Indonesia memiliki banyak suku dan budaya"}};let a=m[sub]?.[t]||"Pernyataan yang sesuai dengan konsep materi";return q(`Pilih pernyataan yang paling tepat tentang ${t.toLowerCase()}.`,a,`${a}.`)}
function makeQuestion(seed=0){let l=$("#level").value;if(l=="mixed")l=P(["easy","medium","hard"]);let t=$topic.value,s=$sub.value,g=+$grade.value;return s=="Matematika"?math(g,t,l):s=="Bahasa Inggris"?english(t,seed):s=="Bahasa Indonesia"?indo(t):s=="PAI"?pai(t):other(s,t)}
function opts(x){let w;if(typeof x.answer=="number"){let n=x.answer;w=[n+1,n-1,n+2,n-2]}else w=["Tidak sesuai","Pernyataan lain","Kurang tepat"];return S([x.answer,...w]).slice(0,4)}

let current=[];
let fileQuestions=[];
let fileSourceText="";

function stripHtml(s){return String(s).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim()}
function cleanText(s){return stripHtml(String(s||"")).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g," ").trim()}
function unique(arr){return [...new Set(arr.map(cleanText).filter(Boolean))]}

function parseDelimited(text){
  const lines=text.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
  return lines.map(line=>line.split(/[,;\t|]/).map(x=>x.trim()).filter(Boolean));
}

function buildQuestionsFromText(text){
  const normalized=cleanText(text);
  const blocks=unique(normalized.split(/\n{2,}|(?<=[.!?])\s+(?=[A-ZÀ-Ý0-9])/u));
  const sentences=blocks.flatMap(x=>x.split(/(?<=[.!?])\s+/)).map(cleanText).filter(x=>x.length>=12);
  const source=unique(sentences.length>=2?sentences:blocks);
  const pool=source.length?source:[normalized];
  const out=[];
  const stems=[
    "Berdasarkan materi yang diunggah, manakah pernyataan yang benar?",
    "Manakah informasi yang sesuai dengan materi tersebut?",
    "Pernyataan manakah yang tepat berdasarkan materi?",
    "Pilih informasi yang benar dari materi yang dibaca."
  ];
  pool.forEach((answer,i)=>{
    if(out.length>=100) return;
    const distractors=pool.filter((_,j)=>j!==i).sort(()=>Math.random()-.5).slice(0,3);
    if(distractors.length<3 && pool.length>1){
      while(distractors.length<3)distractors.push(`Informasi lain dari materi: ${pool[(i+distractors.length+1)%pool.length]}`)
    }
    out.push(q(stems[i%stems.length],answer,`Jawaban diambil langsung dari materi yang diunggah: ${answer}`));
  });
  return out;
}

function parseJsonQuestions(data){
  const arr=Array.isArray(data)?data:(Array.isArray(data.questions)?data.questions:[]);
  return arr.map((x,i)=>{
    if(typeof x==='string') return q(`Manakah pernyataan yang sesuai dengan materi?`,x,`Pernyataan tersebut berasal dari file yang diunggah.`);
    const question=x.question||x.pertanyaan||x.text||x.soal;
    const answer=x.answer||x.jawaban||x.correct||x.kunci;
    const explain=x.explain||x.pembahasan||`Jawaban berdasarkan data pada file.`;
    return question&&answer?q(String(question),String(answer),String(explain)):null;
  }).filter(Boolean);
}

function parseCsvQuestions(text){
  const rows=parseDelimited(text);
  if(!rows.length)return [];
  const header=rows[0].map(x=>x.toLowerCase());
  const qi=header.findIndex(x=>/question|pertanyaan|soal/.test(x));
  const ai=header.findIndex(x=>/answer|jawaban|kunci|correct/.test(x));
  const ei=header.findIndex(x=>/explain|pembahasan/.test(x));
  if(qi>=0&&ai>=0){
    return rows.slice(1).map(r=>r[qi]&&r[ai]?q(r[qi],r[ai],r[ei]||"Jawaban berdasarkan data pada file."):null).filter(Boolean)
  }
  return buildQuestionsFromText(rows.map(r=>r.join(" — ")).join("\n"));
}

async function loadPdf(){
  if(window.pdfjsLib)return window.pdfjsLib;
  await new Promise((resolve,reject)=>{
    const sc=document.createElement('script');
    sc.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs';
    sc.type='module';
    sc.onload=resolve;sc.onerror=()=>reject(new Error('Gagal memuat pembaca PDF.'));
    document.head.appendChild(sc);
  });
  if(!window.pdfjsLib) throw new Error('Pembaca PDF belum tersedia. Gunakan TXT/DOCX/CSV/JSON.');
  return window.pdfjsLib;
}

async function readPdf(file){
  // PDF.js module tidak selalu mengekspos global; fallback ke CDN legacy.
  if(!window.pdfjsLib){
    await new Promise((resolve,reject)=>{
      const sc=document.createElement('script');sc.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
      sc.onload=resolve;sc.onerror=()=>reject(new Error('Gagal memuat pembaca PDF.'));document.head.appendChild(sc);
    });
  }
  const pdfjs=window.pdfjsLib;
  if(!pdfjs) throw new Error('PDF tidak dapat dibaca di browser ini.');
  pdfjs.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  const data=await file.arrayBuffer();
  const pdf=await pdfjs.getDocument({data}).promise;
  let text='';
  for(let i=1;i<=pdf.numPages;i++){
    const page=await pdf.getPage(i);const c=await page.getTextContent();
    text+=c.items.map(it=>it.str).join(' ')+'\n';
  }
  return text;
}

async function readDocx(file){
  if(!window.mammoth){
    await new Promise((resolve,reject)=>{
      const sc=document.createElement('script');sc.src='https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.8.0/mammoth.browser.min.js';
      sc.onload=resolve;sc.onerror=()=>reject(new Error('Gagal memuat pembaca DOCX.'));document.head.appendChild(sc);
    });
  }
  if(!window.mammoth)throw new Error('DOCX tidak dapat dibaca di browser ini.');
  const r=await window.mammoth.extractRawText({arrayBuffer:await file.arrayBuffer()});
  return r.value;
}

async function readSourceFile(file){
  const ext=file.name.toLowerCase().split('.').pop();
  if(ext==='txt')return {text:await file.text(),mode:'text'};
  if(ext==='csv')return {text:await file.text(),mode:'csv'};
  if(ext==='json')return {data:JSON.parse(await file.text()),mode:'json'};
  if(ext==='pdf')return {text:await readPdf(file),mode:'text'};
  if(ext==='docx')return {text:await readDocx(file),mode:'text'};
  throw new Error('Format file belum didukung.');
}

async function handleFile(file){
  const status=$("#fileStatus"), btn=$("#generateFile");
  if(!file){status.textContent='Belum ada file.';btn.disabled=true;fileQuestions=[];return}
  status.textContent=`Membaca ${file.name}...`;btn.disabled=true;
  try{
    const parsed=await readSourceFile(file);
    fileQuestions=parsed.mode==='json'?parseJsonQuestions(parsed.data):parsed.mode==='csv'?parseCsvQuestions(parsed.text):buildQuestionsFromText(parsed.text);
    fileSourceText=parsed.text||'';
    if(!fileQuestions.length)throw new Error('Isi file belum cukup untuk membuat soal.');
    status.textContent=`✓ ${file.name} · ${fileQuestions.length} kandidat soal siap.`;
    btn.disabled=false;
  }catch(err){
    fileQuestions=[];status.textContent=`⚠ ${err.message}`;btn.disabled=true;
  }
}

function generateFromFile(){
  const n=+$amount.value;
  if(!fileQuestions.length){
    $("#state").textContent='UPLOAD FILE DULU';
    $("#fileStatus").textContent='⚠ Pilih file materi terlebih dahulu.';
    return;
  }
  const btn=$("#generateFile");
  btn.disabled=true; btn.textContent='MEMBUAT SOAL...';
  try{
    current=[];
    const pool=[...fileQuestions];
    let guard=0;
    while(current.length<n&&guard<n*10){
      guard++;
      if(!pool.length) pool.push(...fileQuestions.map(x=>q(x.text,x.answer,x.explain)));
      const x=pool.splice(R(0,pool.length-1),1)[0];
      const key=stripHtml(x.text)+'|'+String(x.answer);
      if(!current.some(y=>stripHtml(y.text)+'|'+String(y.answer)===key)) current.push(x);
    }
    if(current.length<n){
      let i=0;
      const stems=['Pilih jawaban yang paling tepat berdasarkan materi.','Manakah informasi yang sesuai dengan isi materi?','Pernyataan manakah yang benar berdasarkan materi?','Apa informasi yang dapat ditemukan dalam materi?'];
      while(current.length<n&&i<n*3){
        const base=fileQuestions[i%fileQuestions.length];
        current.push(q(`${stems[i%stems.length]} (${i+1})`,base.answer,base.explain));
        i++;
      }
    }
    if($("#shuffle").checked) current=S(current);
    render('file');
    $("#fileStatus").textContent=`✓ ${$("#sourceFile").files[0]?.name||'File'} · ${current.length} soal berhasil dibuat.`;
  }catch(err){
    console.error(err);
    $("#state").textContent='ERROR';
    $("#fileStatus").textContent='⚠ Gagal membuat soal: '+(err?.message||'kesalahan tidak diketahui');
  }finally{
    btn.disabled=false; btn.innerHTML='GENERATE DARI FILE <b>↗</b>';
  }
}

function generate(){
  // Jika ada file yang sudah berhasil dibaca, tombol GENERATE biasa juga memakai file tersebut.
  if(fileQuestions.length){ generateFromFile(); return; }
  try{
    let n=+$amount.value,set=new Set();current=[];let guard=0;
    while(current.length<n&&guard<n*20){guard++;let x=makeQuestion(guard),key=x.text.replace(/<[^>]*>/g,"");if(!set.has(key)){set.add(key);current.push(x)}}
    if(current.length===0){$("#state").textContent="ERROR";return}
    if($("#shuffle").checked)current=S(current);render('auto');
  }catch(err){
    console.error(err); $("#state").textContent='ERROR';
  }
}

function render(source='auto'){
  $("#empty").classList.add("hidden");$("#result").classList.remove("hidden");$("#state").textContent=source==='file'?'FILE GENERATED':'GENERATED';
  let n=current.length;
  const title=source==='file'?'Soal dari file · '+( $("#sourceFile").files[0]?.name||'Materi upload' ):`${$sub.value} · ${$topic.value}`;
  $("#result").innerHTML=`<div class="result-title"><div><p class="eyebrow">PACKET ${Date.now().toString().slice(-7)}</p><h2>${esc(title)}</h2><div class="meta">Kelas ${esc($grade.value)} · ${n} soal · ${esc($("#level").value)}<div class="chips"><span class="chip">Nilai: ______ / ${n}</span><span class="chip">Tanggal: __________</span>${source==='file'?'<span class="chip">Sumber: file lokal</span>':''}</div></div></div><div class="actions"><button class="accent" onclick="paper()">Lembar soal PDF</button><button onclick="answers()">Kunci + pembahasan PDF</button><button onclick="copyAll()">Salin</button></div></div><div class="questions">${current.map((x,i)=>{let isMC=$("#type").value!="short"&&($("#type").value==="mc"||i%2===0);return `<article class="q"><div class="qline"><div class="num">${i+1}</div><div class="qtext">${esc(String(x.text))}</div></div>${isMC?`<div class="opts">${opts(x).map((o,j)=>`<div class="opt">${"ABCD"[j]}. ${esc(String(o))}</div>`).join("")}</div>`:`<div class="opts"><div class="opt">Jawaban: __________________________________</div></div>`}<div class="solution"><b>Kunci: ${esc(String(x.answer))}</b><br>${esc(String(x.explain||''))}</div></article>`}).join("")}</div>`;
  requestAnimationFrame(()=>$("#result").scrollIntoView({behavior:"smooth",block:"start"}));
}

function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function printMode(cls){document.body.classList.add(cls);window.print();setTimeout(()=>document.body.classList.remove(cls),500)}
function paper(){printMode("paperMode")}function answers(){printMode("answerMode")}
function copyAll(){navigator.clipboard?.writeText(current.map((x,i)=>`${i+1}. ${stripHtml(x.text)}\nKunci: ${x.answer}\nPembahasan: ${stripHtml(x.explain)}`).join("\n\n"));$("#state").textContent="COPIED"}

$("#generate").onclick=generate;
$("#generateFile").onclick=generateFromFile;
$("#sourceFile").onchange=e=>handleFile(e.target.files[0]);
$("#random").onclick=()=>{$grade.value=R(1,6);$sub.value=P(Object.keys(BANK));updateTopics();$topic.value=P(BANK[$sub.value][$grade.value]);$("#amount").value=P([10,15,20,25,30]);$("#level").value=P(["easy","medium","hard","mixed"]);generate()};
$("#theme").onclick=()=>document.body.classList.toggle("light");
