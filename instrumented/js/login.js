function cov_xt2ijj8vu(){var path="/Users/bryanchew/Desktop/School/dev_ops/part2/orbit-part-2/public/js/login.js";var hash="88e4cda4e0212edceb53be23230b1392806f891e";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/bryanchew/Desktop/School/dev_ops/part2/orbit-part-2/public/js/login.js",statementMap:{"0":{start:{line:1,column:18},end:{line:1,column:55}},"1":{start:{line:2,column:19},end:{line:2,column:57}},"2":{start:{line:4,column:0},end:{line:40,column:3}},"3":{start:{line:5,column:2},end:{line:5,column:25}},"4":{start:{line:8,column:16},end:{line:8,column:55}},"5":{start:{line:9,column:19},end:{line:9,column:61}},"6":{start:{line:11,column:2},end:{line:39,column:3}},"7":{start:{line:13,column:21},end:{line:17,column:6}},"8":{start:{line:19,column:19},end:{line:19,column:40}},"9":{start:{line:20,column:4},end:{line:20,column:24}},"10":{start:{line:23,column:4},end:{line:33,column:5}},"11":{start:{line:25,column:6},end:{line:25,column:50}},"12":{start:{line:26,column:6},end:{line:26,column:67}},"13":{start:{line:29,column:6},end:{line:29,column:43}},"14":{start:{line:32,column:6},end:{line:32,column:51}},"15":{start:{line:36,column:4},end:{line:36,column:55}},"16":{start:{line:37,column:4},end:{line:38,column:64}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:37},end:{line:4,column:38}},loc:{start:{line:4,column:54},end:{line:40,column:1}},line:4}},branchMap:{"0":{loc:{start:{line:23,column:4},end:{line:33,column:5}},type:"if",locations:[{start:{line:23,column:4},end:{line:33,column:5}},{start:{line:30,column:11},end:{line:33,column:5}}],line:23},"1":{loc:{start:{line:26,column:39},end:{line:26,column:65}},type:"binary-expr",locations:[{start:{line:26,column:39},end:{line:26,column:54}},{start:{line:26,column:58},end:{line:26,column:65}}],line:26}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},f:{"0":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"88e4cda4e0212edceb53be23230b1392806f891e"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_xt2ijj8vu=function(){return actualCoverage;};}return actualCoverage;}cov_xt2ijj8vu();const loginForm=(cov_xt2ijj8vu().s[0]++,document.getElementById("login-form"));const loginError=(cov_xt2ijj8vu().s[1]++,document.getElementById("login-error"));cov_xt2ijj8vu().s[2]++;loginForm.addEventListener("submit",async event=>{cov_xt2ijj8vu().f[0]++;cov_xt2ijj8vu().s[3]++;event.preventDefault();// Get email and password input values
const email=(cov_xt2ijj8vu().s[4]++,loginForm.querySelector("#email").value);const password=(cov_xt2ijj8vu().s[5]++,loginForm.querySelector("#password").value);cov_xt2ijj8vu().s[6]++;try{// Send a POST request to the server for login
const response=(cov_xt2ijj8vu().s[7]++,await fetch("http://localhost:5050/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,password})}));const result=(cov_xt2ijj8vu().s[8]++,await response.json());cov_xt2ijj8vu().s[9]++;console.log(result);// Log the response for debugging
// Check if the response is successful
cov_xt2ijj8vu().s[10]++;if(response.ok){cov_xt2ijj8vu().b[0][0]++;cov_xt2ijj8vu().s[11]++;// Store token and username in localStorage
localStorage.setItem("token",result.token);cov_xt2ijj8vu().s[12]++;localStorage.setItem("userName",(cov_xt2ijj8vu().b[1][0]++,result.userName)||(cov_xt2ijj8vu().b[1][1]++,"Guest"));// Save user name or default to 'Guest'
// Redirect to the homepage
cov_xt2ijj8vu().s[13]++;window.location.href="/index.html";// Update to the correct redirect page
}else{cov_xt2ijj8vu().b[0][1]++;cov_xt2ijj8vu().s[14]++;// Display error message if login failed
loginError.textContent=`${result.message}`;}}catch(error){cov_xt2ijj8vu().s[15]++;// Handle any error that occurs during the fetch
console.error("Error during login: plz try again");cov_xt2ijj8vu().s[16]++;loginError.textContent="An error occurred during login. Please try again later.";}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfeHQyaWpqOHZ1IiwiYWN0dWFsQ292ZXJhZ2UiLCJsb2dpbkZvcm0iLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxvZ2luRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJmIiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwib2siLCJiIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwidXNlck5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiLCJlcnJvciJdLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW4tZm9ybVwiKTtcbmNvbnN0IGxvZ2luRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWVycm9yXCIpO1xuXG5sb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBHZXQgZW1haWwgYW5kIHBhc3N3b3JkIGlucHV0IHZhbHVlc1xuICBjb25zdCBlbWFpbCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpLnZhbHVlO1xuICBjb25zdCBwYXNzd29yZCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpLnZhbHVlO1xuXG4gIHRyeSB7XG4gICAgLy8gU2VuZCBhIFBPU1QgcmVxdWVzdCB0byB0aGUgc2VydmVyIGZvciBsb2dpblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwNTAvbG9naW5cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7IC8vIExvZyB0aGUgcmVzcG9uc2UgZm9yIGRlYnVnZ2luZ1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlc3BvbnNlIGlzIHN1Y2Nlc3NmdWxcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIC8vIFN0b3JlIHRva2VuIGFuZCB1c2VybmFtZSBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzdWx0LnRva2VuKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck5hbWVcIiwgcmVzdWx0LnVzZXJOYW1lIHx8IFwiR3Vlc3RcIik7IC8vIFNhdmUgdXNlciBuYW1lIG9yIGRlZmF1bHQgdG8gJ0d1ZXN0J1xuXG4gICAgICAvLyBSZWRpcmVjdCB0byB0aGUgaG9tZXBhZ2VcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvaW5kZXguaHRtbFwiOyAvLyBVcGRhdGUgdG8gdGhlIGNvcnJlY3QgcmVkaXJlY3QgcGFnZVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEaXNwbGF5IGVycm9yIG1lc3NhZ2UgaWYgbG9naW4gZmFpbGVkXG4gICAgICBsb2dpbkVycm9yLnRleHRDb250ZW50ID0gYCR7cmVzdWx0Lm1lc3NhZ2V9YDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IG9jY3VycyBkdXJpbmcgdGhlIGZldGNoXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGR1cmluZyBsb2dpbjogcGx6IHRyeSBhZ2FpblwiKTtcbiAgICBsb2dpbkVycm9yLnRleHRDb250ZW50ID1cbiAgICAgIFwiQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGxvZ2luLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiO1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6IjBzRUFlWTtBQUFBQSxhQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGFBQUEsR0FmWixLQUFNLENBQUFFLFNBQVMsRUFBQUYsYUFBQSxHQUFBRyxDQUFBLE1BQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUN2RCxLQUFNLENBQUFDLFVBQVUsRUFBQU4sYUFBQSxHQUFBRyxDQUFBLE1BQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUFDTCxhQUFBLEdBQUFHLENBQUEsTUFFMURELFNBQVMsQ0FBQ0ssZ0JBQWdCLENBQUMsUUFBUSxDQUFFLEtBQU8sQ0FBQUMsS0FBSyxFQUFLLENBQUFSLGFBQUEsR0FBQVMsQ0FBQSxNQUFBVCxhQUFBLEdBQUFHLENBQUEsTUFDcERLLEtBQUssQ0FBQ0UsY0FBYyxDQUFDLENBQUMsQ0FFdEI7QUFDQSxLQUFNLENBQUFDLEtBQUssRUFBQVgsYUFBQSxHQUFBRyxDQUFBLE1BQUdELFNBQVMsQ0FBQ1UsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLEVBQ3JELEtBQU0sQ0FBQUMsUUFBUSxFQUFBZCxhQUFBLEdBQUFHLENBQUEsTUFBR0QsU0FBUyxDQUFDVSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNDLEtBQUssRUFBQ2IsYUFBQSxHQUFBRyxDQUFBLE1BRTVELEdBQUksQ0FDRjtBQUNBLEtBQU0sQ0FBQVksUUFBUSxFQUFBZixhQUFBLEdBQUFHLENBQUEsTUFBRyxLQUFNLENBQUFhLEtBQUssQ0FBQyw2QkFBNkIsQ0FBRSxDQUMxREMsTUFBTSxDQUFFLE1BQU0sQ0FDZEMsT0FBTyxDQUFFLENBQUUsY0FBYyxDQUFFLGtCQUFtQixDQUFDLENBQy9DQyxJQUFJLENBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUVWLEtBQUssQ0FBRUcsUUFBUyxDQUFDLENBQzFDLENBQUMsQ0FBQyxFQUVGLEtBQU0sQ0FBQVEsTUFBTSxFQUFBdEIsYUFBQSxHQUFBRyxDQUFBLE1BQUcsS0FBTSxDQUFBWSxRQUFRLENBQUNRLElBQUksQ0FBQyxDQUFDLEVBQUN2QixhQUFBLEdBQUFHLENBQUEsTUFDckNxQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUU7QUFFckI7QUFBQXRCLGFBQUEsR0FBQUcsQ0FBQSxPQUNBLEdBQUlZLFFBQVEsQ0FBQ1csRUFBRSxDQUFFLENBQUExQixhQUFBLEdBQUEyQixDQUFBLFNBQUEzQixhQUFBLEdBQUFHLENBQUEsT0FDZjtBQUNBeUIsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFFUCxNQUFNLENBQUNRLEtBQUssQ0FBQyxDQUFDOUIsYUFBQSxHQUFBRyxDQUFBLE9BQzVDeUIsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxDQUFFLENBQUE3QixhQUFBLEdBQUEyQixDQUFBLFNBQUFMLE1BQU0sQ0FBQ1MsUUFBUSxJQUFBL0IsYUFBQSxHQUFBMkIsQ0FBQSxTQUFJLE9BQU8sRUFBQyxDQUFFO0FBRTlEO0FBQUEzQixhQUFBLEdBQUFHLENBQUEsT0FDQTZCLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUcsYUFBYSxDQUFFO0FBQ3hDLENBQUMsSUFBTSxDQUFBbEMsYUFBQSxHQUFBMkIsQ0FBQSxTQUFBM0IsYUFBQSxHQUFBRyxDQUFBLE9BQ0w7QUFDQUcsVUFBVSxDQUFDNkIsV0FBVyxDQUFHLEdBQUdiLE1BQU0sQ0FBQ2MsT0FBTyxFQUFFLENBQzlDLENBQ0YsQ0FBRSxNQUFPQyxLQUFLLENBQUUsQ0FBQXJDLGFBQUEsR0FBQUcsQ0FBQSxPQUNkO0FBQ0FxQixPQUFPLENBQUNhLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDckMsYUFBQSxHQUFBRyxDQUFBLE9BQ25ERyxVQUFVLENBQUM2QixXQUFXLENBQ3BCLHlEQUF5RCxDQUM3RCxDQUNGLENBQUMsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==