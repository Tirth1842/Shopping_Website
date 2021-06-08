

  function onSignIn(googleUser)
  { 
      let google_count=0;
      sessionStorage.setItem("logout", "google");
     var profile = googleUser.getBasicProfile();
    // $(".g-signin2").css("display","none");
    // $(".data").css("display","block");
    // $("#pic").attr('src',profile.getImageUrl());
    // var a = profile.getEmail();
     
   fetch("./User_details.json")
        .then((apidata)=>{
                        console.log(apidata);
                        return apidata.json();
                        }).then((actualdata) =>{
                
                 for(let x in actualdata)
                    {
                       if(actualdata[x].Email==profile.getEmail())
                       {
                           google_count=1;
                        alert("hey");
                         window.location.replace("shopping.html") ;
                         //return false;
                       
                         
                       }
                       
                       
                  
                    }
                     if(google_count==0)
                        {
                         alert("user nit found")
                        }
                   
                        }).catch((error) =>{
                            console.log(error);
                        });
  // window.location.href = "shopping.html";
  //                        return false;
  }
  function signOut_google()
  {
    google_count=0;
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
           alert("signet out successful");
        window.location.href = "index.html";
                         return false;
    });
  }



  