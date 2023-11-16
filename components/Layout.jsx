const React = require('react');

module.exports = function Layout({ title, children }) {
 return (                        
   <html lang="en">                       
     <head>
       <title>{title}</title>
       {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link rel="stylesheet" href="/style/auth.css" />
        <link rel="stylesheet" href="/style/product.css" />
        <link rel="stylesheet" href="/style/nav.css" />
       <script defer src="/js/productScript.js" />  */}
     </head>
     <body>{children}</body>
   </html>
 );
};
