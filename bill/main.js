var body;
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
    if (localStorage.length == 0) {
        console.log("No Bill Data Found");
        body = document.getElementById('body')
        body.innerHTML = ""
        let errorHtml = `
                <div class="error_container">
                    <h1 class="error_header">No Data!</h1>
                    <p>Oops! No Bill Data Found. Fill Bill From Here - <a href="../index.html">New Bill</a></p>
                </div>
            `
        body.innerHTML = errorHtml
    }
    else {
        tableElm = document.getElementById('table')
        var localProduct = localStorage.getItem('products')
        localProduct = localProduct.split(',')
        var localPrice = localStorage.getItem('rate')
        localPrice = localPrice.split(',')
        var localQuentity = localStorage.getItem('qty')
        localQuentity = localQuentity.split(',')
        var localFree = localStorage.getItem('free')
        if (localFree == "") {
            localFree = "-"
        } else {
            localFree = localFree.split(',')
        }
        var localAmount = localStorage.getItem('amount')
        localAmount = localAmount.split(',')
        var localTotal = localStorage.getItem('totalVal')
        var localDoctor = localStorage.getItem('doctorName')
        var localPlace = localStorage.getItem('placeName')
        var localDate = localStorage.getItem('date')
        localDate = localDate.split('-')

        doctorNameElm = document.getElementById('doctorName')
        placeElm = document.getElementById('place')
        dateElm = document.getElementById('date')
        doctorNameElm.innerHTML = localDoctor
        placeElm.innerHTML = localPlace
        // console.log(localDate);
        dateElm.innerHTML = `${localDate[2]}-${localDate[1]}-${localDate[0]}`


        for (let a = 0; a < localProduct.length; a++) {
            rawHtml = `
                    <tr>
                        <td id="product">${localProduct[a]}</td>
                        <td class="text-center" id="qty">${localQuentity[a]}</td>
                        <td class="text-center" id="free">${localFree[a]}</td>
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
                    <td class="no-line"></td>
                    <td class="no-line text-center"></td>
                    <td class="no-line text-right"></td>
                </tr>
                <tr>
                    <td class="no-line"></td>
                    <td class="no-line"></td>
                    <td class="no-line"></td>
                    <td class="no-line text-center"><strong>Total</strong></td>
                    <td class="no-line text-right">${localTotal}</td>
                </tr>
            `

        tableElm.innerHTML += totalHtml

    }
}