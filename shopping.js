
                      
        $(document).ready(function(){
  //$("#Jeans").hide();
  $("#Shirt").hide();
  $("#TShirt").hide();
  $("#cart").hide();

  $("#H").click(function(){
    $("#Jeans").hide();
    $("#Shirt").hide();
    $("#TShirt").hide();
    $("#cart").hide();
  });

  $("#J").click(function(){
    $("#Jeans").show();
    $("#Shirt").hide();
    $("#TShirt").hide();
    $("#cart").hide();
  });
  $("#S").click(function(){
    $("#Jeans").hide();
    $("#Shirt").show();
    $("#TShirt").hide();
    $("#cart").hide();
  });
  $("#T").click(function(){
    $("#Jeans").hide();
    $("#Shirt").hide();
    $("#TShirt").show();
    $("#cart").hide();
  });
  $("#C").click(function(){
    $("#Jeans").hide();
    $("#Shirt").hide();
    $("#TShirt").hide();
    $("#cart").show();
  });


  var total_price=0;
  var click_1=0; // record for the size of array
  var name1=[]; // for storing product name
  var price=[];// for storing  product price 
  var price_rupee=[]; // for storing product preice with rupee symbol
  var img=[]; // store image  url
  $("button").click(function(){
   
    let name= $(this).parent().prev().prev().text(); // getting the product name
    let price_1=$(this).parent().prev().text(); // getting the prodduct price with rupee symbol
    let a=parseInt(price_1.substring(1)); // converting it to integer for calculation
    let image = $(this).parent().prev().prev().prev('img').attr('src'); // gettting the url of the image
    
    // storing the details of product as per their respective array 
    name1.push(name); 
    price.push(a);
    price_rupee.push(price_1);
    img.push(image);

    click_1++; // incrementing the index
  
     
    
});
var click_2=0 // for click count of cart button
$("#C").click(function(){

total_price=0;

// to avoid the printing of same product more than once. we store the no. of click on cart button
// if click>0 remove the previous records and print that again with new one.
if(click_2>0)
{
  
  $("#add_row").children().next().children().remove(); 
  
  for(i=0;i<click_1;i++)
   {

      $("table:last").append("<tr><td><img src=" + img[i] + " height='50px' width='50px'/></td><td>" + name1  [i] + "</td><td>" + price_rupee[i] + "</td><td><input type='button' class='btans' value='delete'></td></tr>");
      total_price+=price[i];
    }
    click_2++;  
}
else{
for(i=0;i<click_1;i++)
{

$("table:last").append("<tr><td><img src=" + img[i] + " height='50px' width='50px'/></td><td>" + name1  [i] + "</td><td>" + price_rupee[i] + "</td><td><input type='button' class='btans' value='delete'></td></tr>");
total_price+=price[i]; 
}
click_2++;
}


$("#total-price").val(total_price);


// remove the product from cart.
$(".btans").click(function() {
     let product_name_1=$(this).parent().prev().prev().text();
    
     
     let x=name1.indexOf(product_name_1); // getting the index of product name
  
     let b=price[x]; // getting the price of product through index from price array
    //alert(b);
     total_price-=b; // updatting total
    
     name1.splice(x,1);  // removing the product name from array.
     price.splice(x,1);
     img.splice(x,1);
     
     price_rupee.splice(x,1);
     click_1--;
     
    $(this).parent().parent().remove(); // will remove the that row
    
    $("#total-price").val(total_price);
    });

});



   });

 
  
       
