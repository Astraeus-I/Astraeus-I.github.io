<!-- <div hidden id="snipcart" data-api-key="Yjg1ZWE5ZTktNjhmOC00MWE3LWIwYTMtMmQ5ZTQyMDUxNWZkNjM4NDEzMzA1MjMwNzM1MjA5"></div> -->


<script>
  window.SnipcartSettings = {
    publicApiKey: "Yjg1ZWE5ZTktNjhmOC00MWE3LWIwYTMtMmQ5ZTQyMDUxNWZkNjM4NDEzMzA1MjMwNzM1MjA5",
    loadStrategy: "on-user-interaction",
    modalStyle: "side",
    
  };

  (function(){var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var m,g;(g=(m=window.SnipcartSettings).loadCSS)!=null||(m.loadCSS=!0);var y=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,f=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(f.forEach(function(t){return document.addEventListener(t,o)}),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],n=document.querySelector("#snipcart"),i=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),e=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));n||(n=document.createElement("div"),n.id="snipcart",n.setAttribute("hidden","true"),document.body.appendChild(n)),h(n),i||(i=document.createElement("script"),i.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),i.async=!0,t.appendChild(i)),!e&&window.SnipcartSettings.loadCSS&&(e=document.createElement("link"),e.rel="stylesheet",e.type="text/css",e.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),t.prepend(e)),f.forEach(function(v){return document.removeEventListener(v,o)})}function h(t){!y||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
</script>


<div class="header-right">
    <div class="snipcart-container">
        <button class="snipcart-checkout your-custom-button-class">View Cart</button>
        <div class="your-custom-cart-info-class">
            <span class="snipcart-items-count"></span> items - Total: 
            <span class="snipcart-total-price"></span>
        </div>
    </div>
</div>





# 📋 Purchase
Looking to acquire an Astraeus-I board? Explore the options listed below and complete the form to express your interest. 
To ensure functionality, selecting a CPU is mandatory, while opting for an XBEE radio module is discretionary 
(note: the board can operate without a radio module). Rest assured, the board will be equipped with all other essential sensors.


| Category          | Item                                   | Price      | Purchase      |
|-------------------|----------------------------------------|------------|---------------|
| Board Price       | Astraeus-I                             | **$70.00** | <button class="snipcart-add-item" data-item-id="01" data-item-name="Astraeus-I" data-item-price="70.00" data-item-url="product_url" data-item-description="Astreaus-I is a versatile multipurpose board meticulously designed for advanced avionic systems. Embedded with essential sensors, innovative modules, and customizable MicroMod processors, Astraeus-I stands out as an epitome of reliability and efficiency in the realm of avionics." data-item-image="../../assets/Astraeus_Pinout.svg">Add to Cart</button> |
| CPU Prices        | [LPC4078](https://www.nxp.com/products/processors-and-microcontrollers/arm-microcontrollers/general-purpose-mcus/lpc4000-arm-cortex-m4/32-bit-arm-cortex-m4-mcu-up-to-512-kb-flash-96-kb-sram-usb-device-host-otg-ethernet-emc-spifi:LPC4078FET180) **(recommended)**              | **$25.00** | <button class="snipcart-add-item" data-item-id="02" data-item-name="LPC4078" data-item-price="25.00" data-item-url="product_url" data-item-description="LPC4078 is a 32-bit ARM Cortex-M4 MCU up to 512 KB Flash, 96 KB SRAM, USB Device/Host/OTG, Ethernet, EMC, SPIFI" data-item-image="../../assets/micromod.jpeg">Add to Cart</button> |
|                   | [STM32F103RC](https://www.st.com/en/microcontrollers-microprocessors/stm32f103rc.html)     | **$12.00** | (still being developed) |
| XBEE Prices       | [Lower end](https://www.digikey.com/en/products/detail/digi/XBRR-24Z8US/16916111) (up to 3200 meters or 2 miles)| **$38.25**| <button class="snipcart-add-item" data-item-id="04" data-item-name="XBEE Lower End" data-item-price="38.25" data-item-url="product_url" data-item-description="XBEE Lower End (up to 3200 meters or 2 miles)" data-item-image="../../assets/lowend.jpeg">Add to Cart</button> |
|                   | [Middle end](https://www.digikey.com/en/products/detail/digi/XB9X-DMUS-001/5972742) (up to 14.5km or 9 miles)   | **$48.07** | <button class="snipcart-add-item" data-item-id="05" data-item-name="XBEE Middle End" data-item-price="48.07" data-item-url="product_url" data-item-description="XBEE Middle End (up to 14.5km or 9 miles)" data-item-image="../../assets/midend.jpeg">Add to Cart</button> |
|                   | [High end](https://www.digikey.com/en/products/detail/digi/XBP9X-DMUS-001/5972744?WT.z_cid=ref_neda_dkc_buynow_digiintl&utm_source=ecia&utm_medium=aggregator&utm_campaign=digiintl ) (up to 105km or 65 miles)     | **$112.59** | <button class="snipcart-add-item" data-item-id="06" data-item-name="XBEE High End" data-item-price="112.59" data-item-url="product_url" data-item-description="XBEE High End (up to 105km or 65 miles)" data-item-image="../../assets/highend.jpeg">Add to Cart</button> |


!!! question
    Have a question? Ask it on our [Discord](https://discord.gg/7H8FzkXEgZ) server!



