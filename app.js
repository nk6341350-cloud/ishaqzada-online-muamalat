let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e});
document.getElementById("installBtn").onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null}else alert("که نصب مستقیم نه ښکاري، د براوزر د Add to Home Screen / Install App اختیار وکاروئ.")};
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
function go(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}
function openReg(type){document.getElementById("reg").classList.add("on");if(type)document.getElementById("rtype").value=type}
function openAI(){document.getElementById("ai").classList.add("on")}
function closeM(id){document.getElementById(id).classList.remove("on")}
function submitReg(){alert("ستاسو ثبت د اډمین د تایید لپاره واستول شو.");closeM("reg")}
function searchNow(){let q=document.getElementById("q").value.trim();alert(q?("د «"+q+"» لپاره لټون ترسره شو. د اصلي ډیټابیس له نښلولو وروسته به حقیقي پایلې دلته راشي."):"د لټون کلمه ولیکئ.")}
function askAI(){let i=document.getElementById("ask"),q=i.value.trim();if(!q)return;let c=document.getElementById("chat");c.innerHTML+=`<div class="msg"><b>تاسو:</b> ${q}</div>`;let a="زه د اپلیکیشن په اړه مرسته کوم. رهنمایي یا موټر پلورنځی د ثبت له برخې ثبتېږي، بیا اډمین تاییدوي. د اعلان قیمت په افغانیو (AFN) او ډالرو (USD) دواړو ښودل کېږي.";c.innerHTML+=`<div class="msg"><b>AI:</b> ${a}</div>`;i.value="";c.scrollTop=c.scrollHeight}