var link = [];
link[0] = "styles/scheme-1.css";
link[1] = "styles/scheme-2.css";
link[2] = "styles/scheme-3.css";


$(function() {
  var style = link[Math.floor(Math.random() * link.length )];
  if (document.createStyleSheet){
      document.createStyleSheet(style);
  }else{
      $('<link />',{
          rel :'stylesheet',
          type:'text/css',
          href: style
      }).appendTo('head');
  }
});
