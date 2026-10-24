/* RTC Fitness site: store links carry the traffic source so the stores can report it. */
(function(){
var d=document,APPLE_ID="6818820831",PKG="com.richtrimcoaching.rtc",APPLE_PT="";
d.documentElement.classList.add("js");
var page=(location.pathname.split("/").pop()||"index").replace(".html","")||"index";
var utm="utm_source=website&utm_medium=organic&utm_campaign=rtc-oct26&utm_content="+page;
var play="https://play.google.com/store/apps/details?id="+PKG+"&referrer="+encodeURIComponent(utm);
var ios="https://apps.apple.com/app/id"+APPLE_ID+(APPLE_PT?"?pt="+APPLE_PT+"&ct="+encodeURIComponent("website_"+page):"");
[].forEach.call(d.querySelectorAll("[data-play]"),function(a){a.href=play;a.target="_blank";a.rel="noopener"});
[].forEach.call(d.querySelectorAll("[data-ios]"),function(a){a.href=ios;a.target="_blank";a.rel="noopener"});
/* phone visitors: put their store first */
var ua=navigator.userAgent,isI=/iPhone|iPad|iPod/.test(ua)||(/Macintosh/.test(ua)&&navigator.maxTouchPoints>1),isA=/Android/.test(ua);
if(isI||isA){[].forEach.call(d.querySelectorAll(".stores"),function(w){var f=w.querySelector(isI?"[data-ios]":"[data-play]");if(f)w.insertBefore(f,w.firstChild)})}
/* nav */
var b=d.querySelector(".burger"),n=d.querySelector("nav");if(b)b.addEventListener("click",function(){n.classList.toggle("open")});
/* current page */
[].forEach.call(d.querySelectorAll("nav a"),function(a){if(a.getAttribute("href")===(page==="index"?"index.html":page+".html"))a.classList.add("on")});
/* reveal on scroll */
var els=d.querySelectorAll(".rv");
if("IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});[].forEach.call(els,function(e){io.observe(e)})}
else{[].forEach.call(els,function(e){e.classList.add("in")})}
/* billing toggle */
var tg=d.querySelectorAll(".toggle button");
if(tg.length){var P={m:{p:"5.99",u:"/ month",n:"Billed monthly. Cancel any time in your store account."},y:{p:"54",u:"/ year",n:"Just 4.50 a month, billed yearly. Cancel any time."}};
function set(k){[].forEach.call(tg,function(x){x.classList.toggle("on",x.dataset.k===k)});d.getElementById("pp").textContent="€"+P[k].p;d.getElementById("pu").textContent=P[k].u;d.getElementById("pn").textContent=P[k].n}
[].forEach.call(tg,function(x){x.addEventListener("click",function(){set(x.dataset.k)})});set("y")}
})();
