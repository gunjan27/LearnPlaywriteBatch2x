function questionName(input) {
    let result = new String();
    let verdict = new String();
    let Total_test= input.length;
    let Pass = 0;   
    let Fail = 0;   
    let skip = 0;   
    let pass_rate = 0; 
    for(let i=0; i<Total_test; i++){
        if(input[i] == "PASS"){
            Pass++;
        }  else if(input[i] == "FAIL"){
            Fail++;
        } else if(input[i] == "SKIP"){
            skip++;
        }

    }   
    pass_rate = (Pass/Total_test)*100;
    if(Fail === 0){
        verdict = "All tests passed. Ready for release";
    } else if (Fail <= 2) {
        verdict = "Minor failures. Review before release";
    }
    else {
        verdict = "Major failures. Block release.";
    }


    return "Total Tests: " + Total_test + " Passed: " + Pass + " Failed: " + Fail + " Skipped: " + skip + " Pass Rate: " + pass_rate.toFixed(2) + "% VERDICT: " + verdict;
}

console.log(questionName(["PASS", "PASS", "PASS", "SKIP", "PASS", "PASS", "PASS", "PASS", "SKIP", "PASS"]));