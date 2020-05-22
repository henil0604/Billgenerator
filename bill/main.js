var orderIndexElm;
var doctorNameElm;
var placeElm;
var dateElm;
var tableElm;
var prdElm;
var prcElm;
var qtyElm;
var amtElm;
var doctorName;
var placeName;
var date;
var orderIndex;
var rawHtml = `
    <tr>
        <td id="product"></td>
        <td class="text-center" id="price"></td>
        <td class="text-center" id="qty"></td>
        <td class="text-right" id="amount"></td>
    </tr>
`
var i = 1

function load() {
    tableElm = document.getElementById('table')
    orderIndex = i;
    orderIndexElm = document.getElementById('orderIndex')
    orderIndexElm.innerHTML = "Order #" + orderIndex

    var localProduct = localStorage.getItem('products')
    localProduct = localProduct.split(',')
    var localPrice = localStorage.getItem('rate')
    localPrice = localPrice.split(',')
    var localQuentity = localStorage.getItem('qty')
    localQuentity = localQuentity.split(',')
    var localAmount = localStorage.getItem('amount')
    localAmount = localAmount.split(',')
    var localTotal = localStorage.getItem('totalVal')
    var localDoctor = localStorage.getItem('doctorName')
    var localPlace = localStorage.getItem('placeName')
    var localDate = localStorage.getItem('date')
    doctorNameElm = document.getElementById('doctorName')
    placeElm = document.getElementById('place')
    dateElm = document.getElementById('date')
    doctorNameElm.innerHTML = localDoctor
    placeElm.innerHTML = localPlace
    dateElm.innerHTML = localDate


    for (let a = 0; a < localProduct.length; a++) {
        rawHtml = `
                    <tr>
                        <td id="product">${localProduct[a]}</td>
                        <td class="text-center" id="qty">${localQuentity[a]}</td>
                        <td class="text-center" id="price">${localPrice[a]}</td>
                        <td class="text-right" id="amount">${localAmount[a]}</td>
                    </tr>
            `
        tableElm.innerHTML += rawHtml
    }

    totalHtml = `
        <tr>
            <td class="no-line"></td>
            <td class="no-line"></td>
            <td class="no-line text-center"><strong>Total</strong></td>
            <td class="no-line text-right">${localTotal}</td>
        </tr>
    `

    tableElm.innerHTML += totalHtml


}