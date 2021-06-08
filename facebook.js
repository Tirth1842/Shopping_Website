// 
window.fbAsyncInit = function() {
    // FB JavaScript SDK configuration and setup
    FB.init({
      appId      : '297525975420203', // FB App ID
      cookie     : false,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v10.0' // use graph api version 2.8
    });
    
    // Check whether the user already logged in
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            //display user data
            getFbUserData();
        }
    });
};

// Load the JavaScript SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK
function fbLogin() {
    sessionStorage.setItem("logout", "facebook");
    let facebook_count;
    facebook_count=0;
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
            FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
    function (response) {
        fetch("./User_details.json")
        .then((apidata)=>{
                        console.log(apidata);
                        return apidata.json();
                        }).then((actualdata) =>{
                
                 for(let x in actualdata)
                    {
                       if(actualdata[x].Email==response.email )
                       {
                           facebook_count=1;
                        alert(response.email);
                        window.location.replace("shopping.html");

                       }
                       
                  
                    }
                    if(facebook_count==0)
                    {
                      alert("login failed");
                    }
                        }).catch((error) =>{
                            console.log(error);
                        });
        
                
      
            });
        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, {scope: 'email', auth_type: 'reauthenticate'});
}

// Fetch the user profile data from facebook
// function getFbUserData(){
    
// }

// Logout from facebook
function fbLogout() {
    FB.logout(function() {
        window.location.replace("index.html");
    
        // document.getElementById('fbLink').setAttribute("onclick","fbLogin()");
        // document.getElementById('fbLink').innerHTML = '<img src="images/fb-login-btn.png"/>';
        // document.getElementById('userData').innerHTML = '';
        // document.getElementById('status').innerHTML = '<p>You have successfully logout from Facebook.</p>';
    });
}
