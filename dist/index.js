var value=document.querySelector(".switch input"),price=document.querySelectorAll(".price");function check(e){return"$199.99"===e.innerHTML?e.innerHTML="$19.99":"$249.99"===e.innerHTML?e.innerHTML="$24.99":"$399.99"===e.innerHTML?e.innerHTML="$39.99":"$19.99"===e.innerHTML?e.innerHTML="$199.99":"$24.99"===e.innerHTML?e.innerHTML="$249.99":"$39.99"===e.innerHTML?e.innerHTML="$399.99":void 0}value.addEventListener("change",function(){if(value.checked)for(var e=0;e<price.length;e++)check(price[e]);else if(!1===value.checked)for(e=0;e<price.length;e++)check(price[e])});