$(document).ready(function(){

// function gitReport(){
  var results = {
    userTypes: 0,
    adminTypes: 0,
    siteAdmins: 0,
    handle5under:0
  };
  $("button").on('click', function(){
    var url = "https://api.github.com/users";
                 
    $.get(url, function(data){
      
      data.forEach(function(d){
        if(d.type === "User"){
          results.userTypes++;
        } else if (d.type === "Organization"){
          results.adminTypes++;
        }
        if(d.site_admin){
          results.siteAdmins++;
        }
        if(d.login.length <= 5){
          results.handle5under++;
        }
        
      }); // end foreach
      console.log("results: ", results);
      return results;
    }); // end get 
  
  
  }); // end buton click handler
   
// }
});
// var report = gitReport();
// console.log('report: ', report);
