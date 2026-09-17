let deferredPrompt;
addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e});
if("serviceWorker"in navigator)navigator.serviceWorker.register("sw.js");
function closeM(x){document.getElementById(x).classList.remove("on")}
function openReg(t){reg.classList.add("on");if(t)rtype.value=t}
function openAI(){aiBox.classList.add("on")}
function openSearch(){searchBox.classList.add("on")}
function submitReg(){alert("ستاسو معلومات د اډمین د تایید لپاره واستول شول.");closeM("reg")}
function info(x){alert(x+" برخه فعاله ده. د اصلي ډیټابیس سره تر نښلولو وروسته به حقیقي اعلانونه دلته راشي.")}
function doSearch(){alert(q.value?"د «"+q.value+"» لپاره لټون ترسره شو.":"د لټون کلمه ولیکئ.")}
function askAI(){let v=ask.value.trim();if(!v)return;chat.innerHTML+=`<div class="msg"><b>تاسو:</b> ${v}</div><div class="msg"><b>AI:</b> په دې اپ کې رهنمایي معاملات او موټر پلورنځی شته، کاروبار د اډمین تر تایید وروسته فعالېږي، او قیمتونه AFN او USD دواړه ښودل کېږي.</div>`;ask.value="";chat.scrollTop=chat.scrollHeight}
async function installApp(){if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null}else{alert("په iPhone کې Share بیا Add to Home Screen ووهئ. په Android کې Install App وکاروئ.")}}