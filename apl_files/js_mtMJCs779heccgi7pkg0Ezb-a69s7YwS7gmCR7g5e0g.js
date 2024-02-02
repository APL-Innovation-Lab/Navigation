(function($,Drupal,drupalSettings){'use strict';Drupal.viewsSlideshow=Drupal.viewsSlideshow||{};var pagerLocation;var slideNum;var error;var excludeMethods;Drupal.viewsSlideshowControls=Drupal.viewsSlideshowControls||{};Drupal.viewsSlideshowControls.play=function(options){try{if(typeof drupalSettings.viewsSlideshowControls[options.slideshowID].top.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowControls[options.slideshowID].top.type].play=='function'){Drupal[drupalSettings.viewsSlideshowControls[options.slideshowID].top.type].play(options);}}
catch(err){}
try{if(typeof drupalSettings.viewsSlideshowControls[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowControls[options.slideshowID].bottom.type].play=='function'){Drupal[drupalSettings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);}}
catch(err){}};Drupal.viewsSlideshowControls.pause=function(options){try{if(typeof drupalSettings.viewsSlideshowControls[options.slideshowID].top.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowControls[options.slideshowID].top.type].pause=='function'){Drupal[drupalSettings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);}}
catch(err){}
try{if(typeof drupalSettings.viewsSlideshowControls[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowControls[options.slideshowID].bottom.type].pause=='function'){Drupal[drupalSettings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);}}
catch(err){}};Drupal.behaviors.viewsSlideshowControlsText={attach:function(context){$('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)',context).addClass('views-slideshow-controls-text-previous-processed').each(function(){var uniqueID=$(this).attr('id').replace('views_slideshow_controls_text_previous_','');$(this).click(function(){Drupal.viewsSlideshow.action({"action":'previousSlide',"slideshowID":uniqueID});return false;});});$('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)',context).addClass('views-slideshow-controls-text-next-processed').each(function(){var uniqueID=$(this).attr('id').replace('views_slideshow_controls_text_next_','');$(this).click(function(){Drupal.viewsSlideshow.action({"action":'nextSlide',"slideshowID":uniqueID});return false;});});$('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)',context).addClass('views-slideshow-controls-text-pause-processed').each(function(){var uniqueID=$(this).attr('id').replace('views_slideshow_controls_text_pause_','');$(this).click(function(){if(drupalSettings.viewsSlideshow[uniqueID].paused){Drupal.viewsSlideshow.action({"action":'play',"slideshowID":uniqueID,"force":true});}
else{Drupal.viewsSlideshow.action({"action":'pause',"slideshowID":uniqueID,"force":true});}
return false;});});}};Drupal.viewsSlideshowControlsText=Drupal.viewsSlideshowControlsText||{};Drupal.viewsSlideshowControlsText.pause=function(options){var pauseText=Drupal.theme.viewsSlideshowControlsPause?Drupal.theme('viewsSlideshowControlsPause'):'';var $element=$('#views_slideshow_controls_text_pause_'+options.slideshowID);$element.find('a').text(pauseText);$element.removeClass('views-slideshow-controls-text-status-play');$element.addClass('views-slideshow-controls-text-status-pause');};Drupal.viewsSlideshowControlsText.play=function(options){var playText=Drupal.theme.viewsSlideshowControlsPlay?Drupal.theme('viewsSlideshowControlsPlay'):'';var $element=$('#views_slideshow_controls_text_pause_'+options.slideshowID);$element.find('a').text(playText);$element.removeClass('views-slideshow-controls-text-status-pause');$element.addClass('views-slideshow-controls-text-status-play');};Drupal.theme.viewsSlideshowControlsPause=function(){return Drupal.t('Resume');};Drupal.theme.viewsSlideshowControlsPlay=function(){return Drupal.t('Pause');};Drupal.viewsSlideshowPager=Drupal.viewsSlideshowPager||{};Drupal.viewsSlideshowPager.transitionBegin=function(options){try{if(typeof drupalSettings.viewsSlideshowPager!="undefined"&&typeof drupalSettings.viewsSlideshowPager[options.slideshowID].top.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin=='function'){Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);}}
catch(err){}
try{if(typeof drupalSettings.viewsSlideshowPager!="undefined"&&typeof drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin=='function'){Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);}}
catch(err){}};Drupal.viewsSlideshowPager.goToSlide=function(options){try{if(typeof drupalSettings.viewsSlideshowPager[options.slideshowID].top.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide=='function'){Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);}}
catch(err){}
try{if(typeof drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide=='function'){Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);}}
catch(err){}};Drupal.viewsSlideshowPager.previousSlide=function(options){try{if(typeof drupalSettings.viewsSlideshowPager[options.slideshowID].top.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide=='function'){Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);}}
catch(err){}
try{if(typeof drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide=='function'){Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);}}
catch(err){}};Drupal.viewsSlideshowPager.nextSlide=function(options){try{if(typeof drupalSettings.viewsSlideshowPager[options.slideshowID].top.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide=='function'){Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);}}
catch(err){}
try{if(typeof drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type!="undefined"&&typeof Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide=='function'){Drupal[drupalSettings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);}}
catch(err){}};Drupal.behaviors.viewsSlideshowPagerFields={attach:function(context){$('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)',context).addClass('views-slideshow-pager-field-processed').each(function(){var pagerInfo=$(this).attr('id').split('_');var location=pagerInfo[2];pagerInfo.splice(0,3);var uniqueID=pagerInfo.join('_');if(drupalSettings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover){$(this).children().each(function(index,pagerItem){var mouseIn=function(){Drupal.viewsSlideshow.action({"action":'goToSlide',"slideshowID":uniqueID,"slideNum":index});Drupal.viewsSlideshow.action({"action":'pause',"slideshowID":uniqueID});};var mouseOut=function(){Drupal.viewsSlideshow.action({"action":'play',"slideshowID":uniqueID});};if(jQuery.fn.hoverIntent){$(pagerItem).hoverIntent(mouseIn,mouseOut);}
else{$(pagerItem).hover(mouseIn,mouseOut);}});}
else{$(this).children().each(function(index,pagerItem){$(pagerItem).click(function(){Drupal.viewsSlideshow.action({"action":'goToSlide',"slideshowID":uniqueID,"slideNum":index});});});}});}};Drupal.viewsSlideshowPagerFields=Drupal.viewsSlideshowPagerFields||{};Drupal.viewsSlideshowPagerFields.transitionBegin=function(options){for(pagerLocation in drupalSettings.viewsSlideshowPager[options.slideshowID]){if(drupalSettings.viewsSlideshowPager[options.slideshowID]){$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').removeClass('active');$('#views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_'+options.slideNum).addClass('active');}}};Drupal.viewsSlideshowPagerFields.goToSlide=function(options){for(pagerLocation in drupalSettings.viewsSlideshowPager[options.slideshowID]){if(drupalSettings.viewsSlideshowPager[options.slideshowID]){$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').removeClass('active');$('#views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_'+options.slideNum).addClass('active');}}};Drupal.viewsSlideshowPagerFields.previousSlide=function(options){for(pagerLocation in drupalSettings.viewsSlideshowPager[options.slideshowID]){if(drupalSettings.viewsSlideshowPager[options.slideshowID]){var pagerNum=$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"].active').attr('id').replace('views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_','');if(pagerNum===0){pagerNum=$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').length()-1;}
else{pagerNum--;}
$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').removeClass('active');$('#views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_'+pagerNum).addClass('active');}}};Drupal.viewsSlideshowPagerFields.nextSlide=function(options){for(pagerLocation in drupalSettings.viewsSlideshowPager[options.slideshowID]){if(drupalSettings.viewsSlideshowPager[options.slideshowID]){var pagerNum=$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"].active').attr('id').replace('views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_','');var totalPagers=$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').length();pagerNum++;if(pagerNum===totalPagers){pagerNum=0;}
$('[id^="views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'"]').removeClass('active');$('#views_slideshow_pager_field_item_'+pagerLocation+'_'+options.slideshowID+'_'+slideNum).addClass('active');}}};Drupal.viewsSlideshowPagerBullets=Drupal.viewsSlideshowPagerFields||{};Drupal.viewsSlideshowSlideCounter=Drupal.viewsSlideshowSlideCounter||{};Drupal.viewsSlideshowSlideCounter.transitionBegin=function(options){$('#views_slideshow_slide_counter_'+options.slideshowID+' .num').text(options.slideNum+1);};Drupal.viewsSlideshow.action=function(options){var status={'value':true,'text':''};if(typeof options.action=='undefined'||options.action===''){status.value=false;status.text=Drupal.t('There was no action specified.');return error;}
if(options.action==='pause'){drupalSettings.viewsSlideshow[options.slideshowID].paused=1;if(options.force){drupalSettings.viewsSlideshow[options.slideshowID].pausedForce=1;}}
else if(options.action==='play'){if(!drupalSettings.viewsSlideshow[options.slideshowID].pausedForce||options.force){drupalSettings.viewsSlideshow[options.slideshowID].paused=0;drupalSettings.viewsSlideshow[options.slideshowID].pausedForce=0;}
else{status.value=false;status.text+=' '+Drupal.t('This slideshow is forced paused.');return status;}}
switch(options.action){case"goToSlide":case"transitionBegin":case"transitionEnd":if(typeof options.slideNum=='undefined'||typeof options.slideNum!=='number'||parseInt(options.slideNum)!==(options.slideNum-0)){status.value=false;status.text=Drupal.t('An invalid integer was specified for slideNum.');}
case"pause":case"play":case"nextSlide":case"previousSlide":var methods=drupalSettings.viewsSlideshow[options.slideshowID]['methods'];var excludeMethodsObj={};if(typeof options.excludeMethods!=='undefined'){for(var i=0;i<excludeMethods.length;i++){excludeMethodsObj[excludeMethods[i]]='';}}
for(var i=0;i<methods[options.action].length;i++){if(Drupal[methods[options.action][i]]!=='undefined'&&typeof Drupal[methods[options.action][i]][options.action]=='function'&&!(methods[options.action][i]in excludeMethodsObj)){Drupal[methods[options.action][i]][options.action](options);}}
break;default:status.value=false;status.text=Drupal.t('An invalid action "@action" was specified.',{"@action":options.action});}
return status;};})(jQuery,Drupal,drupalSettings);;if(typeof JSON!=="object"){JSON={};}
(function(){"use strict";var rx_one=/^[\],:{}\s]*$/;var rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rx_four=/(?:^|:|,)(?:\s*\[)+/g;var rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return(n<10)?"0"+n:n;}
function this_value(){return this.valueOf();}
if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?(this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z"):null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}
var gap;var indent;var meta;var rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?"\""+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})+"\"":"\""+string+"\"";}
function str(key,holder){var i;var k;var v;var length;var mind=gap;var partial;var value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key);}
if(typeof rep==="function"){value=rep.call(holder,key,value);}
switch(typeof value){case"string":return quote(value);case"number":return(isFinite(value))?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null";}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null";}
v=partial.length===0?"[]":gap?("[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]"):"["+partial.join(",")+"]";gap=mind;return v;}
if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+((gap)?": ":":")+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+((gap)?": ":":")+v);}}}}
v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v;}}
if(typeof JSON.stringify!=="function"){meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"};JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" ";}}else if(typeof space==="string"){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify");}
return str("",{"":value});};}
if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k;var v;var value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);rx_dangerous.lastIndex=0;if(rx_dangerous.test(text)){text=text.replace(rx_dangerous,function(a){return("\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4));});}
if(rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,""))){j=eval("("+text+")");return(typeof reviver==="function")?walk({"":j},""):j;}
throw new SyntaxError("JSON.parse");};}}());;;(function($,undefined){"use strict";var ver='3.0.3';function debug(s){if($.fn.cycle.debug)
log(s);}
function log(){if(window.console&&console.log)
console.log('[cycle] '+Array.prototype.join.call(arguments,' '));}
$.expr[':'].paused=function(el){return el.cyclePause;};$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length===0&&options!='stop'){if(!$.isReady&&o.s){log('DOM not ready, queuing slideshow');$(function(){$(o.s,o.c).cycle(options,arg2);});return this;}
log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));return this;}
return this.each(function(){var opts=handleArguments(this,options,arg2);if(opts===false)
return;opts.updateActivePagerLink=opts.updateActivePagerLink||$.fn.cycle.updateActivePagerLink;if(this.cycleTimeout)
clearTimeout(this.cycleTimeout);this.cycleTimeout=this.cyclePause=0;this.cycleStop=0;var $cont=$(this);var $slides=opts.slideExpr?$(opts.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log('terminating; too few slides: '+els.length);return;}
var opts2=buildOptions($cont,$slides,els,opts,o);if(opts2===false)
return;var startTime=opts2.continuous?10:getTimeout(els[opts2.currSlide],els[opts2.nextSlide],opts2,!opts2.backwards);if(startTime){startTime+=(opts2.delay||0);if(startTime<10)
startTime=10;debug('first timeout: '+startTime);this.cycleTimeout=setTimeout(function(){go(els,opts2,0,!opts.backwards);},startTime);}});};function triggerPause(cont,byHover,onPager){var opts=$(cont).data('cycle.opts');if(!opts)
return;var paused=!!cont.cyclePause;if(paused&&opts.paused)
opts.paused(cont,opts,byHover,onPager);else if(!paused&&opts.resumed)
opts.resumed(cont,opts,byHover,onPager);}
function handleArguments(cont,options,arg2){if(cont.cycleStop===undefined)
cont.cycleStop=0;if(options===undefined||options===null)
options={};if(options.constructor==String){switch(options){case'destroy':case'stop':var opts=$(cont).data('cycle.opts');if(!opts)
return false;cont.cycleStop++;if(cont.cycleTimeout)
clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;if(opts.elements)
$(opts.elements).stop();$(cont).removeData('cycle.opts');if(options=='destroy')
destroy(cont,opts);return false;case'toggle':cont.cyclePause=(cont.cyclePause===1)?0:1;checkInstantResume(cont.cyclePause,arg2,cont);triggerPause(cont);return false;case'pause':cont.cyclePause=1;triggerPause(cont);return false;case'resume':cont.cyclePause=0;checkInstantResume(false,arg2,cont);triggerPause(cont);return false;case'prev':case'next':opts=$(cont).data('cycle.opts');if(!opts){log('options not found, "prev/next" ignored');return false;}
if(typeof arg2=='string')
opts.oneTimeFx=arg2;$.fn.cycle[options](opts);return false;default:options={fx:options};}
return options;}
else if(options.constructor==Number){var num=options;options=$(cont).data('cycle.opts');if(!options){log('options not found, can not advance slide');return false;}
if(num<0||num>=options.elements.length){log('invalid slide index: '+num);return false;}
options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}
if(typeof arg2=='string')
options.oneTimeFx=arg2;go(options.elements,options,1,num>=options.currSlide);return false;}
return options;function checkInstantResume(isPaused,arg2,cont){if(!isPaused&&arg2===true){var options=$(cont).data('cycle.opts');if(!options){log('options not found, can not resume');return false;}
if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}
go(options.elements,options,1,!options.backwards);}}}
function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute('filter');}
catch(smother){}}}
function destroy(cont,opts){if(opts.next)
$(opts.next).unbind(opts.prevNextEvent);if(opts.prev)
$(opts.prev).unbind(opts.prevNextEvent);if(opts.pager||opts.pagerAnchorBuilder)
$.each(opts.pagerAnchors||[],function(){this.unbind().remove();});opts.pagerAnchors=null;$(cont).unbind('mouseenter.cycle mouseleave.cycle');if(opts.destroy)
opts.destroy(opts);}
function buildOptions($cont,$slides,els,options,o){var startingSlideSpecified;var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});var meta=$.isFunction($cont.data)?$cont.data(opts.metaAttr):null;if(meta)
opts=$.extend(opts,meta);if(opts.autostop)
opts.countdown=opts.autostopCount||els.length;var cont=$cont[0];$cont.data('cycle.opts',opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];if(!$.support.opacity&&opts.cleartype)
opts.after.push(function(){removeFilter(this,opts);});if(opts.continuous)
opts.after.push(function(){go(els,opts,0,!opts.backwards);});saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg)
clearTypeFix($slides);if($cont.css('position')=='static')
$cont.css('position','relative');if(opts.width)
$cont.width(opts.width);if(opts.height&&opts.height!='auto')
$cont.height(opts.height);if(opts.startingSlide!==undefined){opts.startingSlide=parseInt(opts.startingSlide,10);if(opts.startingSlide>=els.length||opts.startSlide<0)
opts.startingSlide=0;else
startingSlideSpecified=true;}
else if(opts.backwards)
opts.startingSlide=els.length-1;else
opts.startingSlide=0;if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++)
opts.randomMap.push(i);opts.randomMap.sort(function(a,b){return Math.random()-0.5;});if(startingSlideSpecified){for(var cnt=0;cnt<els.length;cnt++){if(opts.startingSlide==opts.randomMap[cnt]){opts.randomIndex=cnt;}}}
else{opts.randomIndex=1;opts.startingSlide=opts.randomMap[1];}}
else if(opts.startingSlide>=els.length)
opts.startingSlide=0;opts.currSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:'absolute',top:0,left:0}).hide().each(function(i){var z;if(opts.backwards)
z=first?i<=first?els.length+(i-first):first-i:els.length-i;else
z=first?i>=first?els.length-(i-first):first-i:els.length-i;$(this).css('z-index',z);});$(els[first]).css('opacity',1).show();removeFilter(els[first],opts);if(opts.fit){if(!opts.aspect){if(opts.width)
$slides.width(opts.width);if(opts.height&&opts.height!='auto')
$slides.height(opts.height);}else{$slides.each(function(){var $slide=$(this);var ratio=(opts.aspect===true)?$slide.width()/$slide.height():opts.aspect;if(opts.width&&$slide.width()!=opts.width){$slide.width(opts.width);$slide.height(opts.width/ratio);}
if(opts.height&&$slide.height()<opts.height){$slide.height(opts.height);$slide.width(opts.height*ratio);}});}}
if(opts.center&&((!opts.fit)||opts.aspect)){$slides.each(function(){var $slide=$(this);$slide.css({"margin-left":opts.width?((opts.width-$slide.width())/2)+"px":0,"margin-top":opts.height?((opts.height-$slide.height())/2)+"px":0});});}
if(opts.center&&!opts.fit&&!opts.slideResize){$slides.each(function(){var $slide=$(this);$slide.css({"margin-left":opts.width?((opts.width-$slide.width())/2)+"px":0,"margin-top":opts.height?((opts.height-$slide.height())/2)+"px":0});});}
var reshape=(opts.containerResize||opts.containerResizeHeight)&&$cont.innerHeight()<1;if(reshape){var maxw=0,maxh=0;for(var j=0;j<els.length;j++){var $e=$(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w)w=e.offsetWidth||e.width||$e.attr('width');if(!h)h=e.offsetHeight||e.height||$e.attr('height');maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}
if(opts.containerResize&&maxw>0&&maxh>0)
$cont.css({width:maxw+'px',height:maxh+'px'});if(opts.containerResizeHeight&&maxh>0)
$cont.css({height:maxh+'px'});}
var pauseFlag=false;if(opts.pause)
$cont.bind('mouseenter.cycle',function(){pauseFlag=true;this.cyclePause++;triggerPause(cont,true);}).bind('mouseleave.cycle',function(){if(pauseFlag)
this.cyclePause--;triggerPause(cont,true);});if(supportMultiTransitions(opts)===false)
return false;var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:($el.height()||this.offsetHeight||this.height||$el.attr('height')||0);this.cycleW=(opts.fit&&opts.width)?opts.width:($el.width()||this.offsetWidth||this.width||$el.attr('width')||0);if($el.is('img')){var loading=(this.cycleH===0&&this.cycleW===0&&!this.complete);if(loading){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ',this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}
else{log('could not determine size of image: '+this.src,this.cycleW,this.cycleH);}}}
return true;});if(requeue)
return false;opts.cssBefore=opts.cssBefore||{};opts.cssAfter=opts.cssAfter||{};opts.cssFirst=opts.cssFirst||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(':eq('+first+')').css(opts.cssBefore);$($slides[first]).css(opts.cssFirst);if(opts.timeout){opts.timeout=parseInt(opts.timeout,10);if(opts.speed.constructor==String)
opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed,10);if(!opts.sync)
opts.speed=opts.speed/2;var buffer=opts.fx=='none'?0:opts.fx=='shuffle'?500:250;while((opts.timeout-opts.speed)<buffer)
opts.timeout+=opts.speed;}
if(opts.easing)
opts.easeIn=opts.easeOut=opts.easing;if(!opts.speedIn)
opts.speedIn=opts.speed;if(!opts.speedOut)
opts.speedOut=opts.speed;opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){if(++opts.randomIndex==els.length)
opts.randomIndex=0;opts.nextSlide=opts.randomMap[opts.randomIndex];}
else if(opts.backwards)
opts.nextSlide=opts.startingSlide===0?(els.length-1):opts.startingSlide-1;else
opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init))
init($cont,$slides,opts);else if(opts.fx!='custom'&&!opts.multiFx){log('unknown transition: '+opts.fx,'; slideshow terminating');return false;}}
var e0=$slides[first];if(!opts.skipInitializationCallbacks){if(opts.before.length)
opts.before[0].apply(e0,[e0,e0,opts,true]);if(opts.after.length)
opts.after[0].apply(e0,[e0,e0,opts,true]);}
if(opts.next)
$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1);});if(opts.prev)
$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0);});if(opts.pager||opts.pagerAnchorBuilder)
buildPager(els,opts);exposeAddSlide(opts,els);return opts;}
function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}
function supportMultiTransitions(opts){var i,tx,txs=$.fn.cycle.transitions;if(opts.fx.indexOf(',')>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,'').split(',');for(i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log('discarding unknown transition: ',fx);opts.fxs.splice(i,1);i--;}}
if(!opts.fxs.length){log('No valid transitions named; slideshow terminating.');return false;}}
else if(opts.fx=='all'){opts.multiFx=true;opts.fxs=[];for(var p in txs){if(txs.hasOwnProperty(p)){tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx))
opts.fxs.push(p);}}}
if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}
debug('randomized fx sequence: ',opts.fxs);}
return true;}
function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount)
opts.countdown++;els[prepend?'unshift':'push'](s);if(opts.els)
opts.els[prepend?'unshift':'push'](s);opts.slideCount=els.length;if(opts.random){opts.randomMap.push(opts.slideCount-1);opts.randomMap.sort(function(a,b){return Math.random()-0.5;});}
$s.css('position','absolute');$s[prepend?'prependTo':'appendTo'](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}
if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg)
clearTypeFix($s);if(opts.fit&&opts.width)
$s.width(opts.width);if(opts.fit&&opts.height&&opts.height!='auto')
$s.height(opts.height);s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager||opts.pagerAnchorBuilder)
$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);if($.isFunction(opts.onAddSlide))
opts.onAddSlide($s);else
$s.hide();};}
$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init))
init(opts.$cont,$(opts.elements),opts);};function go(els,opts,manual,fwd){var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(manual&&opts.busy&&opts.manualTrump){debug('manualTrump in go(), stopping active transition');$(els).stop(true,true);opts.busy=0;clearTimeout(p.cycleTimeout);}
if(opts.busy){debug('transition active, ignoring new tx request');return;}
if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual)
return;if(!manual&&!p.cyclePause&&!opts.bounce&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end)
opts.end(opts);return;}
var changed=false;if((manual||!p.cyclePause)&&(opts.nextSlide!=opts.currSlide)){changed=true;var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(fwd&&(opts.lastFx===undefined||++opts.lastFx>=opts.fxs.length))
opts.lastFx=0;else if(!fwd&&(opts.lastFx===undefined||--opts.lastFx<0))
opts.lastFx=opts.fxs.length-1;fx=opts.fxs[opts.lastFx];}
if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}
$.fn.cycle.resetState(opts,fx);if(opts.before.length)
$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount)return;o.apply(next,[curr,next,opts,fwd]);});var after=function(){opts.busy=0;$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount)return;o.apply(next,[curr,next,opts,fwd]);});if(!p.cycleStop){queueNext();}};debug('tx firing('+fx+'); currSlide: '+opts.currSlide+'; nextSlide: '+opts.nextSlide);opts.busy=1;if(opts.fxFn)
opts.fxFn(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);else if($.isFunction($.fn.cycle[opts.fx]))
$.fn.cycle[opts.fx](curr,next,opts,after,fwd,manual&&opts.fastOnEvent);else
$.fn.cycle.custom(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}
else{queueNext();}
if(changed||opts.nextSlide==opts.currSlide){var roll;opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;opts.randomMap.sort(function(a,b){return Math.random()-0.5;});}
opts.nextSlide=opts.randomMap[opts.randomIndex];if(opts.nextSlide==opts.currSlide)
opts.nextSlide=(opts.currSlide==opts.slideCount-1)?0:opts.currSlide+1;}
else if(opts.backwards){roll=(opts.nextSlide-1)<0;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=1;opts.currSlide=0;}
else{opts.nextSlide=roll?(els.length-1):opts.nextSlide-1;opts.currSlide=roll?0:opts.nextSlide+1;}}
else{roll=(opts.nextSlide+1)==els.length;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=els.length-2;opts.currSlide=els.length-1;}
else{opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}}}
if(changed&&opts.pager)
opts.updateActivePagerLink(opts.pager,opts.currSlide,opts.activePagerClass);function queueNext(){var ms=0,timeout=opts.timeout;if(opts.timeout&&!opts.continuous){ms=getTimeout(els[opts.currSlide],els[opts.nextSlide],opts,fwd);if(opts.fx=='shuffle')
ms-=opts.speedOut;}
else if(opts.continuous&&p.cyclePause)
ms=10;if(ms>0)
p.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.backwards);},ms);}}
$.fn.cycle.updateActivePagerLink=function(pager,currSlide,clsName){$(pager).each(function(){$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);});};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn.call(curr,curr,next,opts,fwd);while(opts.fx!='none'&&(t-opts.speed)<250)
t+=opts.speed;debug('calculated timeout: '+t+'; speed: '+opts.speed);if(t!==false)
return t;}
return opts.timeout;}
$.fn.cycle.next=function(opts){advance(opts,1);};$.fn.cycle.prev=function(opts){advance(opts,0);};function advance(opts,moveForward){var val=moveForward?1:-1;var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}
if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2)
opts.randomIndex=els.length-2;else if(opts.randomIndex==-1)
opts.randomIndex=els.length-1;opts.nextSlide=opts.randomMap[opts.randomIndex];}
else if(opts.random){opts.nextSlide=opts.randomMap[opts.randomIndex];}
else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap)return false;opts.nextSlide=els.length-1;}
else if(opts.nextSlide>=els.length){if(opts.nowrap)return false;opts.nextSlide=0;}}
var cb=opts.onPrevNextEvent||opts.prevNextClick;if($.isFunction(cb))
cb(val>0,opts.nextSlide,els[opts.nextSlide]);go(els,opts,1,moveForward);return false;}
function buildPager(els,opts){var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});opts.updateActivePagerLink(opts.pager,opts.startingSlide,opts.activePagerClass);}
$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a;if($.isFunction(opts.pagerAnchorBuilder)){a=opts.pagerAnchorBuilder(i,el);debug('pagerAnchorBuilder('+i+', el) returned: '+a);}
else
a='<a href="#">'+(i+1)+'</a>';if(!a)
return;var $a=$(a);if($a.parents('body').length===0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone[0]);});$a=$(arr);}
else{$a.appendTo($p);}}
opts.pagerAnchors=opts.pagerAnchors||[];opts.pagerAnchors.push($a);var pagerFn=function(e){e.preventDefault();opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}
var cb=opts.onPagerEvent||opts.pagerClick;if($.isFunction(cb))
cb(opts.nextSlide,els[opts.nextSlide]);go(els,opts,1,opts.currSlide<i);};if(/mouseenter|mouseover/i.test(opts.pagerEvent)){$a.hover(pagerFn,function(){});}
else{$a.bind(opts.pagerEvent,pagerFn);}
if(!/^click/.test(opts.pagerEvent)&&!opts.allowPagerClickBubble)
$a.bind('click.cycle',function(){return false;});var cont=opts.$cont[0];var pauseFlag=false;if(opts.pauseOnPagerHover){$a.hover(function(){pauseFlag=true;cont.cyclePause++;triggerPause(cont,true,true);},function(){if(pauseFlag)
cont.cyclePause--;triggerPause(cont,true,true);});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd)
hops=c>l?c-l:opts.slideCount-l;else
hops=c<l?l-c:l+opts.slideCount-c;return hops;};function clearTypeFix($slides){debug('applying clearType background-color hack');function hex(s){s=parseInt(s,10).toString(16);return s.length<2?'0'+s:s;}
function getBg(e){for(;e&&e.nodeName.toLowerCase()!='html';e=e.parentNode){var v=$.css(e,'background-color');if(v&&v.indexOf('rgb')>=0){var rgb=v.match(/\d+/g);return'#'+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}
if(v&&v!='transparent')
return v;}
return'#ffffff';}
$slides.each(function(){$(this).css('background-color',getBg(this));});}
$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();if(typeof opts.cssBefore.opacity=='undefined')
opts.cssBefore.opacity=1;opts.cssBefore.display='block';if(opts.slideResize&&w!==false&&next.cycleW>0)
opts.cssBefore.width=next.cycleW;if(opts.slideResize&&h!==false&&next.cycleH>0)
opts.cssBefore.height=next.cycleH;opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display='none';$(curr).css('zIndex',opts.slideCount+(rev===true?1:0));$(next).css('zIndex',opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,fwd,speedOverride){var $l=$(curr),$n=$(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut,animInDelay=opts.animInDelay,animOutDelay=opts.animOutDelay;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=='number')
speedIn=speedOut=speedOverride;else
speedIn=speedOut=1;easeIn=easeOut=null;}
var fn=function(){$n.delay(animInDelay).animate(opts.animIn,speedIn,easeIn,function(){cb();});};$l.delay(animOutDelay).animate(opts.animOut,speedOut,easeOut,function(){$l.css(opts.cssAfter);if(!opts.sync)
fn();});if(opts.sync)fn();};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(':eq('+opts.currSlide+')').css('opacity',0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={activePagerClass:'activeSlide',after:null,allowPagerClickBubble:false,animIn:null,animInDelay:0,animOut:null,animOutDelay:0,aspect:false,autostop:0,autostopCount:0,backwards:false,before:null,center:null,cleartype:!$.support.opacity,cleartypeNoBg:false,containerResize:1,containerResizeHeight:0,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:'fade',fxFn:null,height:'auto',manualTrump:true,metaAttr:'cycle',next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:'click.cycle',pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:'click.cycle',random:0,randomizeEffects:1,requeueOnImageNotLoaded:true,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:false,slideExpr:null,slideResize:1,speed:1000,speedIn:null,speedOut:null,startingSlide:undefined,sync:1,timeout:4000,timeoutFn:null,updateActivePagerLink:null,width:null};})(jQuery);(function($){"use strict";$.fn.cycle.transitions.none=function($cont,$slides,opts){opts.fxFn=function(curr,next,opts,after){$(next).show();$(curr).hide();after();};};$.fn.cycle.transitions.fadeout=function($cont,$slides,opts){$slides.not(':eq('+opts.currSlide+')').css({display:'block','opacity':1});opts.before.push(function(curr,next,opts,w,h,rev){$(curr).css('zIndex',opts.slideCount+(rev!==true?1:0));$(next).css('zIndex',opts.slideCount+(rev!==true?0:1));});opts.animIn.opacity=1;opts.animOut.opacity=0;opts.cssBefore.opacity=1;opts.cssBefore.display='block';opts.cssAfter.zIndex=0;};$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css('overflow','hidden');opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore.top=h;opts.cssBefore.left=0;opts.cssFirst.top=0;opts.animIn.top=0;opts.animOut.top=-h;};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css('overflow','hidden');opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst.top=0;opts.cssBefore.top=-h;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.top=h;};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css('overflow','hidden');opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst.left=0;opts.cssBefore.left=w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=0-w;};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css('overflow','hidden');opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst.left=0;opts.cssBefore.left=-w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=w;};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css('overflow','hidden').width();opts.before.push(function(curr,next,opts,fwd){if(opts.rev)
fwd=!fwd;$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst.left=0;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.top=0;};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css('overflow','hidden');opts.before.push(function(curr,next,opts,fwd){if(opts.rev)
fwd=!fwd;$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.left=0;};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.width=0;opts.animIn.width='show';opts.animOut.width=0;};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.height=0;opts.animIn.height='show';opts.animOut.height=0;};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var i,w=$cont.css('overflow','visible').width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});if(!opts.speedAdjusted){opts.speed=opts.speed/2;opts.speedAdjusted=true;}
opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(i=0;i<$slides.length;i++)
opts.els.push($slides[i]);for(i=0;i<opts.currSlide;i++)
opts.els.push(opts.els.shift());opts.fxFn=function(curr,next,opts,cb,fwd){if(opts.rev)
fwd=!fwd;var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){if(fwd)
opts.els.push(opts.els.shift());else
opts.els.unshift(opts.els.pop());}
if(fwd){for(var i=0,len=opts.els.length;i<len;i++)
$(opts.els[i]).css('z-index',len-i+count);}
else{var z=$(curr).css('z-index');$el.css('z-index',parseInt(z,10)+1+count);}
$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb)cb();});});};$.extend(opts.cssBefore,{display:'block',opacity:1,top:0,left:0});};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;opts.animOut.width=next.cycleW;});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.cssBefore.height=0;opts.animIn.top=0;opts.animOut.height=0;};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.height=0;opts.animOut.height=0;};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore.top=0;opts.cssBefore.width=0;opts.animIn.left=0;opts.animOut.width=0;};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});$.extend(opts.cssBefore,{top:0,left:0,width:0});opts.animIn.left=0;opts.animOut.width=0;};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;$.extend(opts.animIn,{top:0,left:0,width:next.cycleW,height:next.cycleH});$.extend(opts.animOut,{width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2});});opts.cssFirst.top=0;opts.cssFirst.left=0;opts.cssBefore.width=0;opts.cssBefore.height=0;};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;$.extend(opts.animIn,{top:0,left:0,width:next.cycleW,height:next.cycleH});});opts.cssBefore.width=0;opts.cssBefore.height=0;opts.animOut.opacity=0;};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css('overflow','hidden').width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore.left=w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=w;};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css('overflow','hidden').height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore.top=h;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.top=h;};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css('overflow','hidden').height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore.top=h;opts.cssBefore.left=w;opts.animIn.top=0;opts.animIn.left=0;opts.animOut.top=h;opts.animOut.left=w;};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn.left=0;opts.animIn.width=this.cycleW;opts.animOut.left=0;});opts.cssBefore.top=0;opts.cssBefore.width=0;};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn.top=0;opts.animIn.height=this.cycleH;opts.animOut.top=0;});opts.cssBefore.height=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn.left=0;opts.animIn.width=this.cycleW;opts.animOut.left=curr.cycleW/2;opts.animOut.width=0;});opts.cssBefore.top=0;opts.cssBefore.width=0;};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn.top=0;opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH/2;opts.animOut.height=0;});opts.cssBefore.height=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||'left';var w=$cont.css('overflow','hidden').width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssAfter.display='';if(d=='right')
opts.cssBefore.left=-w;else if(d=='up')
opts.cssBefore.top=h;else if(d=='down')
opts.cssBefore.top=-h;else
opts.cssBefore.left=w;});opts.animIn.left=0;opts.animIn.top=0;opts.cssBefore.top=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||'left';var w=$cont.css('overflow','hidden').width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=='right')
opts.animOut.left=w;else if(d=='up')
opts.animOut.top=-h;else if(d=='down')
opts.animOut.top=h;else
opts.animOut.left=-w;});opts.animIn.left=0;opts.animIn.top=0;opts.cssBefore.top=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css('overflow','visible').width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top)
$.extend(opts.animOut,{left:w*2,top:-h/2,opacity:0});else
opts.animOut.opacity=0;});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.animIn.left=0;};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css('overflow','hidden').width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip))
clip='rect(0px 0px '+h+'px 0px)';else if(/r2l/.test(opts.clip))
clip='rect(0px '+w+'px '+h+'px '+w+'px)';else if(/t2b/.test(opts.clip))
clip='rect(0px '+w+'px 0px 0px)';else if(/b2t/.test(opts.clip))
clip='rect('+h+'px '+w+'px '+h+'px 0px)';else if(/zoom/.test(opts.clip)){var top=parseInt(h/2,10);var left=parseInt(w/2,10);clip='rect('+top+'px '+left+'px '+top+'px '+left+'px)';}}
opts.cssBefore.clip=opts.cssBefore.clip||clip||'rect(0px 0px 0px 0px)';var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0],10),r=parseInt(d[1],10),b=parseInt(d[2],10),l=parseInt(d[3],10);opts.before.push(function(curr,next,opts){if(curr==next)return;var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display='block';var step=1,count=parseInt((opts.speedIn/13),10)-1;(function f(){var tt=t?t-parseInt(step*(t/count),10):0;var ll=l?l-parseInt(step*(l/count),10):0;var bb=b<h?b+parseInt(step*((h-b)/count||1),10):h;var rr=r<w?r+parseInt(step*((w-r)/count||1),10):w;$next.css({clip:'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)'});(step++<=count)?setTimeout(f,13):$curr.css('display','none');})();});$.extend(opts.cssBefore,{display:'block',opacity:1,top:0,left:0});opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);;(function($,Drupal,drupalSettings){Drupal.behaviors.viewsSlideshowCycle={attach:function(context){$('.views_slideshow_cycle_main:not(.viewsSlideshowCycle-processed)',context).addClass('viewsSlideshowCycle-processed').each(function(){var fullId='#'+$(this).attr('id');var settings=drupalSettings.viewsSlideshowCycle[fullId];settings.targetId='#'+$(fullId+" :first").attr('id');settings.slideshowId=settings.targetId.replace('#views_slideshow_cycle_teaser_section_','');var pager_after_fn=function(curr,next,opts){var slideNum=opts.currSlide;if(typeof settings.processedAfter=='undefined'||!settings.processedAfter){settings.processedAfter=1;slideNum=(typeof settings.opts.startingSlide=='undefined')?0:settings.opts.startingSlide;}
Drupal.viewsSlideshow.action({"action":'transitionEnd',"slideshowID":settings.slideshowId,"slideNum":slideNum});}
var pager_before_fn=function(curr,next,opts){var slideNum=opts.nextSlide;if(settings.remember_slide){createCookie(settings.vss_id,slideNum,settings.remember_slide_days);}
if(!settings.fixed_height){var $ht=$(next).height();$(next).parent().animate({height:$ht});}
if(typeof settings.processedBefore=='undefined'||!settings.processedBefore){settings.processedBefore=1;slideNum=(typeof opts.startingSlide=='undefined')?0:opts.startingSlide;}
Drupal.viewsSlideshow.action({"action":'transitionBegin',"slideshowID":settings.slideshowId,"slideNum":slideNum});}
settings.loaded=false;settings.opts={speed:settings.speed,timeout:settings.timeout,delay:settings.delay,sync:settings.sync,random:settings.random,nowrap:settings.nowrap,after:pager_after_fn,before:pager_before_fn,cleartype:(settings.cleartype)?true:false,cleartypeNoBg:(settings.cleartypenobg)?true:false}
if(settings.remember_slide){var startSlide=readCookie(settings.vss_id);if(startSlide==null){startSlide=0;}
settings.opts.startingSlide=parseInt(startSlide);}
if(settings.effect=='none'){settings.opts.speed=1;}
else{settings.opts.fx=settings.effect;}
var hash=location.hash;if(hash){var hash=hash.replace('#','');var aHash=hash.split(';');var aHashLen=aHash.length;for(var i=0;i<aHashLen;i++){var initialInfo=aHash[i].split(':');if(settings.slideshowId==initialInfo[0]&&settings.num_divs>initialInfo[1]){settings.opts.startingSlide=parseInt(initialInfo[1]);}}}
if(settings.pause){var mouseIn=function(){Drupal.viewsSlideshow.action({"action":'pause',"slideshowID":settings.slideshowId});}
var mouseOut=function(){Drupal.viewsSlideshow.action({"action":'play',"slideshowID":settings.slideshowId});}
if(jQuery.fn.hoverIntent){$('#views_slideshow_cycle_teaser_section_'+settings.vss_id).hoverIntent(mouseIn,mouseOut);}
else{$('#views_slideshow_cycle_teaser_section_'+settings.vss_id).hover(mouseIn,mouseOut);}}
if(settings.pause_on_click){$('#views_slideshow_cycle_teaser_section_'+settings.vss_id).click(function(){Drupal.viewsSlideshow.action({"action":'pause',"slideshowID":settings.slideshowId,"force":true});});}
if(typeof JSON!='undefined'&&typeof settings.advanced_options!='undefined'){var advancedOptions=JSON.parse(settings.advanced_options);for(var option in advancedOptions){switch(option){case"activePagerClass":case"allowPagerClickBubble":case"autostop":case"autostopCount":case"backwards":case"bounce":case"cleartype":case"cleartypeNoBg":case"containerResize":case"continuous":case"delay":case"easeIn":case"easeOut":case"easing":case"fastOnEvent":case"fit":case"fx":case"height":case"manualTrump":case"metaAttr":case"next":case"nowrap":case"pager":case"pagerEvent":case"pause":case"pauseOnPagerHover":case"prev":case"prevNextEvent":case"random":case"randomizeEffects":case"requeueOnImageNotLoaded":case"requeueTimeout":case"rev":case"slideExpr":case"slideResize":case"speed":case"speedIn":case"speedOut":case"startingSlide":case"sync":case"timeout":case"width":var optionValue=advancedOptions[option];optionValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(optionValue);settings.opts[option]=optionValue;break;case"animIn":case"animOut":case"cssBefore":case"cssAfter":case"shuffle":var cssValue=advancedOptions[option];cssValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(cssValue);settings.opts[option]=eval('('+cssValue+')');break;case"after":var afterValue=advancedOptions[option];afterValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(afterValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,forwardFlag){pager_after_fn(currSlideElement,nextSlideElement,options);eval(afterValue);}
break;case"before":var beforeValue=advancedOptions[option];beforeValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(beforeValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,forwardFlag){pager_before_fn(currSlideElement,nextSlideElement,options);eval(beforeValue);}
break;case"end":var endValue=advancedOptions[option];endValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(endValue);settings.opts[option]=function(options){eval(endValue);}
break;case"fxFn":var fxFnValue=advancedOptions[option];fxFnValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(fxFnValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,afterCalback,forwardFlag){eval(fxFnValue);}
break;case"onPagerEvent":var onPagerEventValue=advancedOptions[option];onPagerEventValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPagerEventValue);settings.opts[option]=function(zeroBasedSlideIndex,slideElement){eval(onPagerEventValue);}
break;case"onPrevNextEvent":var onPrevNextEventValue=advancedOptions[option];onPrevNextEventValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(onPrevNextEventValue);settings.opts[option]=function(isNext,zeroBasedSlideIndex,slideElement){eval(onPrevNextEventValue);}
break;case"pagerAnchorBuilder":var pagerAnchorBuilderValue=advancedOptions[option];pagerAnchorBuilderValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerAnchorBuilderValue);settings.opts[option]=function(index,DOMelement){var returnVal='';eval(pagerAnchorBuilderValue);return returnVal;}
break;case"pagerClick":var pagerClickValue=advancedOptions[option];pagerClickValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(pagerClickValue);settings.opts[option]=function(zeroBasedSlideIndex,slideElement){eval(pagerClickValue);}
break;case"paused":var pausedValue=advancedOptions[option];pausedValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(pausedValue);settings.opts[option]=function(cont,opts,byHover){eval(pausedValue);}
break;case"resumed":var resumedValue=advancedOptions[option];resumedValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(resumedValue);settings.opts[option]=function(cont,opts,byHover){eval(resumedValue);}
break;case"timeoutFn":var timeoutFnValue=advancedOptions[option];timeoutFnValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(timeoutFnValue);settings.opts[option]=function(currSlideElement,nextSlideElement,options,forwardFlag){eval(timeoutFnValue);}
break;case"updateActivePagerLink":var updateActivePagerLinkValue=advancedOptions[option];updateActivePagerLinkValue=Drupal.viewsSlideshowCycle.advancedOptionCleanup(updateActivePagerLinkValue);settings.opts[option]=function(pager,currSlideIndex){eval(updateActivePagerLinkValue);}
break;}}}
if(settings.wait_for_image_load){settings.totalImages=$(settings.targetId+' img').length;if(settings.totalImages){settings.loadedImages=0;$(settings.targetId+' img').each(function(){var $imageElement=$(this);$imageElement.bind('load',function(){Drupal.viewsSlideshowCycle.imageWait(fullId);});var imgSrc=$imageElement.attr('src');$imageElement.attr('src','');$imageElement.attr('src',imgSrc);});setTimeout("Drupal.viewsSlideshowCycle.load('"+fullId+"')",settings.wait_for_image_load_timeout);}
else{Drupal.viewsSlideshowCycle.load(fullId);}}
else{Drupal.viewsSlideshowCycle.load(fullId);}});}};Drupal.viewsSlideshowCycle=Drupal.viewsSlideshowCycle||{};Drupal.viewsSlideshowCycle.advancedOptionCleanup=function(value){value=$.trim(value);value=value.replace(/\n/g,'');if(!isNaN(parseInt(value))){value=parseInt(value);}
else if(value.toLowerCase()=='true'){value=true;}
else if(value.toLowerCase()=='false'){value=false;}
return value;}
Drupal.viewsSlideshowCycle.imageWait=function(fullId){if(++drupalSettings.viewsSlideshowCycle[fullId].loadedImages==drupalSettings.viewsSlideshowCycle[fullId].totalImages){Drupal.viewsSlideshowCycle.load(fullId);}};Drupal.viewsSlideshowCycle.load=function(fullId){var settings=drupalSettings.viewsSlideshowCycle[fullId];if(!settings.loaded){$(settings.targetId).cycle(settings.opts);settings.loaded=true;if(settings.start_paused){Drupal.viewsSlideshow.action({"action":'pause',"slideshowID":settings.slideshowId,"force":true});}
if(settings.pause_when_hidden){var checkPause=function(settings){var visible=viewsSlideshowCycleIsVisible(settings.targetId,settings.pause_when_hidden_type,settings.amount_allowed_visible);if(visible){Drupal.viewsSlideshow.action({"action":'play',"slideshowID":settings.slideshowId});}
else{Drupal.viewsSlideshow.action({"action":'pause',"slideshowID":settings.slideshowId});}}
$(window).scroll(function(){checkPause(settings);});$(window).resize(function(){checkPause(settings);});}}};Drupal.viewsSlideshowCycle.pause=function(options){try{if(options.pause_in_middle&&$.fn.pause){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).pause();}
else{$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('pause');}}
catch(e){if(!e instanceof TypeError){throw e;}}};Drupal.viewsSlideshowCycle.play=function(options){drupalSettings.viewsSlideshowCycle['#views_slideshow_cycle_main_'+options.slideshowID].paused=false;if(options.pause_in_middle&&$.fn.resume){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).resume();}
else{$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('resume');}};Drupal.viewsSlideshowCycle.previousSlide=function(options){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('prev');};Drupal.viewsSlideshowCycle.nextSlide=function(options){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle('next');};Drupal.viewsSlideshowCycle.goToSlide=function(options){$('#views_slideshow_cycle_teaser_section_'+options.slideshowID).cycle(options.slideNum);};function IsNumeric(sText){var ValidChars="0123456789";var IsNumber=true;var Char;for(var i=0;i<sText.length&&IsNumber==true;i++){Char=sText.charAt(i);if(ValidChars.indexOf(Char)==-1){IsNumber=false;}}
return IsNumber;}
function createCookie(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
else{var expires="";}
document.cookie=name+"="+value+expires+"; path=/";}
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1,c.length);}
if(c.indexOf(nameEQ)==0){return c.substring(nameEQ.length,c.length);}}
return null;}
function eraseCookie(name){createCookie(name,"",-1);}
function viewsSlideshowCycleIsVisible(elem,type,amountVisible){var docViewTop=$(window).scrollTop();var docViewBottom=docViewTop+$(window).height();var docViewLeft=$(window).scrollLeft();var docViewRight=docViewLeft+$(window).width();var elemTop=$(elem).offset().top;var elemHeight=$(elem).height();var elemBottom=elemTop+elemHeight;var elemLeft=$(elem).offset().left;var elemWidth=$(elem).width();var elemRight=elemLeft+elemWidth;var elemArea=elemHeight*elemWidth;var missingLeft=0;var missingRight=0;var missingTop=0;var missingBottom=0;if(elemLeft<docViewLeft){missingLeft=docViewLeft-elemLeft;}
if(elemRight>docViewRight){missingRight=elemRight-docViewRight;}
if(elemTop<docViewTop){missingTop=docViewTop-elemTop;}
if(elemBottom>docViewBottom){missingBottom=elemBottom-docViewBottom;}
if(type=='full'){return((elemBottom>=docViewTop)&&(elemTop<=docViewBottom)&&(elemBottom<=docViewBottom)&&(elemTop>=docViewTop)&&(elemLeft>=docViewLeft)&&(elemRight<=docViewRight)&&(elemLeft<=docViewRight)&&(elemRight>=docViewLeft));}
else if(type=='vertical'){var verticalShowing=elemHeight-missingTop-missingBottom;if(amountVisible.indexOf('%')){return(((verticalShowing/elemHeight)*100)>=parseInt(amountVisible));}
else{return(verticalShowing>=parseInt(amountVisible));}}
else if(type=='horizontal'){var horizontalShowing=elemWidth-missingLeft-missingRight;if(amountVisible.indexOf('%')){return(((horizontalShowing/elemWidth)*100)>=parseInt(amountVisible));}
else{return(horizontalShowing>=parseInt(amountVisible));}}
else if(type=='area'){var areaShowing=(elemWidth-missingLeft-missingRight)*(elemHeight-missingTop-missingBottom);if(amountVisible.indexOf('%')){return(((areaShowing/elemArea)*100)>=parseInt(amountVisible));}
else{return(areaShowing>=parseInt(amountVisible));}}}})(jQuery,Drupal,drupalSettings);;;(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof module==='object'&&module.exports){module.exports=factory(require('jquery'));}else if(jQuery&&!jQuery.fn.hoverIntent){factory(jQuery);}})(function($){'use strict';var _cfg={interval:100,sensitivity:6,timeout:0};var INSTANCE_COUNT=0;var cX,cY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity){$el.off(s.event,track);delete s.timeoutId;s.isActive=true;ev.pageX=cX;ev.pageY=cY;delete s.pX;delete s.pY;return cfg.over.apply($el[0],[ev]);}else{s.pX=cX;s.pY=cY;s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg);},cfg.interval);}};var delay=function(ev,$el,s,out){var data=$el.data('hoverIntent');if(data){delete data[s.id];}
return out.apply($el[0],[ev]);};var isFunction=function(value){return typeof value==='function';};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++;var cfg=$.extend({},_cfg);if($.isPlainObject(handlerIn)){cfg=$.extend(cfg,handlerIn);if(!isFunction(cfg.out)){cfg.out=cfg.over;}}else if(isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector});}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});}
var handleHover=function(e){var ev=$.extend({},e);var $el=$(this);var hoverIntentData=$el.data('hoverIntent');if(!hoverIntentData){$el.data('hoverIntent',(hoverIntentData={}));}
var state=hoverIntentData[instanceId];if(!state){hoverIntentData[instanceId]=state={id:instanceId};}
if(state.timeoutId){state.timeoutId=clearTimeout(state.timeoutId);}
var mousemove=state.event='mousemove.hoverIntent.hoverIntent'+instanceId;if(e.type==='mouseenter'){if(state.isActive){return;}
state.pX=ev.pageX;state.pY=ev.pageY;$el.off(mousemove,track).on(mousemove,track);state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg);},cfg.interval);}else{if(!state.isActive){return;}
$el.off(mousemove,track);state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out);},cfg.timeout);}};return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover},cfg.selector);};});;