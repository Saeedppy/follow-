function runAtAllPages(){if(!Cookies.get('csrf_token')){$.ajax({url:createNewCsrfToken,type:"POST",dataType:"html",success:function(data){runAtAllPages();}});}
$('div.alert').each(function(){$(this).addClass('show');$(this).parent().slideDown();});$('div.alert').on('close.bs.alert',function(){$(this).parent().slideUp();});if(typeof(telephoneNumber)!="undefined"&&telephoneNumber){$('#phoneNumberLi').removeClass('d-none');$('#phoneNumberLiContact').removeClass('d-none');$('#phoneNumberSpan').html(telephoneNumber);$('#phoneNumberSpanContact').html(telephoneNumber);}
if(typeof(whatsappNumberHref)!="undefined"&&typeof(whatsappNumber)!="undefined"&&whatsappNumberHref&&whatsappNumber){$('#whatsappNumberLi').removeClass('d-none');$('#whatsappNumberLiContact').removeClass('d-none');$('#whatsappNumberSpan').html(whatsappNumber);$('#whatsappNumberSpanContact').html(whatsappNumber);$('#whatsappNumberSpan').attr('href',whatsappNumberHref);$('#whatsappNumberSpanContact').attr('href',whatsappNumberHref);}
if(typeof(telegram)!="undefined"&&telegram){$('#telegramLi').removeClass('d-none');$('#telegramLiContact').removeClass('d-none');$('#telegramSpan').html(telegram);$('#telegramSpanContact').html(telegram);}
$('.hrefDisabled').removeClass('hrefDisabled');$(".myHref").click(function(event){dataProducut=$(this).data("product");if(dataProducut===2030){setTimeout(function(){$('.priceBoxListContainer .priceBoxList .slick-track').css({transform:"translateZ(0)"});},100);}
productSpecial=1;event.preventDefault();});$('#chat-message').val('');setTimeout(function(){$('.custom-chat-mobile .chat-mobile-header').animate({width:0,paddingLeft:0,paddingRight:0},500);},2000);setTimeout(function(){if(typeof chatBotScript!=='undefined'){chatBotCreate();}},500);$(window).scroll(function(){cartAddBtnSticky();});$('.alert-top').bind('DOMSubtreeModified',function(){if($('.alert-top').html()!=''){setTimeout(function(){$('.alert-top').html('');},5000);}});commentCountControl=0;if(Cookies.get('cartControl')!==undefined&&Cookies.get('cartControl')!==''&&cartControlAjax){$.ajax({url:CartControlCookie,type:"POST",data:{cartControl:Cookies.get('cartControl')},dataType:"html",});}
if(Cookies.get('global')===undefined||Cookies.get('global')==null){$('#cartAmount').html(0);}else{globalCookie=JSON.parse(Cookies.get('global'));cartAmount=globalCookie['cartAmount'];if(cartAmount!=null){$('#cartAmount').html(cartAmount);}else{$('#cartAmount').html(0);}}
if(Cookies.get('global')!==undefined&&JSON.parse(Cookies.get('global'))['cartName']!==0){$('#userNav').attr('href',profileHrefOne).attr('title',profileTitleOne);$('#userNameTake').text(profileTitleOne);$('#userLogout').attr('href',userLogoutOne).attr('title',userLogoutTitleOne);$('#userLogoutSpan').text(userLogoutTitleOne);}else{$('#userNav').attr('href',registerUrl).attr('title',registerTitle);$('#userNameTake').text(registerTitle);$('#userLogout').attr('href',loginUrl).attr('title',loginTitle);$('#userLogoutSpan').text(loginTitle);}
$(function(){$('.lazy').lazy();});commentReset();var recaptcha1;var recaptcha2;myCallBack=function(){recaptcha1=grecaptcha.render('gRecaptcha1',{'theme':'light'});recaptcha2=grecaptcha.render('gRecaptcha2',{'theme':'light'});};$(function(){$('[data-toggle="tooltip"]').tooltip();$('#processSteps li').tooltip({template:'<div class="tooltip process-steps-tooltip" role="tooltip">'+
'<div class="arrow"></div>'+
'<div class="tooltip-inner">'+
'</div></div>'});});var offset=1000,offset_opacity=1500,scroll_top_duration=700,$back_to_top=$('.cd-top');$(window).scroll(function(){($(this).scrollTop()>offset)?$back_to_top.addClass('cd-is-visible'):$back_to_top.removeClass('cd-is-visible cd-fade-out');if($(this).scrollTop()>offset_opacity){$back_to_top.addClass('cd-fade-out');}});$back_to_top.on('click',function(event){document.documentElement.style.scrollBehavior='smooth';setTimeout(()=>{window.scroll(0,0);},250)
setTimeout(()=>{document.documentElement.style.scrollBehavior='unset';},2000);});$('.group-btn[href]').click(function(e){if($(window).width()<1200&&$(this).next().length>0){e.preventDefault();menuClick(this);}else{return true;}});$('#searchBtn').attr('data-toggle','collapse');$('#searchList').on('show.bs.collapse',function(){$(this).css({left:'auto',right:$(window).width()-($('[data-target="#searchList"]').offset().left+$('[data-target="#searchList"]').outerWidth())});}).on('shown.bs.collapse',function(){$('#searchFilter').focus();});$('*').click(function(event){if($('#searchList').hasClass('show')&&!$(event.target).is('#searchList')&&!$(event.target).is('#searchBtn')&&!$(event.target).is('#searchList *')&&!$(event.target).is('#searchBtn *')){$('#searchList').collapse('hide');}
if(!$(event.target).is('.menu-buttons')&&!$(event.target).is('.menu-buttons *')){$('.buttons-container').find('.show').animate({height:0},500).removeClass('show').parent().find('.down').removeClass('down');}
if($(window).width()>991){$('#buttonsMoreTab').collapse('hide');}});$('.buttons-container .group-btn').each(function(index,btn){if($(btn).hasClass('btn-outline-submenu')){$(btn).next().attr('style','--sub-level: '+$(btn).next().data('level'))}else{var color='';if($(btn).css('backgroundColor')==='rgba(0, 0, 0, 0)'){color+=$(btn).css('color')}else{color+=$(btn).css('backgroundColor');}
$(btn).next().attr('style','--sub-menu: '+color+'; --sub-level: '+$(btn).next().data('level'))}});$('.menu-selected-container .btn-page').each(function(index,btn){if($(btn).hasClass('btn-outline-submenu')){$(btn).next().attr('style','--sub-level: '+$(btn).next().data('level'))}else{$(btn).next().attr('style','--sub-menu: '+$(btn).css('color')+'; --sub-level: '+$(btn).next().data('level'))}});$('.sss [id^=collapse_]').on('show.bs.collapse',function(){$(this).parent().addClass('selected-faq');}).on('hide.bs.collapse',function(){$(this).parent().removeClass('selected-faq');});showMore();if(localStorage.getItem('topMenuWarning')){$('#top-warning').addClass('d-none');$('#top-warning').removeClass('d-flex')}else{$('#top-warning').removeClass('d-none');$('#top-warning').addClass('d-flex');}}
function menuClick(clicked){var animationDelay=300;if($(window).width()<1200){if($(clicked).next().hasClass('show')||$(clicked).next().hasClass('mobil-show')){$(clicked).next().removeClass('show startShow').animate({height:0},animationDelay,function(){$(clicked).next().find('.show').removeClass('show').height(0);$(clicked).next().removeClass('mobil-show').height(0);});$(clicked).parent().find('.sub-group-btn-icon.down').removeClass('down');}else if(clicked[2]){menuLocation(clicked);}else{if($(clicked).parent().parent().parent().hasClass('buttons-container')){$(clicked).parent().siblings().find('.sub-group-btn-icon.down').removeClass('down');$(clicked).parent().siblings().find('.show').removeClass('show').animate({height:0},animationDelay);}
$(clicked).find('.sub-group-btn-icon').addClass('down');if($(window).width()<768){$(clicked).next().css({left:'-'+($(clicked).offset().left-4)+'px'});$(clicked).next().animate({height:$(clicked).next().children('.menu-buttons').outerHeight()+'px'},animationDelay,function(){$(clicked).next().height('auto');}).addClass('show');}else{$(clicked).next().addClass('show');menuPosition($(clicked).next());}}
return false;}else if(clicked[1]!=undefined){menuLocation(clicked)}}
function menuHover(clicked){if($(window).outerWidth()>=1200){menuPosition($(clicked).next());$(clicked).next().addClass('show');}}
function menuHoverOut(clicked){if($(window).outerWidth()>=1200){$(clicked).parent().siblings().find('.show').removeClass('show');$(clicked).next().removeClass('show');}}
function menuLocation(args){if($(window).outerWidth()>=1200||args[2]){if(args[1]!=''){location.href=args[1];}}}
function menuPosition(menu){if(menu.parent().parent().parent().hasClass('buttons-container')||menu.parent().parent().hasClass('parent-menu')){var menupos=menu.offset();if(menupos&&menupos.left+menu.width()>=$(window).width()){menu.css({right:'0',left:'auto',transform:'unset'});menu.addClass('rightOut');}else if(menupos.left+(menu.parent().width()/2-(menu.width()/2))<=0){menu.css({left:0,transform:'unset'});menu.addClass('leftOut');}else{menu.css({left:'50%',transform:'translateX(-50%)'});}}else{var menupos=menu.children().offset();if(menupos&&menupos.left+menu.width()>$(window).width()){var newpos=-(menu.width()+11);menu.css({left:newpos,padding:'0 11px'});}}
var menupos=menu.offset();if(!menu.parent().hasClass('dropright')&&menupos){var eParentTop=menu.prevObject.offset().top-$(window).scrollTop();menu.css({top:'100%'}).removeClass('bottomOut');if($(window).height()-eParentTop-menu.prevObject.outerHeight()<menu.outerHeight()&&menu.outerHeight()<eParentTop){menu.css({top:'-'+(menu.height()+24)+'px',paddingBottom:'16px'}).addClass('bottomOut');}}}
function alertSuccess(alertSuccessDescription){return '<div class="alert alert-success alert-dismissible fade show" role="alert">'+'<span class="icon-success"></span>'+'<div class="writeText">'+alertSuccessDescription+'</div>'+'<button type="button" class="close" data-dismiss="alert">'+'<span>×</span>'+'</button>'+'</div>';}
function alertDanger(alertDangerDescription){return '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+'<span class="icon-danger"></span>'+'<div class="writeText">'+alertDangerDescription+'</div>'+'<button type="button" class="close" data-dismiss="alert">'+'<span>×</span>'+'</button>'+'</div>';}
function alertWarning(alertWarningDescription){return '<div class="alert alert-warning alert-dismissible fade show" role="alert">'+'<span class="icon-warning"></span>'+'<div class="writeText">'+alertWarningDescription+'</div>'+'<button type="button" class="close" data-dismiss="alert">'+'<span>×</span>'+'</button>'+'</div>';}
function alertInfo(alertInfoDescription){return '<div class="alert alert-info alert-dismissible fade show" role="alert">'+'<span class="icon-info"></span>'+'<div class="writeText">'+alertInfoDescription+'</div>'+'<button type="button" class="close" data-dismiss="alert">'+'<span>×</span>'+'</button>'+'</div>';}
function gRecaptchaRender(wayPost,highlightCategoryId=null){wayPostTake=wayPost;highlightCategoryIdTake=highlightCategoryId;if(typeof grecaptcha==="undefined"||typeof grecaptcha.render!=='function'){setTimeout(function(){gRecaptchaRender(wayPost,highlightCategoryId);},100);}else{var myhtml=document.createElement("div");myhtml.innerHTML='<div class="recaptcha" id="gCaptcha"></div>';swal({showCancelButton:false,showConfirmButton:false,title:securityCheck,html:myhtml,onOpen:function(){grecaptcha.render('gCaptcha',{'sitekey':reCaptcha,'callback':reCaptchaVerify,'expired-callback':reCaptchaVerify,});},}).then(function(result){if(result.dismiss==='cancel'||result.dismiss==='overlay'){$('.check-button-disabled').each(function(element,val){$(val).removeClass('disabled').removeClass('check-button-disabled');});}});return true;}}
function reCaptchaVerify(response){$('#gCaptcha').removeAttr('style');if(response===document.querySelector('#gCaptcha .g-recaptcha-response').value){$('.light-progress').removeClass('d-none-soft');if(wayPostTake==1){FreePostSubmit();}else if(wayPostTake==2){commentPostFunc();}else if(wayPostTake==3){userControl();}else if(wayPostTake==4){couponCodePost();}else if(wayPostTake==5){discountCouponPost();$('.eMailDiscount').hide();$('#discountCoupon').hide();}else if(wayPostTake==6){downloadGetDownload();}else if(wayPostTake==7){downloadGetYoutube();}else if(wayPostTake==8){postAjaxForm();}else if(wayPostTake==9){payCustomer();}else if(wayPostTake==10&&highlightCategoryIdTake!=null){getHighlightCategoryContent(highlightCategoryIdTake);}
swal.close();}
$('#commentAdd').show();}
function gRecapthcaCreate(){$('head').append('<script src="https://www.google.com/recaptcha/api.js?hl='+localeCaptcha+'&render=explicit" data-callback="submitForm"></script>');}
function commentAdd(clicked){$('#commentAdd').hide();var commentName=$("#commentName").val();var commentEmail=$("#commentEmail").val();var commentComment=$("#commentComment").val();var rate=$("input[name='rate']:checked").val();if(commentName!==''&&commentEmail!==''&&commentComment!==''&&rate!==undefined){if(typeof grecaptcha==="undefined"){gRecapthcaCreate();gRecaptchaRender(2);isJqLoaded('gtagSendEvent',['scripts'],['comment_sent']);}else{gRecaptchaRender(2);isJqLoaded('gtagSendEvent',['scripts'],['comment_sent']);}}else{$('#commentAdd').show();$('#commentPostWarning').hide().html(alertDanger(commentPostWarningForm)).slideDown("fast");}}
function commentMake(comments,clicked){var type=clicked[1];var commentsText='';comments.forEach(function(element,val){if(type==0){commentsText+='<div class="review-item" property="review" typeof="Review">';}else{commentsText+='<div class="review-item" vocab="https://schema.org/" typeof="Review">';commentsText+='<div property="itemReviewed" typeof="Organization" class="d-none">';commentsText+='<span property="name">'+element['commentName']+'</span>';commentsText+='</div>';}
commentsText+='<div class="reviewList">';commentsText+='<div class="rate-points">';for(var i=1;i<=element['rate'];i++){commentsText+='<span class="icon-star item-colored"></span>';}
if(element['rate']<5){for(var i=(5-element['rate']);i>0;i--){commentsText+='<span class="icon-star"></span>';}}
commentsText+='</div>';commentsText+='<span property="author" class="d-none" typeof="Person">';commentsText+='<span property="name">'+element['commentName']+'</span>';commentsText+='</span>';commentsText+='<blockquote class="blockquote">';commentsText+='<p class="commentMore" property="reviewBody">'+element['comment']+'</p>';commentsText+='<footer class="blockquote-footer" property="name">'+element['commentName']+'</footer>';commentsText+='</blockquote>';commentsText+='</div>';});$('.reviewList').last().append(commentsText);}
function commentReset(){$('#commentName').val('');$('#commentEmail').val('');$('.icon-star-value').prop('checked',function(){return this.getAttribute('checked')=='checked';});$('#commentComment').val('');}
function commentPostFunc(){if(pageID!=undefined&&pageID!=null&&document.querySelector('#gCaptcha .g-recaptcha-response')){var grecaptchaResponse=document.querySelector('#gCaptcha .g-recaptcha-response').value
var commentName=$('#commentName').val();var commentEmail=$('#commentEmail').val();var commentComment=$('#commentComment').val();var rate=$("input[name='rate']:checked").val();if(!Cookies.get('csrf_token')){$.ajax({url:createNewCsrfToken,type:"POST",dataType:"html",success:function(data){commentPostFunc();}});}
$.ajax({url:commentPost,type:"post",data:{postControl:'post',pageID:pageID,commentName:commentName,commentEmail:commentEmail,commentComment:commentComment,rate:rate,captcha:grecaptchaResponse},dataType:"html",success:function success(data){jsonDataObject=JSON.parse(data);if(jsonDataObject['status']=='success'){$('.commentPost').hide().html('').slideUp("fast");$('#commentPostWarning').hide().html(alertSuccess(commentPostSuccess)).slideDown("fast");}else if(jsonDataObject['status']=='warningForm'){$('#commentPostWarning').hide().html(alertDanger(commentPostWarningForm)).slideDown("fast");grecaptcha.reset();}else if(jsonDataObject['status']=='captchaWarning'){$('#commentPostWarning').hide().html(alertDanger(jsonDataObject['warning'])).slideDown("fast");grecaptcha.reset();}else{commentReset();grecaptcha.reset();$('#commentPostWarning').hide().html(alertDanger(commentPostWarning)).slideDown("fast");}
$('.light-progress').addClass('d-none-soft');},error:function error(data){$('#commentPostWarning').hide().html(alertDanger(commentPostWarning)).slideDown("fast");$('.light-progress').addClass('d-none-soft');grecaptcha.reset();}});}else{$('#commentPostWarning').hide().html(alertDanger(commentPostWarning)).slideDown("fast");$('.light-progress').addClass('d-none-soft');}}
function discountCoupon(){gRecapthcaCreate();gRecaptchaRender(5);}
function discountCouponPost(){var eMailDiscount=$('.eMailDiscount').val();if(eMailDiscount!=''&&typeof grecaptcha!="undefined"&&typeof grecaptcha.getResponse()!="undefined"&&grecaptcha.getResponse()!==''){if(typeof discountCouponPostUrl!==undefined){if(!Cookies.get('csrf_token')){$.ajax({url:createNewCsrfToken,type:"POST",dataType:"html",success:function(data){discountCouponPost();}});}
$.ajax({url:discountCouponPostUrl,type:"post",data:{eMailDiscount:eMailDiscount,captcha:grecaptcha.getResponse()},dataType:"html",success:function success(data){jsonDataObject=JSON.parse(data);if(jsonDataObject){$('.light-progress').addClass('d-none-soft');if(jsonDataObject['status']=='success'){$('.emailWarning').hide().html(alertSuccess(jsonDataObject['statusText'])).slideDown("fast");}else{$('.eMailDiscount').show();$('#discountCoupon').show();$('.emailWarning').hide().html(alertDanger(jsonDataObject['statusText'])).slideDown("fast");}}else{$('.eMailDiscount').show();$('#discountCoupon').show();$('.light-progress').addClass('d-none-soft');$('.emailWarning').hide().html(alertDanger(discountCouponPostWarning)).slideDown("fast");}},error:function error(data){$('.eMailDiscount').show();$('#discountCoupon').show();$('.light-progress').addClass('d-none-soft');$('.emailWarning').hide().html(alertDanger(discountCouponPostWarning)).slideDown("fast");}});}else{discountCouponPost();}}else{$('.light-progress').addClass('d-none-soft');}}
function slickCarousel(){var width=$(window).width();$slick_slider_box=$('.price-list.pricebox:not(.priceboxLoading)');settings_box={prevArrow:'<button class="prev btn bg-transparent p-0 m-0"><i class="icon-angle-down"></i></button>',nextArrow:'<button class="next btn bg-transparent p-0 m-0"><i class="icon-angle-down"></i></button>',centerMode:true,centerPadding:'30px',swipeToSlide:true,speed:0,mobileFirst:true,adaptiveHeight:true,responsive:[{breakpoint:1200,settings:{slidesToShow:5,}},{breakpoint:1024,settings:{slidesToShow:4,}},{breakpoint:768,settings:{slidesToShow:3,}},{breakpoint:576,settings:{slidesToShow:2,}}]};$('.price-list.pricebox.slick-initialized').slick('unslick');$slick_slider_box.parent().removeClass('no-slide');$slick_slider_box.slick(settings_box).parent().next().fadeOut();if(width>1024){if($slick_slider_box.data('slide')>5){$slick_slider_box.slick('slickGoTo',2).slick('slickSetOption',{speed:400});}else{$slick_slider_box.parent().addClass('no-slide');$slick_slider_box.slick('slickSetOption',{speed:400,});}}else if(width>=576&&width<=1024){if($slick_slider_box.data('slide')>3){$slick_slider_box.slick('slickGoTo',1).slick('slickSetOption',{speed:400});}else{$slick_slider_box.slick('slickSetOption',{speed:400,});}}else{$slick_slider_box.slick('slickSetOption',{speed:400});}
$slick_slider_box.on('beforeChange',function(event,slick,currentSlide,nextSlide){slideChange=false;});$slick_slider_box.on('breakpoint',function(event,slick,breakpoint){if(breakpoint&&$slick_slider_box.data('slide')<=slick.breakpointSettings[breakpoint].slidesToShow){$slick_slider_box.parent().addClass('no-slide');}else{$slick_slider_box.parent().removeClass('no-slide');}});$slick_slider_comment=$('.review-list');settings_comment={prevArrow:'<button class="prev btn bg-transparent p-0 m-0"><i class="icon-arrow-right"></i></button>',nextArrow:'<button class="next btn bg-transparent p-0 m-0"><i class="icon-arrow-right"></i></button>',dots:true,infinite:false,adaptiveHeight:true};$slick_slider_comment.each(function(){if($(this).hasClass('slick-slider')){$(this).slick('unslick');}
var id=setInterval(frame,500);function frame(){if(!$('.review-list').hasClass('slick-slider')){$('.review-list').slick(settings_comment);clearInterval(id);}}});$slick_slider_bestsell=$('.bestSell-list.bestsell:not(.slick-slider)');settings_bestsell={prevArrow:'<button class="prev btn bg-transparent p-0 m-0"><i class="icon-angle-down"></i></button>',nextArrow:'<button class="next btn bg-transparent p-0 m-0"><i class="icon-angle-down"></i></button>',centerMode:true,centerPadding:'0',swipeToSlide:true,speed:0,mobileFirst:true,responsive:[{breakpoint:1200,settings:{slidesToShow:4,}},{breakpoint:1024,settings:{slidesToShow:3,}},{breakpoint:768,settings:{slidesToShow:2,}}]};$slick_slider_bestsell.parent().removeClass('no-slide');$slick_slider_bestsell.slick(settings_bestsell).parent().next().fadeOut();if(width>1024){if($slick_slider_bestsell.data('slide')>4){$slick_slider_bestsell.slick('slickGoTo',2).slick('slickSetOption',{speed:400});}else{$slick_slider_bestsell.parent().addClass('no-slide');$slick_slider_bestsell.slick('slickSetOption',{speed:400,});}}else if(width>=576&&width<=1024){if($slick_slider_bestsell.data('slide')>2){$slick_slider_bestsell.slick('slickGoTo',1).slick('slickSetOption',{speed:400});}else{$slick_slider_bestsell.slick('slickSetOption',{speed:400,});}}else{$slick_slider_bestsell.slick('slickSetOption',{speed:400});}
$slick_slider_bestsell=$('.bestSell-list.bestsell:not(.slick-slider)');settings_bestsell={prevArrow:'<button class="prev btn bg-transparent p-0 m-0"><i class="icon-angle-down"></i></button>',nextArrow:'<button class="next btn bg-transparent p-0 m-0"><i class="icon-angle-down"></i></button>',centerMode:true,centerPadding:'0',swipeToSlide:true,speed:0,mobileFirst:true,responsive:[{breakpoint:1200,settings:{slidesToShow:4,}},{breakpoint:1024,settings:{slidesToShow:3,}},{breakpoint:768,settings:{slidesToShow:2,}}]};$slick_slider_bestsell.parent().removeClass('no-slide');$slick_slider_bestsell.slick(settings_bestsell).parent().next().fadeOut();if(width>1024){if($slick_slider_bestsell.data('slide')>4){$slick_slider_bestsell.slick('slickGoTo',2).slick('slickSetOption',{speed:400});}else{$slick_slider_bestsell.parent().addClass('no-slide');$slick_slider_bestsell.slick('slickSetOption',{speed:400,});}}else if(width>=576&&width<=1024){if($slick_slider_bestsell.data('slide')>2){$slick_slider_bestsell.slick('slickGoTo',1).slick('slickSetOption',{speed:400});}else{$slick_slider_bestsell.slick('slickSetOption',{speed:400,});}}else{$slick_slider_bestsell.slick('slickSetOption',{speed:400});}
$slick_slider_recommended=$('.recommendedProduct-list.recommendedProduct:not(.slick-slider)');settings_recommended={prevArrow:'<button class="prev btn bg-transparent p-0 m-0"><i class="icon-angle-down"></i></button>',nextArrow:'<button class="next btn bg-transparent p-0 m-0"><i class="icon-angle-down"></i></button>',slidesToShow:4,};$slick_slider_recommended.slick(settings_recommended);$slick_steps=$('.steps');settings_steps={swipeToSlide:true,mobileFirst:true,arrows:false,dots:true,infinite:false,responsive:[{breakpoint:1199,settings:{slidesToShow:$slick_steps.children().length,}},{breakpoint:768,settings:{slidesToShow:3,}}]}
$slick_steps.slick(settings_steps).on('beforeChange',()=>$('.lazy').lazy());}
function scrollTab(tab){if($(tab).parent().parent().parent().attr('id')!=="buttonsMoreTab"){if($(tab).hasClass('group-btn')){$('html,body').animate({scrollTop:$(tab).offset().top-20});}else{if($('.buttonsMoreTab').hasClass('show')){$('.nav-link.group-btn').click();$('#buttonsMoreTab').on('hidden.bs.collapse',function(){if($(window).width()<1200){$('html,body').animate({scrollTop:$('.tab-content').offset().top-10});}else{$('html,body').animate({scrollTop:$(tab).offset().top-20});}});}else{if($(window).width()<1200){$('html,body').animate({scrollTop:$('.tab-content').offset().top-10});}else{$('html,body').animate({scrollTop:$(tab).offset().top-20});}}
$('.nav-link.active').removeClass('active');}}else{$('.nav-link.active').removeClass('active');if($(window).width()<1200){$('html,body').animate({scrollTop:$('.tab-content').offset().top-10});}
$('.nav-pills:not(.prices-nav) .active').removeClass('active');$('.nav-link.group-btn').addClass('active');}
if($('.buttonsMoreTab').hasClass('show')&&$(tab).parent().parent().parent().attr('id')!=="buttonsMoreTab"&&!$(tab).hasClass('group-btn')){$('.buttonsMoreTab').removeClass('show');}}
function howToPay(thisTake){var gtagEventUrl='';var url=$(thisTake).data('url');var youtubeLink=url.split(/^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/);var vk=url.match(new RegExp(/(\/\/vk\.com\/video_ext\.php\?oid=)/));var vimeo=url.split(/((\/\/vimeo\.com\/|vimeo.com\/video\/?)([0-9]*))/);var dailymotion=url.split(/((\/\/dailymotion\.com\/|dailymotion.com\/video\/?)([a-zA-Z0-9]*))/);youtubeLink=youtubeLink[3];vimeo=vimeo[3];dailymotion=dailymotion[3];if(youtubeLink){swal({html:'<iframe class="how-to-pay" src="https://www.youtube.com/embed/'+youtubeLink+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>',showCancelButton:false,showConfirmButton:false,customClass:'swal-size',showCloseButton:true});gtagEventUrl="https://www.youtube.com/embed/"+youtubeLink;}else if(vk){swal({html:'<iframe class="how-to-pay" src="'+$(thisTake).data('url')+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>',showCancelButton:false,showConfirmButton:false,customClass:'swal-size',showCloseButton:true});gtagEventUrl=$(thisTake).data('url');}else if(vimeo){swal({html:'<iframe class="how-to-pay" src="https://player.vimeo.com/video/'+vimeo+'" frameborder="0" allow="autoplay; fullscreen" allowfullscreen ></iframe>',showCancelButton:false,showConfirmButton:false,customClass:'swal-size',showCloseButton:true});gtagEventUrl="https://player.vimeo.com/video/"+vimeo;}else if(dailymotion){swal({html:'<iframe class="how-to-pay" src="https://www.dailymotion.com/embed/video/'+dailymotion+'" frameborder="0" allow="autoplay; fullscreen" allowfullscreen ></iframe>',showCancelButton:false,showConfirmButton:false,customClass:'swal-size',showCloseButton:true});gtagEventUrl="https://www.dailymotion.com/embed/video/"+dailymotion;}else{$(thisTake).addClass('d-none');}
isJqLoaded('gtagSendEvent',['scripts'],['how_to_buy_icon_clicked',{'step_number':clickedStepHref,'video_url':gtagEventUrl}]);$('.tooltip').css('display','none');}
function howToPayAnimation(){setTimeout(function(){$('#howToTooltip').tooltip('show');},2000);setTimeout(function(){$('#howToTooltip').tooltip('hide');},4000);}
function commentGo(){isJqLoaded('gtagSendEvent',['scripts'],['comment_button_clicked']);$('html,body').animate({scrollTop:$('#commentPost').offset().top-10});}
function analysisToolCheck(clicked){$(clicked[0]).toggleClass('checked');$('.custom-control-input.'+clicked[1]).attr('checked',function(index,attr){return!attr;}).trigger('change');}
function sliderSeoTools(){$('.content-slide').each(function(index,contentSlide){$slick_slider=$(contentSlide);settings={slidesToShow:1,centerMode:$slick_slider.hasClass('slideCenter'),swipeToSlide:true,autoplay:$slick_slider.hasClass('slideAuto')?2000:false,arrows:false,mobileFirst:true,infinite:$slick_slider.hasClass('slideLoop'),dots:$slick_slider.hasClass('slideDots'),responsive:[{breakpoint:1024,settings:"unslick"},{breakpoint:768,settings:{slidesToShow:3,}}]};$slick_slider.slick(settings);});$(window).resize(function(){if(window.innerWidth<=768&&!$('.content-slide').hasClass('slick-slider')){sliderSeoTools();}});$('.content-slide').on('afterChange',function(event,slick,direction){setInterval(()=>{var instance=$('.content-slide .lazy').data("plugin_lazy");instance.update(true);},1);});}
function profileDelete(){if(!Cookies.get('csrf_token')){$.ajax({url:createNewCsrfToken,type:"POST",dataType:"html",success:function(data){profileDelete()}});}
swal({title:profileDeleteSure,text:profileDeleteSureCompletely,showCancelButton:true,confirmButtonColor:'#3085d6',cancelButtonColor:'#d33',confirmButtonText:deleteButton,cancelButtonText:cancelButton,}).then((willDelete)=>{if(willDelete['value']){$.ajax({url:profileDeleteUrl,type:"POST",data:{"_method":"POST"},dataType:"html",beforeSend:function(){swal.fire({html:'<h5>Loading...</h5>',showConfirmButton:false,onRender:function(){$('.swal2-content').prepend(swal_loader);}});},success:function(data){try{dataValue=JSON.parse(data);if((dataValue['status']=='success')){swal({title:dataValue["statusLang"],confirmButtonText:deleteButton,}).then((confirmed)=>{window.location.reload();});}else{swal(dataValue["statusLang"],'',"error");}}catch(err){swal(operationWarning,'',"error");}},error:function(xhr,ajaxOptions,thrownError){swal(operationWarning,'',"error");}});}});}
function searchFunction(thisSearchInput){if(!Cookies.get('csrf_token')){$.ajax({url:createNewCsrfToken,type:"POST",dataType:"html",success:function(data){searchFunction(thisSearchInput);}});}
searchField=$(thisSearchInput).val();if(searchField){String.prototype.turkishToLower=function(){var string=this;var letters={"İ":"i","I":"i","Ş":"ş","Ğ":"ğ","Ü":"ü","Ö":"ö","Ç":"ç"};string=string.replace(/(([İIŞĞÜÇÖ]))+/g,function(letter){return letters[letter];})
return string.toLowerCase();}
searchField=searchField.turkishToLower();}
$.ajax({type:"GET",url:"/search/search.json",dataType:"json",success:function(response){$('#resultSearch')[0].innerHTML='';response=JSON.parse(response);if(searchField===''||searchField.length<2){}else{var searchFieldArray=searchField.split(" ");var searchFieldJoin=searchFieldArray.join("|");var searchFieldArrayTotal=searchFieldArray.length;var searchRegex='(';jQuery.each(searchFieldArray,function(index,item){searchRegexLast='.*';if(index===searchFieldArrayTotal-1){searchRegexLast='';}
searchRegex+='(.*'+searchFieldJoin+')'+searchRegexLast;});searchRegex+=')'
var regex=new RegExp(searchRegex,"i");var searchArray=new Array();$.each(response,function(key,valResult){if(valResult.title.search(regex)!=-1){searchArray.push(valResult);}});if(searchArray.length>0){var searchList='';$.each(searchArray,function(index,item){searchList+='<li><a href="'+item['href']+'" class="search-item">'+item['title']+'</a></li>';});$('#resultSearch')[0].innerHTML=searchList;$('#resultSearch a').mouseover(function(){$(this).focus();});$('#searchFilter').mouseover(function(){$(this).focus();});}}},error:function error(data){$('#resultSearch')[0].innerHTML='';}});}
function chatOpen(){$('#customChat').toggleClass('mobile');$('.cd-top').toggleClass('space-zopim');localStorage.setItem('customChat',$('#customChat').hasClass('mobile'));}
function openZopim(){$('#customChat .custom-chat').addClass('on-connect');$('#customChat .chat-header, #customChat .chat-body').removeAttr('onclick');getQuestion(chatbot_data);}
function getQuestion(questions,level=0){sessionStorage.setItem('chatLog_'+level,JSON.stringify(questions));sessionStorage.setItem('chatLogLevel',level.toString());var list="<ul class='list-unstyled'>";questions.question.forEach(function(item,index){list+='<li class="space-between" onclick=\'isJqLoaded("nextStep", ["frontend"], ["'+index+'", "'+level+'"])\'><span>'+item+'</span><i class="icon-arrow-right"></i></li>';});list+="</ul>";$('#chatLog').html(list);}
function stepTypeRoute(question){let html="<div class='flex-50'><ul class='list-unstyled question'>"+
"<li>"+(question.question?question.question:'')+"</li>"+
"</ul>"+
"<ul class='list-unstyled solution'>"+
"<li>"+(question.description?question.description:'')+"<br><span class='d-block mt-3'>"+
"<a href='"+(question.url?question.url:'')+"' target='_blank'>"+(question.title?question.title:'')+"<i class='icon-external-link ml-1'></i></a></span></li>"+
"</ul></div>";if(question.moreQuestion){html+=moreQuestion(question.moreQuestion);}
$('#chatLog').html(html);}
function chatBotCreate(){if(localStorage.getItem('customChat')&&localStorage.getItem('customChat')=='true'||$(window).width()<1200){$('#customChat').addClass('mobile');$('.cd-top').addClass('space-zopim');}
var nowTime=new Date().getTime();if(localStorage.getItem('chatActive')&&localStorage.getItem('chatActive')=='true'&&localStorage.getItem('openZopimTime')&&localStorage.getItem('openZopimTime')>nowTime){chatCall();}else{$('#customChat').removeClass('d-none');localStorage.removeItem('chatActive');localStorage.removeItem('openZopimTime');sessionStorage.removeItem('callOpen');}}
function chatForm(forms){$('#chatLog').animate({opacity:0},175,function(){$('#chatLog').html();if(forms.length){let html="<form id=\"chatForm\">";const chatSubject=JSON.parse(sessionStorage.getItem('chatLog_'+sessionStorage.getItem('chatLogLevel')));if(chatSubject&&chatSubject.description){html+="<ul class='list-unstyled' style='flex: 0'>"+
"<li>"+chatSubject.description+"</li>"+
"</ul>";}
html+='<input type="hidden" name="subject" value="'+(chatSubject.description?chatSubject.description:'')+'">';forms.forEach(function(form){html+='<div class="form-group">';if(form.name==='message'||form.name==='supportMessage'){html+='<textarea class="form-control" id="'+form.name+'" name="'+form.name+'" placeholder="'+form.label+'" required rows="3"></textarea>';}else{html+='<input class="form-control" id="'+form.name+'" type="text" name="'+form.name+'" placeholder="'+form.label+'" required>';}
html+='</div>';});html+='<button type="button" onclick="isJqLoaded(\'chatCall\', [\'frontend\'], this)" class="btn btn-success btn-block py-2">'+chatConnect+'</button>';html+='</form>';$('#chatLog').html(html);$('#chatLog').animate({opacity:1},175);}else if(forms.question){getQuestion(forms,3);$('#chatLog').animate({opacity:1},175);}else{chatCall();}});}
function chatCall(that){$(that).remove();sessionStorage.setItem('callOpen',true);let message='';$('#chatSpinner').removeClass('d-none');if($('#chatForm')){$('#chatForm').serializeArray().forEach(function(item){if(item.value){if($('#chatForm #'+item.name).attr('placeholder')){message+=$('#chatForm #'+item.name).attr('placeholder')+': \n'+item.value+'\n\n';}else{message+='\n'+item.value+'\n\n';}}});}
$('.open-chat').addClass('d-none').next().removeClass('d-none');isJqLoaded('zopimCreate',['scripts'],message);}
function chatLog(chatLog,level){var html=chatLog?chatLog:sessionStorage.getItem('chatLog_'+level);if(question&&question.moreQuestion){html+=question.moreQuestion;}
$('#chatLog').html(html);}
function moreQuestion(form){const html='<div class="mb-4">'+
'<p class="text-center"><small>'+chatMoreHelp+'</small></p>'+
'<div class="space-between">'+
'<button class="btn btn-outline-success w-100 py-2 mr-3" onclick=\'isJqLoaded("chatForm", ["frontend"], '+JSON.stringify(form)+')\'>'+chatYes+'</button>'+
'<button class="btn btn-outline-danger w-100 py-2" onclick="isJqLoaded(\'chatOpen\', [\'frontend\'], this)">'+chatNo+'</button>'+
'</div>'+
'</div>';return html;}
function nextStep(args){const getQuestions=JSON.parse(sessionStorage.getItem('chatLog_'+args[1])).reply[args[0]];$('#customChat .chat-header').attr('onclick','isJqLoaded(\'prevStep\', [\'frontend\'], '+JSON.stringify(args)+')')
$('#chatLog').animate({opacity:0},175,function(){$('#chatLog').html();if(getQuestions&&getQuestions.type&&getQuestions.type==='route'){stepTypeRoute(getQuestions);sessionStorage.setItem('chatLog_'+(Number(args[1])+1),JSON.stringify(getQuestions));sessionStorage.setItem('chatLogLevel',(Number(args[1])+1).toString());}else if(getQuestions&&getQuestions.type==='question'){getQuestion(getQuestions,(Number(args[1])+1));}else if(getQuestions&&getQuestions.type==='call'){chatCall();}else if(getQuestions&&getQuestions.type==='contact'){chatForm([{"name":"supportName","label":chatName},{"name":"supportSubject","label":chatSubject},{"name":"supportEmail","label":chatEmail},{"name":"supportMessage","label":chatMessage}]);sessionStorage.setItem('chatLog_'+(Number(args[1])+1),JSON.stringify(getQuestions));sessionStorage.setItem('chatLogLevel',(Number(args[1])+1).toString());}else if(getQuestions&&!getQuestions.type){chatForm(getQuestions.moreQuestion);sessionStorage.setItem('chatLog_'+(Number(args[1])+1),JSON.stringify(getQuestions));sessionStorage.setItem('chatLogLevel',(Number(args[1])+1).toString());}
$('#chatLog').animate({opacity:1},175);})}
function prevStep(args){$('#chatLog').animate({opacity:0},175,function(){$('#chatLog').html();const question=JSON.parse(sessionStorage.getItem('chatLog_'+args[1]));if(question.type==='route'){stepTypeRoute(question);}else if(question.type==='question'){getQuestion(question,args[1]);}else if(question.type==='call'){chatCall();}else if(question.type==='contact'){chatForm([{"name":"supportName","label":chatName},{"name":"supportSubject","label":chatSubject},{"name":"supportEmail","label":chatEmail},{"name":"supportMessage","label":chatMessage}]);}else if(!question.type){chatForm([{"name":"email","label":chatEmail},{"name":"message","label":chatMessage}]);}
sessionStorage.removeItem('chatLog_'+(Number(args[1])+1))
sessionStorage.setItem('chatLogLevel',(Number(sessionStorage.getItem('chatLogLevel'))-1).toString());if(args[1]==0){$('#customChat .chat-header').removeAttr('onclick');}else{args[1]=Number(args[1])-1;$('#customChat .chat-header').attr('onclick','isJqLoaded(\'prevStep\', [\'frontend\'], '+JSON.stringify(args)+')')}
$('#chatLog').animate({opacity:1},175);});}
function zopimSet(message){$zopim(function(){if($zopim.livechat.isChatting()){localStorage.setItem('chatActive',true);$zopim.livechat.setOnConnected(function(){var time=new Date().getTime()+43200000;localStorage.setItem('openZopimTime',time);localStorage.setItem('chatActive',true);});}else{$('#customChat').removeClass('d-none');localStorage.removeItem('chatActive');localStorage.removeItem('openZopimTime');}
if(!$zopim.livechat.window.getDisplay()){$zopim.livechat.window.toggle();}else{$zopim.livechat.window.show();}
$('#customChat').addClass('d-none');if(message&&!sessionStorage.getItem('messageSend')){$zopim.livechat.say(message);sessionStorage.setItem('messageSend',true)
message=null;}
$zopim.livechat.setOnChatStart(function(){var time=new Date().getTime()+43200000;localStorage.setItem('openZopimTime',time);localStorage.setItem('chatActive',true);});});}
function cartAddBtnSticky(){if($('.btn-sticky-start').offset()&&$('.btn-sticky-end').offset()){var bottom=Math.floor($(window).scrollTop()+screen.height);var start=Math.floor($('.btn-sticky-start').offset().top);var end=Math.floor($('.btn-sticky-end').offset().top);if($(window).width()<768){if(bottom<end&&bottom>start){$('.takeItNow-btn').addClass('takeItNow-btn-sm');$('.alert-container').addClass('alert-top');}else{$('.takeItNow-btn').removeClass('takeItNow-btn-sm');$('.alert-container').removeClass('alert-top');}}}}
function showMore(){var moretext=showMoreContent;var lesstext=showLessContent;$('.commentMore').each(function(){var showChar=150;var ellipsestext="...";var content=$(this).html();if(content.length>showChar){var c=content.substr(0,showChar);var h=content.substr(showChar,content.length-showChar);var html=c+'<span class="moreellipses">'+ellipsestext+'</span><span class="morecontent d-none-soft">'+h+'</span>';$(this).html(html);var moreButton='<div class="review-button" onclick="isJqLoaded('+"'reviewButton'"+",null,this"+');">'+moretext+'</div>';$(moreButton).insertAfter($(this));}});$('#reviewList.slick-slider').slick('setPosition');}
function reviewButton(clicked){$(clicked).hide().prev().children('.moreellipses').addClass('d-none').next().removeClass('d-none-soft');$('#reviewList.slick-slider').slick('setPosition');}
function productMultiBridge(){$.each($('img[data-productMultiImage]'),function(key,value){let dataImage=value.dataset.productmultiimage;let imageServices='';if(instagramApiUseControl){imageServices="/instagram-images-curl?url="+encodeURIComponent(dataImage);}else{imageServices=`https://corsproxy.io/?${encodeURIComponent(dataImage)}`;}
fetch(imageServices).then(function(dataCode){return dataCode.blob();}).then(function(blob){$(value).removeAttr('data-productMultiImage').attr('src',URL.createObjectURL(blob));});});}
function closeWarning(url){location.href=url;}
loadeds["frontend"]=true;