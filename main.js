!function(){$(document).ready(function(){var t=$("#email");t.attr("href","mailto:robert.wise@outlook.com")})}(),function(){$(document).ready(function(){var t,e="fade",n="fast",i="swing",a=$(".external-profile-link"),o=function(){var t=$(this).next(".external-profile-link-text");$(t).removeClass("is-hidden").animate(e,n,i)};$(a).on("mouseenter",function(){if($(window).width()>1200){var e=this;t=window.setTimeout(o.bind(e),250)}}),$(a).on("mouseleave",function(){window.clearTimeout(t);var a=$(this).next(".external-profile-link-text");$(a).addClass("is-hidden").animate(e,n,i)})})}(),function(){$(document).ready(function(){var t=/^(((http:\/\/|https:\/\/)?robwise\.github\.io)|(localhost:)|(\/.*))(\/.*)?/m;$("a").filter(function(){var e=$(this).attr("href");return!t.test(e)}).each(function(){$(this).attr("target","_blank")})})}(),function(t){var e,n={kitId:"ovl2hpu",scriptTimeout:3e3,async:!0,events:!1,classes:!1},i=t.documentElement,a=setTimeout(function(){i.className=i.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"},n.scriptTimeout),o=t.createElement("script"),r=!1,s=t.getElementsByTagName("script")[0];i.className+=" wf-loading",o.src="//use.typekit.net/"+n.kitId+".js",o.async=!0,o.onload=o.onreadystatechange=function(){if(e=this.readyState,!(r||e&&"complete"!=e&&"loaded"!=e)){r=!0,clearTimeout(a);try{Typekit.load(n)}catch(t){}}},s.parentNode.insertBefore(o,s)}(document);