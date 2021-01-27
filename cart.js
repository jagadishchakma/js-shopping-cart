    // incresee product
const addProduct = document.getElementById('addProduct');
addProduct.addEventListener('click', () => {
    const iPhone11Black = document.getElementById('iPhone11Black').value;
    const iPhone11BlackAmmount = parseInt(iPhone11Black);
    const iPhone11BlackTotal = iPhone11BlackAmmount + 1;
    document.getElementById('iPhone11Black').value = iPhone11BlackTotal;

    // hold product value and plus ammount id
    const iPhone11BlackValue = parseInt(document.getElementById('iPhone11BlackValue').textContent);
   
    function addiPhone11Black(id,ammount) {
        const element = document.getElementById(id).textContent;
        const elementValue = parseInt(element);
        const elementValueTotal = elementValue + 1219;
        document.getElementById(id).textContent = elementValueTotal;
    }
    addiPhone11Black('iPhone11BlackValue', iPhone11BlackValue);
    addiPhone11Black('subTotal', iPhone11BlackValue);
    addiPhone11Black('total', iPhone11BlackValue);
   
});
// decrease product
const leftProduct = document.getElementById('leftProduct');
leftProduct.addEventListener('click', () => {
    const iPhone11Black = document.getElementById('iPhone11Black').value;
    const iPhone11BlackAmmount = parseInt(iPhone11Black);
    if(iPhone11BlackAmmount  > 1){
        const iPhone11BlackTotal = iPhone11BlackAmmount - 1;
        document.getElementById('iPhone11Black').value = iPhone11BlackTotal;
        // hold product value and plus ammount id
        const iPhone11BlackValue = 1219;
    
        function addiPhone11Black(id,ammount) {
            const element = document.getElementById(id).textContent;
            const elementValue = parseInt(element);
            const elementValueTotal = elementValue - ammount;
            document.getElementById(id).textContent = elementValueTotal;
        }
        addiPhone11Black('iPhone11BlackValue', iPhone11BlackValue);
        addiPhone11Black('subTotal', iPhone11BlackValue);
        addiPhone11Black('total', iPhone11BlackValue);
    }
});



    // incresee product
    const addProduct2 = document.getElementById('addProduct2');
    addProduct2.addEventListener('click', () => {
        const iPhone11Black = document.getElementById('iPhone11Black1').value;
        const iPhone11BlackAmmount = parseInt(iPhone11Black);
        const iPhone11BlackTotal = iPhone11BlackAmmount + 1;
        document.getElementById('iPhone11Black1').value = iPhone11BlackTotal;
    
        // hold product value and plus ammount id
        const iPhone11BlackValue = parseInt(document.getElementById('iPhone11BlackValue1').textContent);
       
        function addiPhone11Black(id,ammount) {
            const element = document.getElementById(id).textContent;
            const elementValue = parseInt(element);
            const elementValueTotal = elementValue + 59;
            document.getElementById(id).textContent = elementValueTotal;
        }
        addiPhone11Black('iPhone11BlackValue', iPhone11BlackValue);
        addiPhone11Black('subTotal', iPhone11BlackValue);
        addiPhone11Black('total', iPhone11BlackValue);
       
    });
    // decrease product
    const leftProduct2 = document.getElementById('leftProduct2');
    leftProduct2.addEventListener('click', () => {
        const iPhone11Black = document.getElementById('iPhone11Black1').value;
        const iPhone11BlackAmmount = parseInt(iPhone11Black);
        if(iPhone11BlackAmmount  > 1){
            const iPhone11BlackTotal = iPhone11BlackAmmount - 1;
            document.getElementById('iPhone11Black1').value = iPhone11BlackTotal;
            // hold product value and plus ammount id
            const iPhone11BlackValue = 59;
        
            function addiPhone11Black(id,ammount) {
                const element = document.getElementById(id).textContent;
                const elementValue = parseInt(element);
                const elementValueTotal = elementValue - ammount;
                document.getElementById(id).textContent = elementValueTotal;
            }
            addiPhone11Black('iPhone11BlackValue', iPhone11BlackValue);
            addiPhone11Black('subTotal', iPhone11BlackValue);
            addiPhone11Black('total', iPhone11BlackValue);
        }
    });