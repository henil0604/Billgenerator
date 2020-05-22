console.log("Automatic Bill Generator");

var doctorName;
var placeName;
var date;
var calcDiv = document.getElementById('calcDiv')
var select = document.getElementById('productInput')
var qty;
var rate;
var gst;
var amount;
var prdInfo = []
var qtyInfo = []
var freeInfo = []
var rateInfo = []
var amtInfo = []
var proInfoObj = [];
var priceQuntityDivHTML;
var priceQuntityDivHTML2;
var i = 0;
var priceQuntityDiv = document.getElementById('priceQuntityDiv')

select.addEventListener('input', () => {
    // console.log(select.value)
    if (select.value == "") {
        window.alert("Please Select Products")
    } else {
        priceQuntityDivHTML = `
        <div class="PNQDiv my-2" id="productInfo${i}">
            <h5 class="text-muted">${select.value}</h5>
            <h6 class="text-muted mx-5 my-1">Qty</h6>
            <input type="text" class="form-control qty" id="qty${i}" oninput="calc()">
            <h6 class="text-muted mx-5 my-1">Free</h6>
            <input type="text" class="form-control free" id="free${i}">
            <h6 class="text-muted mx-5 my-1">Rate</h6>
            <input type="text" class="form-control rate" id="rate${i}" oninput="calc()">
            <h6 class="text-muted mx-5 my-1">GST</h6>
            <input type="text" class="form-control gst" id="gst${i}" value="12" oninput="calc()">
            <h6 class="text-muted mx-1 my-2">%</h6>
            <h6 class="text-muted mx-5 my-1">Amount</h6>
            <input type="text" class="form-control amount" id="amount${i}">
            </div>
            `
        priceQuntityDivHTML2 = `
        <div class="PNQDiv my-2" id="productInfo${i}">
            <h5 class="text-muted">${select.value}</h5>
            <h6 class="text-muted mx-5 my-1">Qty</h6>
            <input type="text" class="form-control qty" id="qty${i}" oninput="calc()">
            <h6 class="text-muted mx-5 my-1">Free</h6>
            <input type="text" class="form-control free" id="free${i}">
            <h6 class="text-muted mx-5 my-1"">Rate</h6>
            <input type="text" class="form-control rate" id="rate${i}" oninput="calc()">
            <h6 class="text-muted mx-5 my-1">GST</h6>
            <input type="text" class="form-control gst" id="gst${i}" value="18" oninput="calc()">
            <h6 class="text-muted mx-1 my-2">%</h6>
            <h6 class="text-muted mx-5 my-1">Amount</h6>
            <input type="text" class="form-control amount" id="amount${i}">
            </div>
    `
        if (select.value == "MITHICOB MD" || select.value == "KERAMAX 30 TAB" || select.value == "KERAMAX 15 TAB") {
            prdInfo.push(select.value)
            localStorage.setItem('products', prdInfo)
            // console.log(proInfoObj);
            priceQuntityDiv.innerHTML += priceQuntityDivHTML2
            // console.log(proInfoObj);
            i += 1
        }
        else {
            prdInfo.push(select.value)
            localStorage.setItem('products', prdInfo)
            // console.log(proInfoObj);
            priceQuntityDiv.innerHTML += priceQuntityDivHTML
            // console.log(proInfoObj);
            i += 1
        }
    }
})

function calc() {
    var obj = [];
    div = document.getElementsByClassName('PNQDiv')
    // console.log(div);
    for (let i = 0; i < div.length; i++) {
        all = div[i].childNodes
        // console.log(all);
        qty = div[i].childNodes[5]
        // console.log(qty);
        free = div[i].childNodes[9]
        // console.log(free);
        rate = div[i].childNodes[13]
        // console.log(rate);
        gst = div[i].childNodes[17]
        // console.log(gst);
        amount = div[i].childNodes[23]
        // console.log(amount);

        let sum1 = (qty.value * rate.value)
        let sum2 = ((sum1 * gst.value) / (100))
        totalCalc = (qty.value * rate.value) + ((sum1 * gst.value) / (100))
        amount.value = totalCalc
    }

}


function total() {
    div = document.getElementsByClassName('PNQDiv')
    doctorName = document.getElementById('doctorNameInput')
    localStorage.setItem('doctorName', doctorName.value)
    placeName = document.getElementById('placeNameInput')
    localStorage.setItem('placeName', placeName.value)
    date = document.getElementById('dateInput')
    localStorage.setItem('date', date.value)

    var totalDiv = document.getElementById('totalDiv')
    var totalVal = 0;
    totalHtml = `
    <input class="form-control my-5" id="total" placeholder="Total" value="">
    `
    totalDiv.innerHTML = totalHtml
    div = document.getElementsByClassName('PNQDiv')
    totalObj = []
    for (let i = 0; i < div.length; i++) {
        amount = div[i].childNodes[23]
        // console.log(amount.value);
        amountVal = parseFloat(amount.value)
        totalVal += "0 + " + amount.value + "+ 0"
        // console.log(totalVal);
    }
    document.getElementById('total').value += eval(totalVal)
    localStorage.setItem('totalVal', eval(totalVal))


    for (let i = 0; i < div.length; i++) {
        all = div[i].childNodes
        console.log(all);
        qty = div[i].childNodes[5]
        // console.log(qty);
        free = div[i].childNodes[9]
        // console.log(free);
        rate = div[i].childNodes[13]
        // console.log(rate);
        gst = div[i].childNodes[17]
        // console.log(gst);
        amount = div[i].childNodes[23]
        // console.log(amount);
        qtyInfo.push(qty.value)
        freeInfo.push(free.value)
        rateInfo.push(rate.value)
        amtInfo.push(amount.value)
    }
    localStorage.setItem('qty', qtyInfo)
    localStorage.setItem('free', freeInfo)
    localStorage.setItem('rate', rateInfo)
    localStorage.setItem('amount', amtInfo)
    location.href = "bill/main.html"
}


// let sum1 = (qty.value * rate.value)
// let sum2 = ((sum1 * gst.value) / (100))
// amount.value = (qty.value * rate.value) + ((sum1 * gst.value) / (100))