function Production()
{
    var field1=document.getElementById("shed_A").value;
    var field2=document.getElementById("shed_B").value;
    var field3=document.getElementById("shed_C").value;
    var field4=document.getElementById("shed_D").value;           
    
    var shed1=document.getElementById("shed_a").value;
    var shed2=document.getElementById("shed_b").value;
    var shed3=document.getElementById("shed_c").value;
    var shed4=document.getElementById("shed_d").value;
    
    var result1=parseFloat(field1)*parseFloat(shed1);
    var result2=parseFloat(field2)*parseFloat(shed2);
    var result3=parseFloat(field3)*parseFloat(shed3);
    var result4=parseFloat(field4)*parseFloat(shed4);

    var total=result1+result2+result3+result4;
    
    if(isNaN(result1) || isNaN(result2) || isNaN(result3) | isNaN(result4))
    { 
        alert("records not found");
}
       else{

        document.getElementById("shed_Aa").innerHTML="Your production in Shed _A "+ result1 + "litres per day ";
        document.getElementById("shed_Bb").innerHTML="Your production in Shed _B "+ result2 + "litres per day ";
        document.getElementById("shed_Cc").innerHTML="Your production in Shed _C "+ result3 + "litres per day ";
        document.getElementById("shed_Dd").innerHTML="Your production in Shed _D "+ result4 + "litres per day ";
        document.getElementById("total").innerHTML = "Your total production in all sheds is " + total + " litres per day.";
    }
};


function calculation(buyingRate, time)
{
    return weeklyIncome=buyingRate*time

};
function income()
{
    var field1=document.getElementById("shed_A").value;
    var field2=document.getElementById("shed_B").value;
    var field3=document.getElementById("shed_C").value;
    var field4=document.getElementById("shed_D").value;           

    var shed1=document.getElementById("shed_a").value;
    var shed2=document.getElementById("shed_b").value;
    var shed3=document.getElementById("shed_c").value;
    var shed4=document.getElementById("shed_d").value;
    
    var result1=parseFloat(field1)*parseFloat(shed1);
    var result2=parseFloat(field2)*parseFloat(shed2);
    var result3=parseFloat(field3)*parseFloat(shed3);
    var result4=parseFloat(field4)*parseFloat(shed4);

    var total=result1+result2+result3+result4;

    if(isNaN(result1) || isNaN(result2) || isNaN(result3) | isNaN(result4))
    { 
        alert("records not found");
}
       else{

    document.getElementById("weekly").innerHTML = "Your weekly income will be Kshs." + calculation(45, 7)*total+".";
}
};
    // let monthlyData = {
    //     january: 31,
    //     february: 29,
    //     march: 31,
    //     april: 30,
    //     may: 31,
    //     june: 30,
    //     july: 31,
    //     august: 31,
    //     sept: 30,
    //     oct: 31,
    //     nov: 30,
    //     dec: 31
    // };
    
    function reset() {
        location.reload();
    };

