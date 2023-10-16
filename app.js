var buyPrice = document.getElementById('buy-price');
var stocksQuantity = document.getElementById('quantity');
var currentPrice = document.getElementById('current-price');
var submitBtn = document.getElementById('submit-btn');
var output = document.getElementById('output');
var container = document.querySelector('.container');

function calculateProfitOrLoss(initial, quantity, current) {
     var difference= (quantity * (current - initial)).toFixed(2);
     var diffPercentage = ((difference / initial) * 100).toFixed(2);
     
     if(difference > 0) {
        output.innerText = `Hey the profit is ${difference} and percent is ${diffPercentage} %`;
        container.className='profit';
    } else if(difference < 0) {
        output.innerText = `Hey the loss is ${-1*difference} and percent is ${-1*diffPercentage} %`;
        container.className='loss';
    } else {
        output.innerText = `You have not made any profit or loss`;
     }
}

function submitHandler() {
    var ip = Number(buyPrice.value);
    var sq = Number(stocksQuantity.value);
    var cp = Number(currentPrice.value);

    calculateProfitOrLoss(ip, sq, cp);
}

submitBtn.addEventListener('click', submitHandler);

