(()=>{const e=document.getElementById("talk-button"),t=document.getElementById("status");document.getElementById("local-audio");let o=null,n=null,a=null;function r(e){t.textContent=e}e.addEventListener("click",(async()=>{if(a)await async function(e){e.stop()}(a),a=null,n&&n.readyState===WebSocket.OPEN&&n.close();else try{a=await async function(){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0});return new MediaRecorder(e,{mimeType:"audio/webm"})}catch(e){throw console.error("Error accessing microphone:",e),e}}(),n=await(async()=>new Promise((async(e,t)=>{r("Connecting..."),await fetch("https://aqx-ai-call-server-dtdwhtb8fcb7g8b0.eastus-01.azurewebsites.net/web",{method:"POST",headers:{"Content-Type":"application/json"}});const n=new WebSocket("wss://aqx-ai-call-server-dtdwhtb8fcb7g8b0.eastus-01.azurewebsites.net");n.addEventListener("open",(()=>{console.log("Client: connected to server"),r("Connected");const t=JSON.stringify({event:"start"});n.send(t),e(n)})),n.onmessage=async e=>{console.log("Message received from server:",e.data);try{const t=JSON.parse(e.data);if("media"===t.event&&t.media.payload){const e=t.media.payload,n=window.atob(e),a=n.length,r=new Uint8Array(a);for(let e=0;e<a;e++)r[e]=n.charCodeAt(e);const c=r.buffer;o||(o=new(window.AudioContext||window.webkitAudioContext));const s=await o.decodeAudioData(c),i=o.createBufferSource();i.buffer=s,i.connect(o.destination),i.start()}}catch(e){console.error("Error handling WebSocket message:",e)}},n.addEventListener("close",(()=>{console.log("Client: disconnected from server"),r("Disconnected")})),n.addEventListener("error",(e=>{console.error("WebSocket error:",e),r("Disconnected"),t(e)}))})))(),await async function(e,t){return new Promise((o=>{e.onstart=()=>{console.log("Client: microphone opened"),document.body.classList.add("recording"),o()},e.onstop=()=>{console.log("Client: microphone closed"),document.body.classList.remove("recording")},e.ondataavailable=async e=>{if(console.log("Client: microphone data received"),e.data.size>0&&t.readyState===WebSocket.OPEN){const o=await e.data.arrayBuffer(),n=new Uint8Array(o),a=btoa(String.fromCharCode(...n)),r=JSON.stringify({event:"media",based:"web",media:{payload:a}});t.send(r)}},e.start(500)}))}(a,n)}catch(e){console.error("Error opening microphone or WebSocket:",e),r("Disconnected")}}))})();