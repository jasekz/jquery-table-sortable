/*
 * sorTable 
 * Add sort functionality to any table
 */
 $.fn.sorTable = function() {
     var base_url = window.location.href.split('?')[0],
         url, display, direction, link, display_glyph = '';
     
 	$(this).each(function(){
     	url = base_url + '?sortby=' + $(this).attr('id') + '&dir=',
     	display = $(this).text(),
     	direction = 'asc',
     	display_glyph = false;

 	    if($.url().param('sortby') == $(this).attr('id')){
 	        display_glyph = true;
     	    if($.url().param('dir') == 'desc'){
     	        direction = 'desc';
     	    }
  	    }
  	    url+=(direction=='asc'?'desc':'asc');

  	    $.each($.url().param(), function(k,v){
      	   if(k!='sortby' && k!='dir'){
        	      if(k=='filter'){
           	      $.each(v, function(k2,v2){
               	      url+='&filter['+k2+']='+v2;
           	      });
       	      }else{
      		      url+='&'+k+'='+v;
       	      }
      	   }
  	    });

 	    link = '<a href="'+encodeURI(url)+'">'+display+'</a><span class="fa '+(display_glyph==false?'fa-sort':' fa-sort-'+(direction=='asc'?'asc':'desc'))+'" aria-hidden="true"></span>';
 	    $(this).html(link);
 	});
 }
