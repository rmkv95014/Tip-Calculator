let tip;

// when the window loads, update the text
window.onload += updatePercent();
//changes the text next to the slider based on the slider's value
function updatePercent()
{
    tip = document.getElementById('tiprange').value;
    document.getElementById('tipTxt').innerText = tip +'%';
}
//calculates the amount needed to pay
function calculateTip()
{
    try 
    {
        let billAmount = parseInt(document.getElementById("input").value);
        let pay = billAmount + billAmount * (tip/100)
        document.getElementById("amountToPay").innerText = "$" + pay;
    } catch (error) {
        // alert("Unable to Calculate tip needed to pay, please try again");
        alert(error)
    }
    finally {
        return;
    }
}