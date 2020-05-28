!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).EasyDrawingBoard=e()}(this,(function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function i(t,e){var n=e.canvasWidth,i=e.canvasHeight,a=e.arrowSize;t.save(),t.beginPath(),t.moveTo(e.points[0].x*n,e.points[0].y*i);for(var o=function(t,e,n,i){!function(t,e){t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var n=1;n<e.length;n++)t.lineTo(e[n].x,e[n].y);t.closePath(),t.fill()}(t,function(t,e,n){var i=Math.atan2(e.y-t.y,e.x-t.x),a=n/3*2,o={x:e.x-Math.round(n*Math.cos(i+.6)),y:e.y-Math.round(n*Math.sin(i+.6))},r={x:e.x-Math.round(n*Math.cos(i-.6)),y:e.y-Math.round(n*Math.sin(i-.6))},s={x:e.x-Math.round(a*Math.cos(i+.3)),y:e.y-Math.round(a*Math.sin(i+.3))};return[t,{x:e.x-Math.round(a*Math.cos(i-.3)),y:e.y-Math.round(a*Math.sin(i-.3))},r,e,o,s]}(n,e,i))},r=1;r<e.points.length;r++)o(t,{x:e.points[r].x*n,y:e.points[r].y*i},{x:e.points[r-1].x*n,y:e.points[r-1].y*i},a);t.restore()}!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}('.__edb-textarea-box {\n  position: absolute;\n  z-index: 101;\n  width: auto;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  word-wrap: break-word;\n  word-break: break-all;\n  color: #aaa;\n  border: 1px dashed gray;\n}\n.__edb-textarea-box .__edb-textarea {\n  resize: none;\n  background: transparent;\n  border: none;\n  padding: 1px;\n  outline: none;\n  font-family: "PingFang SC", "Microsoft YaHei", "微软雅黑";\n  overflow: hidden;\n}\n.__edb-text-pre {\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  left: -9999px;\n  min-width: 100px;\n  display: inline-block;\n  padding: 1px;\n  border: 1px solid red;\n  font-family: "PingFang SC", "Microsoft YaHei", "微软雅黑";\n}\n');var a=function(){function e(){t(this,e)}return n(e,null,[{key:"createEl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1?arguments[1]:void 0,n=e.styles,i=void 0===n?{}:n,a=e.attrs,o=void 0===a?{}:a,r=e.props,s=void 0===r?{}:r,c=document.createElement(t);return Object.keys(i).map((function(t){c.style[t]=i[t]})),Object.keys(o).map((function(t){c.setAttribute(t,o[t])})),Object.keys(s).map((function(t){c[t]=s[t]})),c}},{key:"hasClass",value:function(t,e){return t.classList.contains(e)}},{key:"addClass",value:function(t,e){t.classList.add(e)}},{key:"removeClass",value:function(t,e){t.classList.removeClass(e)}},{key:"setAttr",value:function(t,e,n){t.setAttribute(e,n)}},{key:"delAttr",value:function(t,e){t.removeAttribute(e)}},{key:"appendChild",value:function(t,e){t.appendChild(e)}},{key:"removeChild",value:function(t,e){t.removeChild(e)}}]),e}();return function(){function e(n){t(this,e);var i=n.container,a=n.bgImg,o=void 0===a?"":a,r=n.lineColor,s=void 0===r?"#f00":r,c=n.lineWidth,l=void 0===c?"1":c,h=n.arrowSize,u=void 0===h?15:h,d=n.canvasBgColor,x=void 0===d?"#fff":d,f=n.textFontSize,v=void 0===f?16:f,g=n.textLineHeight,p=void 0===g?20:g,y=n.textColor,m=void 0===y?"#f00":y;if(!i)throw Error("No container element were found...");this.container=i,this.canvas=this.createCanvasEl(i),this.context=this.canvas.getContext("2d"),this.mode="pencil",this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,this.configuration={lineColor:s,lineWidth:l,arrowSize:u,canvasBgColor:x,textFontSize:v,textLineHeight:p,textColor:m},this.arrowPoints=[],this.isDrawing=!1,this.image=new Image,this.bgImg=o,this.textareaEl=null,this.measureEl=null,this.createTextMeasure(),this.init()}return n(e,[{key:"createCanvasEl",value:function(t){var e=a.createEl("canvas",{styles:{height:"".concat(t.clientHeight,"px"),width:"".concat(t.clientWidth,"px")},attrs:{width:t.clientHeight,height:t.clientWidth}});return a.appendChild(t,e),e}},{key:"init",value:function(){var t,e=this,n=null,i=this.canvas.getBoundingClientRect(),a=i.x,o=i.y;this.clear(),this.canvas.addEventListener("mousedown",(function(i){e.isDrawing=!0,e.image.src=e.canvas.toDataURL("image/png");var r=i.clientX,s=i.clientY,c=t=r-a,l=n=s-o;e.context.moveTo(t,n),e.context.lineWidth=e.configuration.lineWidth,e.context.strokeStyle=e.configuration.lineColor,e.context.fillStyle=e.configuration.lineColor,e.context.beginPath(),"arrow"===e.mode&&e.saveArrowPoint({x:t,y:n}),"text"===e.mode&&e.createTextArea({x:c,y:l})})),this.canvas.addEventListener("mousemove",(function(i){if(e.isDrawing){var r=i.clientX,s=i.clientY,c=r-a,l=s-o,h=t,u=n,d=Math.abs(c-t),x=Math.abs(l-n);c<t&&(h=c),l<n&&(u=l);var f={x:c,y:l,originX:t,originY:n,newOriginX:h,newOriginY:u,distanceX:d,distanceY:x},v=e.handleMousemove()[e.mode];v&&v(f)}})),this.canvas.addEventListener("mouseup",(function(){return e.endOfDrawing()})),this.canvas.addEventListener("mouseleave",(function(){return e.endOfDrawing()}))}},{key:"reDraw",value:function(){this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.context.drawImage(this.image,0,0),this.context.beginPath()}},{key:"endOfDrawing",value:function(){this.isDrawing&&(this.context.closePath(),this.isDrawing=!1)}},{key:"drawBackground",value:function(){if(this.bgImg){var t=this,e=new Image;e.setAttribute("crossOrigin","anonymous"),e.src=this.bgImg,e.onload=function(){t.context.drawImage(this,0,0,t.canvasWidth,t.canvasHeight)}}}},{key:"handleMousemove",value:function(){var t=this;return{pencil:function(e){var n=e.x,i=e.y;t.context.lineTo(n,i),t.context.stroke()},straightLine:function(e){var n=e.x,i=e.y,a=e.originX,o=e.originY;t.reDraw(),t.context.moveTo(a,o),t.context.lineTo(n,i),t.context.stroke()},rect:function(e){var n=e.newOriginX,i=e.newOriginY,a=e.distanceX,o=e.distanceY;t.reDraw(),t.context.rect(n,i,a,o),t.context.stroke(),t.context.closePath()},circle:function(e){var n=e.newOriginX,i=e.newOriginY,a=e.distanceX,o=e.distanceY;t.reDraw();var r=Math.sqrt(a*a+o*o);t.context.arc(n+a,i+o,r,0,2*Math.PI),t.context.stroke()},arrow:function(e){var n=e.x,a=e.y;t.reDraw(),t.arrowPoints[1]={x:n/t.canvasWidth,y:a/t.canvasHeight},i(t.context,{points:t.arrowPoints,arrowSize:t.configuration.arrowSize,canvasWidth:t.canvasWidth,canvasHeight:t.canvasHeight})},clear:function(){return t.clear()}}}},{key:"saveArrowPoint",value:function(t){this.arrowPoints=[],this.arrowPoints.push({x:t.x/this.canvasWidth,y:t.y/this.canvasHeight})}},{key:"createTextMeasure",value:function(){this.measureEl&&(a.removeChild(this.container,this.measureEl),this.measureEl=null),this.measureEl=a.createEl("pre",{styles:{fontSize:"".concat(this.configuration.textFontSize,"px"),lineHeight:"".concat(this.configuration.textLineHeight,"px"),color:this.configuration.textColor}}),a.addClass(this.measureEl,"__edb-text-pre"),a.appendChild(this.container,this.measureEl)}},{key:"drawText",value:function(t,e){var n=this;e.font=e.font||'"PingFang SC","Microsoft YaHei","微软雅黑"';var i=e.text;t.save(),t.textBaseline="middle",t.font="".concat(this.configuration.textFontSize,"px/").concat(this.configuration.textLineHeight,"px ").concat(e.font),t.fillStyle=this.configuration.textColor,t.globalCompositeOperation="source-over",i.replace(/<br>/g,"\n").split(/\n/).map((function(i,a){t.fillText(i,e.position.x+2,e.position.y+a*n.configuration.textLineHeight+n.configuration.textLineHeight/2+2)})),t.restore()}},{key:"createTextArea",value:function(t){var e=this;this.mode=null,this.boxDom=a.createEl("div",{styles:{left:"".concat(t.x,"px"),top:"".concat(t.y,"px"),lineHeight:"".concat(this.configuration.textLineHeight,"px"),fontSize:"".concat(this.configuration.textFontSize,"px")}}),a.addClass(this.boxDom,"__edb-textarea-box"),this.textareaEl=a.createEl("textarea",{styles:{lineHeight:"".concat(this.configuration.textLineHeight,"px"),color:this.configuration.textColor,fontSize:"".concat(this.configuration.textFontSize,"px")},props:{placeholder:"请点击输入",autofocus:!0}}),a.addClass(this.textareaEl,"__edb-textarea"),a.appendChild(this.boxDom,this.textareaEl),a.appendChild(this.container,this.boxDom),this.textareaEl.onblur=function(){e.mode=null,a.delAttr(e.textareaEl,"autofocus"),e.drawText(e.context,{text:e.textareaEl.value,position:t}),a.removeChild(e.container,e.boxDom)},this.textareaEl.addEventListener("input",(function(t){e.measureEl.innerHTML=t.target.value+" ",e.textareaEl.style.width=e.measureEl.clientWidth+"px",e.textareaEl.style.height=e.measureEl.clientHeight+"px"}))}},{key:"config",value:function(t,e){this.configuration[t]=e,"canvasBgColor"===t&&this.clear(),("textFontSize"===t||"textColor"===t||"textLineHeight"===t)&&this.createTextMeasure()}},{key:"setMode",value:function(t){this.mode=t}},{key:"generateBase64",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"png";return this.canvas.toDataURL("image/".concat(t))}},{key:"saveImg",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"png",fileName:"canvas_image"},e=a.createEl("a",{attrs:{href:this.canvas.toDataURL("image/".concat(t.type)),download:"".concat(t.fileName,".").concat(t.type)}});e.click()}},{key:"clear",value:function(){this.context.fillStyle=this.configuration.canvasBgColor,this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.drawBackground()}}]),e}()}));
