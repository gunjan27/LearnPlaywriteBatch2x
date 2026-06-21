function Classification_Matrix (frequency,impact,title) {
    let severity = new String();

    if (frequency === "always" ) 
    {
        if (impact === "blocker")
        {
                 severity = "P0- Critical: Stop release immediately";
        } 
        else if (impact === "major")
        {
            severity = "P1- High: Fix before release";
        }  
        else 
        {
            severity = "P2- Medium: Fix during release cycle";
        }

    }  
     else if (frequency === "often" ) 
   {
    if (impact === "blocker")
        {
                 severity = "P1- High: Fix before release";
        } 
        else if (impact === "major")
        {
            severity = "P2- Medium: Fix during release cycle";
        }  
        else 
        {
            severity = "P3- Low: Fix after release";
        }

   }
   else if (frequency === "rarely" )
   {
     if (impact === "blocker")
        {
                 severity = "P2- Medium: Fix during release cycle";
        } 
        else if (impact === "major")
        {
            severity = "P3- Low: Fix after release";
        }  
        else 
        {
            severity = "P4- Very Low: Fix at convenience";
        }

   }
   else
   {
    severity = "UNKNOWN";
   }
    

    return `Bug Title: ${title} Frequency: ${frequency} Impact: ${impact} Severity: ${severity}`;
}

console.log(Classification_Matrix("often","blocker","Login page not loading"));