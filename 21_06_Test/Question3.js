function questionName(input) {
 let MAX_ATTEMPTS = input;
 let attempts = 0;
 let issuccess= false;
 let answer= new String();

 
 do {
     attempts++;
     let SuccessValue = Math.random();
     
     if(SuccessValue > 0.6){
        issuccess = true;
        answer+= "Attempts: " + attempts + "✅ SUCCESS (Response 200 OK) API call PASSED after " + attempts + " attempt(s) ";
         }
    else {
            answer+= "Attempts: " + attempts + "❌ FAILED (Timeout/Error)";
         }     
    }
  while (attempts< MAX_ATTEMPTS && issuccess==false);

  return answer;
}

console.log(questionName(5));

