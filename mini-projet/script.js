var totalprice = 0 ;
nb_article = 0 ;




var addtocardbutton = document.getElementsByClassName("mybutton");
for(var i = 0 ; i < addtocardbutton.length ; i++){
    var button = addtocardbutton[i]
    button.addEventListener('click',addtocardclick)

}

function addtocardclick(event) {
    var button = event.target ;

    var shopItem = button.parentElement;
    var title = shopItem.getElementsByClassName("istitle")[0].innerText;
    var price = shopItem.getElementsByClassName("price")[0].innerText;
    var imgsrc = shopItem.getElementsByClassName("prdimage")[0].src;
    var numberi = shopItem.getElementsByClassName("counter")[0].value;

    additemtocart(title,price,imgsrc,numberi);


    console.log(nb_article);



}

function additemtocart(title,price,imgsrc,numberi){




    var cartitems = document.getElementsByClassName("rightmenu")[0];
    var cartitemsnames = cartitems.getElementsByClassName("minicard");
    var bool ;
    for (var i = 0; i < cartitemsnames.length; i++) {
      var name = cartitemsnames[i].getElementsByClassName("miniimage")[0].innerText;




      if(title==name){

        nb=cartitemsnames[i].getElementsByClassName("nbproduct")[0].innerText;
        nb.slice(0,-1);
        nb=parseInt(nb)+parseInt(numberi);
        
        if(nb>9 ){
          alert("quantite depasse !! (9) ou quantite = 0 !!");

        }else{
          cartitemsnames[i].getElementsByClassName("nbproduct")[0].innerText=nb+'x';

          calctotal(price,numberi);

        }



        return;




      }




    }
    var element = document.createElement('div');
    element.classList.add("minicard");

var myspan = document.createElement("button");
myspan.role="button";
myspan.innerText="supprimer";

myspan.classList.add("button-3");
myspan.addEventListener('click',function(event){
    updateprice();
    var buttonclicked = event.target;
    var theprice = buttonclicked.parentElement.getElementsByClassName("myprice")[0].innerText;
    var thenb = buttonclicked.parentElement.getElementsByClassName("nbproduct")[0].innerText;
    buttonclicked.parentElement.remove();
    nb_article--;
    updateprice();

})

var nbprod = document.createElement("div");
nbprod.classList.add("nbproduct");
nbprod.innerText=numberi+'x';
var myprice = document.createElement("div");
myprice.classList.add("myprice");
myprice.innerText=price;
var miniimage = document.createElement("div");
miniimage.classList.add("miniimage");
miniimage.innerText=title;
var minititle = document.createElement("div");
minititle.classList.add("minititle");
var myimg = document.createElement("img");
myimg.classList.add("myimgprd");
myimg.src=imgsrc;
minititle.append(myimg);
element.append(myspan);
element.append(myprice);
element.append(miniimage);
element.append(minititle);
element.append(nbprod);

    var cartitems = document.getElementsByClassName("rightmenu")[0];
    cartitems.append(element);

    nb_article++;
    calctotal(price,numberi);













}


function calctotal(price,numberi) {
       totalprice = parseFloat(totalprice) + (parseInt(numberi)*parseFloat(price.substring(1)));

       var total = document.getElementsByClassName("mytotal");
       total[0].innerText="total: "+totalprice+"$";
}

function updateprice(){
  var mylist = document.getElementsByClassName("minicard");
  totalprice = 0 ;
  if (nb_article==0) {
    totalprice = 0
    var total = document.getElementsByClassName("mytotal");
    total[0].innerText="total: "+totalprice+"$";
  }


  for (var i = 0; i < mylist.length; i++) {
    nb = mylist[i].getElementsByClassName("nbproduct")[0].innerText;
    nb.slice(0,-1);
    xprice = mylist[i].getElementsByClassName("myprice")[0].innerText;
    totalprice = parseFloat(totalprice)+parseFloat(nb)*parseFloat(xprice.substring(1));

    var total = document.getElementsByClassName("mytotal");
    total[0].innerText="total: "+totalprice+"$";

  }
}




delete_all = document.getElementsByClassName("button-1")[0];

delete_all.addEventListener('click',function(event){
  list = document.getElementsByClassName("rightmenu")[0];
  menu = list.getElementsByClassName("minicard");

  while(nb_article>0){
    for (var i = 0; i < menu.length; i++) {
      menu[i].remove();
      nb_article--;

    }
    totalprice = 0
    var total = document.getElementsByClassName("mytotal");
    total[0].innerText="total: "+totalprice+"$";


  }




});
