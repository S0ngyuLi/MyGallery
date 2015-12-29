var index = 1;
var capacity = 10;
var small_window = 0;
//var click_on_window = 0;

var callPage = function(tgt_index){

  var w = window.innerWidth;
  var h = window.innerHeight;

  if(tgt_index > capacity)
    return;

  if(small_window != 1){
  //  var flwindow = document.getElementById("floating_window").innerHTML;
    var new_window = document.createElement("div");
    new_window.id = "new_window";

    var myImage = document.createElement("img");
    myImage.id = "myImage";
    myImage.src = "src/" + tgt_index + ".jpg";

    console.log(myImage.naturalWidth);

    if(myImage.naturalWidth > w * 0.4){
      myImage.style.width = "40%";
      myImage.style.height = "auto";
    }
    if(myImage.naturalHeight > h * 0.5){
      myImage.style.height = "50%";
      myImage.style.width = "auto";
    }


    var miniMenu = document.createElement("div");
    miniMenu.id = "miniMenu";

    var close_button = document.createElement("button");
    close_button.id = "close_button";

    close_button.onclick = function(){
      var tgt_img = document.getElementById("new_window");

      if(tgt_img != "undefined"){
        try{
          tgt_img.parentNode.removeChild(tgt_img);
        }
        catch(error){
          //nothing here
        }
        small_window = 0;

        }
      };

    var x = document.createTextNode("X");

    close_button.appendChild(x);

    miniMenu.appendChild(close_button);
    new_window.appendChild(miniMenu);
    new_window.appendChild(myImage);

    document.body.appendChild(new_window);
    small_window = 1;
    return;
  }

  var myImage = document.getElementById("myImage");
  myImage.src = "src/" + tgt_index + ".jpg";
  return;
}

document.body.addEventListener("click", function(){

    var tgt_img = document.getElementById("new_window");
    if(small_window !=0){
      try{tgt_img.parentNode.removeChild(tgt_img);}
      catch(error){
        //nothing here
      }
    }
    //click_on_window = 0;
    small_window = 0;
  }, true);
