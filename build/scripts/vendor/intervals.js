var intervalCounter=0,intervalStart=setInterval(function(){var expandCollapseScript,isEmbedded=window.parent.location.href.indexOf("embedded.html")>-1;if(!isEmbedded)return void clearInterval(intervalStart);var isExpandPresent=document.getElementsByClassName("expand-collapse")[0],isJQueryPresent=!!window.jQuery;intervalCounter++,(isExpandPresent&&isJQueryPresent||intervalCounter>50)&&(expandCollapseScript="127.0.0.1"===window.parent.location.hostname?"https://devportal.yaas.io/scripts/general/expand-collapse.js":"/scripts/general/expand-collapse.js",setScriptTag(expandCollapseScript,function(){buildExpandCollapse(window.document);var resizeEvent=new CustomEvent("resizeNeeded");$(".code-toggle").unbind("click").click(function(e){e.preventDefault(),$(this).toggleClass("open-circle"),$(this).parent().find(".expand-collapse").slideToggle(300,function(){window.parent.dispatchEvent(resizeEvent)}),$(this).find(".hyicon-expand, .hyicon-collapse").toggle()})}),clearInterval(intervalStart))},500);