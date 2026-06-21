function Response_Time_SLA_Analyzer(responseTime, slaLimit)
{
let maxResponseTime = Math.max(...responseTime);
let minResponseTime = Math.min(...responseTime);
let tottalResponseTime= responseTime.reduce((a, b) => a + b, 0);
let avg= tottalResponseTime / responseTime.length;
let SLAbreachCount=0;
    for (let i=0; i<responseTime.length; i++)
    {
        if (responseTime[i] > slaLimit) {
            SLAbreachCount++;
        }
    }
 let SLABreachPer= (SLAbreachCount / responseTime.length) * 100;
 let SLAStatus= (SLAbreachCount>50 ? "SLA breached" : "SLA Passed");
return `Total Requests: ${responseTime.length} Min Response: ${minResponseTime} Max Response: ${maxResponseTime} SLA Breaches: ${SLAbreachCount} (${SLABreachPer.toFixed(2)}%) Overall SLA Status: ${SLAStatus}`;
}

console.log(Response_Time_SLA_Analyzer([120, 230, 450, 510, 180, 120], 500));