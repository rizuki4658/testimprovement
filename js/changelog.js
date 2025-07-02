!function(){
  let n=""+document.body.style.overflowY;
  window.showChangelogIframe=(()=>{
    document.getElementById("v-changelog-embed").style.display="block",
    document.getElementById("v-changelog-overlay").style.display= "block",n=""+document.body.style.overflowY
  }),
  window.showChangelogIframeStatic=(()=>{
    setTimeout(()=>{
        document.getElementById("embed-container").style.width ="400px",
        document.getElementById("v-changelog-embed-static").style.width ="400px",
        document.getElementById("embed-header__show").style.opacity="0",
        document.getElementById("embed-header__show").style.visibility="hidden"
      }
    ,500)
  }),
  window.hideChangelogIframe=(()=>{
    document.getElementById("v-changelog-overlay").style.display="none",
    document.getElementById("v-changelog-embed").style.display="none",document.body.style.overflowY=n
  })
  window.hideChangelogIframeStatic=(()=>{
    document.getElementById("embed-container").style.width ="0",
    document.getElementById("embed-header__show").style.opacity="1",
    document.getElementById("embed-header__show").style.visibility="visible",
    document.getElementById("v-changelog-embed-static").style.width="0",
    document.body.style=null
  });

  let o=`https://reusely.com/changelog/embed`;
  window.addChangelogIframe=(()=>{
    document.getElementById("v-changelog-overlay")||(window.addEventListener("message",e => {
      e&&e.data&&"string"==typeof e.data&&("hideChangelogIframe"===e.data&&hideChangelogIframe(),e.data.includes("//")&&window.open(e.data,"_blank"))
    }),
    document.querySelectorAll(".embed-changelog").forEach(e=>{o=e.getAttribute("data-changelog-url")}),
    document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",`<div id="v-changelog-overlay" style="top:0; left:0; position:fixed; z-index:9999; height:100%; width:100%; background-color:rgba(0,0,0,.5)!important; display:none;"></div>\n<div style="top:0; right:0; position:fixed; z-index:999999; height:100vh; width: 400px; display: none;" id="v-changelog-embed">\n    <iframe style="height:100vh; border:0; width:100%" allowfullscreen="" src="https://reusely.com/changelog/embed" id="v-changelog-iframe" data-powered-by="Changelog powered by Versoly. https://versoly.com"></iframe>\n</div>`),document.getElementById("v-changelog-overlay").addEventListener("click",window.hideChangelogIframe))}
  ),
  window.addChangelogIframeStatic=(()=>{
    (window.addEventListener("message",e => {
      e&&e.data&&"string"==typeof e.data&&(e.data.includes("//")&&window.open(e.data,"_blank"))
    }),
    document.getElementsByClassName("embed-static")[0].insertAdjacentHTML("beforeend",`<div id="embed-container" style="width: 400px; height: 100vh; transition: width .3s ease-in-out;"><button style="z-index:99999; position: fixed; right: 8px; top:20px; width: 32px; height: 32px; background-color: #3899EE; border-radius: 50px; box-shadow: 0px 0px 4px 2px #e1e1e1; opacity: 0; visibility: hidden; transition: opacity .3s ease-in-out; display: flex; align-items: center; justify-content: center;" id="embed-header__show" title="What's New?"><span class="material-icons icon-md text-white">chevron_left</span></button><div style="z-index:999998; position: fixed; right: 0; top:0; bottom:0; width: 400px;" id="v-changelog-embed-static">\n    <div style="position: relative;"><div style="position: absolute;right: 0;left: 0;right: 0;background-color: #3899EE; max-height: 70px; padding: 16px; display: flex; align-items:center; justify-content: space-between; z-index:999999;"><a href="https://reusely.com/changelog/" target="_blank" style="font-size: 26px; color: white;">What's New?</a><span id="embed-header__close" style="color: white;cursor: pointer;"><span class="material-icons icon-md">close</span></span></div><iframe style="height:100vh; border:0; width:100%; border-left: 1px solid #D9D9D9;" allowfullscreen="" src="https://reusely.com/changelog/embed" id="v-changelog-iframe-static" data-powered-by="Changelog powered by Versoly. https://versoly.com"  contenteditable></iframe></div>\n</div></div>`)),
    document.body.style.overflowX="hidden",
    document.getElementById("embed-header__close").addEventListener("click",window.hideChangelogIframeStatic),
    document.getElementById("embed-header__show").addEventListener("click",window.showChangelogIframeStatic)}
  ),
  setTimeout(()=>{
    window.addChangelogIframe(),document.querySelectorAll(".embed-changelog").forEach(e=>{
      e.addEventListener("click",e => {
        e.preventDefault(),e.stopPropagation(),window.addChangelogIframe(),
        window.showChangelogIframe()
      })
    })
  },5e3),
  document.querySelectorAll(".embed-changelog").forEach(e=>{
    e.addEventListener("click",e=>{
      e.preventDefault(),e.stopPropagation(),window.addChangelogIframe(),window.showChangelogIframe()
    })
  }),
  document.querySelectorAll(".embed-static").forEach(e=>{
    window.addChangelogIframeStatic()
  })
}();