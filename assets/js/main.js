let amountElement = document.getElementById('amount');

amount = amountElement.value;

let render = (amount) => {
    amountElement.value = amount;
}

let handleMinus = () => {
    if(amount>1){
        amount--;
    }
    render(amount);
}

let handlePlus = () => {
   
    amount++;
    
    render(amount);
}

let addToCart = () => {
    alert('Thêm vào giỏ hàng thành công');
}