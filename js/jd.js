


 window.onload = function(){

    //  点击删除按钮 上面的广告栏消失
  var ttop = document.querySelector('.ttop');
  var sc = document.querySelector('.sc');

  sc.onclick = function(){
    ttop.style.display="none";
  }

  var ad = document.querySelector('.ad');
  var ds = document.querySelector('.delsc');

  var dd = 1050;
  var ww = 510;
  var tt = null;
  
  
  ds.onclick = function(){
     tt = setInterval(wm,10);
    function wm() {
    ww+=3;
    if(ww>580){
      ww=580;
      if(ww>=580){
        dd +=2;
        if(dd>=1400){
          dd=1400;
        }
          ad.style.left=dd+"px";
          // ad.style.display="none";
      }
    }
    ad.style.top=ww+"px";
  }
  }



  // 轮播图
 	var c2 = document.querySelector('.c2');
	var ul = document.querySelector('.c2 ul');
	var lis = document.querySelectorAll('.c2 ul li');
	console.log(lis);
	var time = null;
	var index = 0;
	var wd = 590;
	var time = setInterval(fn,1000);
		function fn (){
		index++;
         if(index>lis.length-1){
         	index=0;
         }
          ul.style.left =-(wd*index)+"px";
      }

     ul.onmouseover = function(){
      clearInterval(time);

     }
      ul.onmouseleave = function(){
        clearInterval(time);
        time = setInterval(fn,1000);
    }

    //  出现二维码下载

      var ewm = document.querySelector('.ewm');
      var gzewm = document.querySelector('.gzewm');
      //  出现二维码
      ewm.onmouseover = function(){
      	gzewm.style.display="block";
      }
      // 消失二维码
       gzewm.onmouseout = function(){
      	this.style.display="none";
      }

      var c1 = document.querySelector('.c1');
      var log = document.querySelector('.c1 .log');
      var txt = document.querySelector('.c1 .txt');

      var timer = null;

      log.onmouseover = function(){
        log.style.background="url(img/dtjd.gif)";
        log.style.backgroundSize="cover";

        timer = setInterval(fx,3000);
        function fx(){
            txt.style.display="block";
        }

        txt.onmouseover = function(){
          this.style.display="block";
        }
        // txt.onmouseleave = function(){
        //   this.style.display="none";
        // }

      }

       log.onmouseout = function(){
        this.style.background="url(img/jdg.png)";
        this.style.backgroundSize="cover";
         txt.style.display="none";
         clearInterval(timer);
      }
      
      // 促销和公告切换内容

      var s1 = document.querySelector('.p3 .s1');
      var s2 = document.querySelector('.p3 .s2');
      var gg = document.querySelector('.gg');
      var gg1 = document.querySelector('.gg .gg1');
      var gg2 = document.querySelector('.gg .gg2');

      s1.onmouseover = function(){
        gg1.style.display="block";
        gg2.style.display="none"
      }

      s2.onmouseover = function(){
        gg2.style.display="block";
        gg1.style.display="none"
      }


      // 京东小红点的显示与消失  

      var rm = document.querySelector('.rm');
      var yd = document.querySelector('.yd');
      var ydn = document.querySelector('.ydn');

      ydn.onmouseover = function(){
        yd.style.display="none";
      }

      ydn.onmouseleave = function(){
        yd.style.display="block";
      }

      // 左边的图片伸张开来

      var lph = document.querySelector('.lph');  // 触碰左边的图片
      var ppr = document.querySelector('.ppr');  // 要伸展的图片
      var del = document.querySelector('.del');
      var bd = document.getElementsByName('body');
      var jj = 0;      // 开始增加的值
      var tt = null;   // 定时器为空

         //  dx是缩回去的函数执行代码
      function dx(){   
        jj-=10;
        if(jj<0){
          jj=0;
          clearInterval(tt);
          return;
        }
         ppr.style.width=jj+"px";     // 宽度随着jj递减
      }

      //  dxx是伸展开来执行的代码
      function dxx(){
        jj+=10;
        if(jj>790){
          jj=790;
          clearInterval(tt);
          return;
        }
          ppr.style.width=jj+"px";
      }
      //  触碰左边的图片 右边的图片宽度增加
      lph.onmouseover = function(){
        clearInterval(tt);
        tt = setInterval(dxx,10);
        // dxx();
      }
           //  点击删除图片缩回去
       del.onclick = function(){
         clearInterval(tt);
        tt = setInterval(dx,10);
        // dx();
      }

      //  ppr.onmouseover = function(){
      //    clearInterval(tt);
      //   tt = setInterval(dx,10);
      //   // dx();
      // }




      // 二级菜单显示

      var tm = document.querySelector('.twomuen');
      var lmu = document.querySelector('.lmu');
      var mlis = document.querySelectorAll('.lmu ul li');
      console.log(mlis);
      var t1 = document.querySelector('.t1');
      var m1 = document.querySelector('.m1');
      var t2 = document.querySelector('.t2');
      var t3 = document.querySelector('.t3');
      var t4 = document.querySelector('.t4');
      var t5 = document.querySelector('.t5');
      var t6 = document.querySelector('.t6');
      var t7 = document.querySelector('.t7');


     


      t1.onmouseover = function(){
        tm.style.display="block";
        this.style.display="block";
      }

      //  t2.onmouseover = function(){
      //   tm.style.display="block";
      //   t1.style.display="none"
      //   this.style.display="block";
      // }

      // t1.onmouseleave = function(){
        
      //   m1.style.display="none";
      // }
    

      lmu.onmouseleave = function(){
      tm.style.display="none";
      }


      var rlis = document.querySelectorAll('.rm ul li');

      // for(var i=0; i > rlis.length-1; i++){
      //   rlis[i].onmouseover = function(){
      //   this.style.width=60+"px";
      // }
      // }

      
      //  log切换后有文字

      





 }