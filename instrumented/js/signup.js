function cov_2h0us6xunb(){var path="/Users/bryanchew/Desktop/School/dev_ops/part2/orbit-part-2/public/js/signup.js";var hash="01392df5c5c14b6650d9f97403862edbe04b5215";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"/Users/bryanchew/Desktop/School/dev_ops/part2/orbit-part-2/public/js/signup.js",statementMap:{"0":{start:{line:1,column:19},end:{line:1,column:57}},"1":{start:{line:2,column:20},end:{line:2,column:59}},"2":{start:{line:4,column:0},end:{line:29,column:3}},"3":{start:{line:5,column:2},end:{line:5,column:25}},"4":{start:{line:6,column:15},end:{line:6,column:54}},"5":{start:{line:7,column:16},end:{line:7,column:56}},"6":{start:{line:8,column:19},end:{line:8,column:62}},"7":{start:{line:10,column:2},end:{line:28,column:3}},"8":{start:{line:11,column:21},end:{line:15,column:6}},"9":{start:{line:17,column:19},end:{line:17,column:40}},"10":{start:{line:18,column:4},end:{line:18,column:24}},"11":{start:{line:20,column:4},end:{line:25,column:5}},"12":{start:{line:21,column:6},end:{line:21,column:43}},"13":{start:{line:22,column:6},end:{line:22,column:42}},"14":{start:{line:24,column:6},end:{line:24,column:47}},"15":{start:{line:27,column:4},end:{line:27,column:65}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:4,column:38},end:{line:4,column:39}},loc:{start:{line:4,column:55},end:{line:29,column:1}},line:4}},branchMap:{"0":{loc:{start:{line:20,column:4},end:{line:25,column:5}},type:"if",locations:[{start:{line:20,column:4},end:{line:25,column:5}},{start:{line:23,column:11},end:{line:25,column:5}}],line:20}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"01392df5c5c14b6650d9f97403862edbe04b5215"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2h0us6xunb=function(){return actualCoverage;};}return actualCoverage;}cov_2h0us6xunb();const signupForm=(cov_2h0us6xunb().s[0]++,document.getElementById('signup-form'));const signupError=(cov_2h0us6xunb().s[1]++,document.getElementById('signup-error'));cov_2h0us6xunb().s[2]++;signupForm.addEventListener('submit',async event=>{cov_2h0us6xunb().f[0]++;cov_2h0us6xunb().s[3]++;event.preventDefault();const name=(cov_2h0us6xunb().s[4]++,signupForm.querySelector('#name').value);const email=(cov_2h0us6xunb().s[5]++,signupForm.querySelector('#email').value);const password=(cov_2h0us6xunb().s[6]++,signupForm.querySelector('#password').value);cov_2h0us6xunb().s[7]++;try{const response=(cov_2h0us6xunb().s[8]++,await fetch('http://localhost:5050/signup',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,password})}));const result=(cov_2h0us6xunb().s[9]++,await response.json());cov_2h0us6xunb().s[10]++;console.log(result);// Log response for debugging
cov_2h0us6xunb().s[11]++;if(response.ok){cov_2h0us6xunb().b[0][0]++;cov_2h0us6xunb().s[12]++;window.location.href='/login.html';// Redirect to login after successful signup
cov_2h0us6xunb().s[13]++;return"User created successfully.";}else{cov_2h0us6xunb().b[0][1]++;cov_2h0us6xunb().s[14]++;signupError.textContent=result.message;}}catch(error){cov_2h0us6xunb().s[15]++;signupError.textContent="An error occurred during signup.";}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmgwdXM2eHVuYiIsImFjdHVhbENvdmVyYWdlIiwic2lnbnVwRm9ybSIsInMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2lnbnVwRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJmIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9rIiwiYiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRleHRDb250ZW50IiwibWVzc2FnZSIsImVycm9yIl0sInNvdXJjZXMiOlsic2lnbnVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNpZ251cEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLWZvcm0nKTtcbmNvbnN0IHNpZ251cEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC1lcnJvcicpO1xuXG5zaWdudXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuYW1lID0gc2lnbnVwRm9ybS5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlO1xuICBjb25zdCBlbWFpbCA9IHNpZ251cEZvcm0ucXVlcnlTZWxlY3RvcignI2VtYWlsJykudmFsdWU7XG4gIGNvbnN0IHBhc3N3b3JkID0gc2lnbnVwRm9ybS5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKS52YWx1ZTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTA1MC9zaWdudXAnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTsgLy8gTG9nIHJlc3BvbnNlIGZvciBkZWJ1Z2dpbmdcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luLmh0bWwnOyAvLyBSZWRpcmVjdCB0byBsb2dpbiBhZnRlciBzdWNjZXNzZnVsIHNpZ251cFxuICAgICAgcmV0dXJuIFwiVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseS5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2lnbnVwRXJyb3IudGV4dENvbnRlbnQgPSByZXN1bHQubWVzc2FnZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgc2lnbnVwRXJyb3IudGV4dENvbnRlbnQgPSBcIkFuIGVycm9yIG9jY3VycmVkIGR1cmluZyBzaWdudXAuXCI7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiczdEQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLEtBQU0sQ0FBQUUsVUFBVSxFQUFBRixjQUFBLEdBQUFHLENBQUEsTUFBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQ3pELEtBQU0sQ0FBQUMsV0FBVyxFQUFBTixjQUFBLEdBQUFHLENBQUEsTUFBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUNMLGNBQUEsR0FBQUcsQ0FBQSxNQUU1REQsVUFBVSxDQUFDSyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUUsS0FBTyxDQUFBQyxLQUFLLEVBQUssQ0FBQVIsY0FBQSxHQUFBUyxDQUFBLE1BQUFULGNBQUEsR0FBQUcsQ0FBQSxNQUNyREssS0FBSyxDQUFDRSxjQUFjLENBQUMsQ0FBQyxDQUN0QixLQUFNLENBQUFDLElBQUksRUFBQVgsY0FBQSxHQUFBRyxDQUFBLE1BQUdELFVBQVUsQ0FBQ1UsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxLQUFLLEVBQ3BELEtBQU0sQ0FBQUMsS0FBSyxFQUFBZCxjQUFBLEdBQUFHLENBQUEsTUFBR0QsVUFBVSxDQUFDVSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUNDLEtBQUssRUFDdEQsS0FBTSxDQUFBRSxRQUFRLEVBQUFmLGNBQUEsR0FBQUcsQ0FBQSxNQUFHRCxVQUFVLENBQUNVLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsS0FBSyxFQUFDYixjQUFBLEdBQUFHLENBQUEsTUFFN0QsR0FBSSxDQUNGLEtBQU0sQ0FBQWEsUUFBUSxFQUFBaEIsY0FBQSxHQUFBRyxDQUFBLE1BQUcsS0FBTSxDQUFBYyxLQUFLLENBQUMsOEJBQThCLENBQUUsQ0FDM0RDLE1BQU0sQ0FBRSxNQUFNLENBQ2RDLE9BQU8sQ0FBRSxDQUFFLGNBQWMsQ0FBRSxrQkFBbUIsQ0FBQyxDQUMvQ0MsSUFBSSxDQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFFWCxJQUFJLENBQUVHLEtBQUssQ0FBRUMsUUFBUyxDQUFDLENBQ2hELENBQUMsQ0FBQyxFQUVGLEtBQU0sQ0FBQVEsTUFBTSxFQUFBdkIsY0FBQSxHQUFBRyxDQUFBLE1BQUcsS0FBTSxDQUFBYSxRQUFRLENBQUNRLElBQUksQ0FBQyxDQUFDLEVBQUN4QixjQUFBLEdBQUFHLENBQUEsT0FDckNzQixPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUU7QUFBQXZCLGNBQUEsR0FBQUcsQ0FBQSxPQUVyQixHQUFJYSxRQUFRLENBQUNXLEVBQUUsQ0FBRSxDQUFBM0IsY0FBQSxHQUFBNEIsQ0FBQSxTQUFBNUIsY0FBQSxHQUFBRyxDQUFBLE9BQ2YwQixNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFHLGFBQWEsQ0FBRTtBQUFBL0IsY0FBQSxHQUFBRyxDQUFBLE9BQ3RDLE1BQU8sNEJBQTRCLENBQ3JDLENBQUMsSUFBTSxDQUFBSCxjQUFBLEdBQUE0QixDQUFBLFNBQUE1QixjQUFBLEdBQUFHLENBQUEsT0FDTEcsV0FBVyxDQUFDMEIsV0FBVyxDQUFHVCxNQUFNLENBQUNVLE9BQU8sQ0FDMUMsQ0FDRixDQUFFLE1BQU9DLEtBQUssQ0FBRSxDQUFBbEMsY0FBQSxHQUFBRyxDQUFBLE9BQ2RHLFdBQVcsQ0FBQzBCLFdBQVcsQ0FBRyxrQ0FBa0MsQ0FDOUQsQ0FDRixDQUFDLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=