﻿$(document).ready(function(){$(".image").click(function(){var p=$(this).siblings().attr("src");$(".our-gallery").append("<div class='popup'><div class='popup_bg'></div><img src="+p+" class='popup_img' /></div>"),$(".popup").fadeIn(800),$(".popup_bg").click(function(){$(".popup").fadeOut(800),setTimeout(function(){$(".popup").remove()},800)})})});