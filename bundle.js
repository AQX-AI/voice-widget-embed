!function(){const e=document.createElement("script");e.src="client.js",e.async=!0,e.onload=()=>{const e=new Event("apiKeyLoaded");window.dispatchEvent(e)},document.head.appendChild(e);const n=document.createElement("link");n.rel="stylesheet",n.href="styles.css",document.head.appendChild(n),window.addEventListener("apiKeyLoaded",(()=>{window.apiKey="customer-specific-api-key"}))}();