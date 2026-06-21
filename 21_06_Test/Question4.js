function ElementVisibilityChecker(isDisplayed , isEnabled ,isPresent) {
    let Status = new String();  
    let Severity = new String();    
    let Action = new String();

    if (isDisplayed && isEnabled && isPresent) { // ready
        Status = "READY";
        Severity= "OK";
        Action = "Element is visible and enabled. Proceed with action.";
    } 
    else if (isPresent && isDisplayed &&  !isEnabled) { // Diabled
        Status = "DISABLED";
        Severity = "WARNING";
        Action = "Element is visible but disabled. Wait for enable state or check preconditions."
    }
    else if (isPresent && !isDisplayed ) { // Hidden
        Status = "HIDDEN";
        Severity = "WARNING";
        action = "Element is present but not visible. Check visibility conditions or wait for it to appear.";   
    } 
    else {
        Status = "NOT FOUND";
        Severity = "CRITICAL";
        Action = "Element is not present in the DOM. Check locator or page state.";
    }
return "Status: " + Status + " Severity: " + Severity + " Action: " + Action;

}


console.log(ElementVisibilityChecker(true, true, true) );



