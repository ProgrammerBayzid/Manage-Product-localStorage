const inputValue = (id) => {
    const input = document.getElementById(id);
    const value = input.value;
    input.value = "";
    return value;
}

const addProduct = () => {
    const product_name = inputValue("product-name");
    const product_quantity = inputValue("product-quantity");

    const number = Number(product_quantity)


    console.log(product_name, product_quantity);
    if(!isNaN(product_name) || !Number.isInteger(number)){
        // console.log("vul input");
        alert ("wrong input");
        return;
    }
    setProductLocalStor(product_name, product_quantity )
    // console.table(getLocalStor());
    display();
    }

const getLocalStor = () =>{
    const products = localStorage.getItem("all_pdt");
    const paresProduct = JSON.parse(products);
    return paresProduct
}


    const setProductLocalStor =(name, quantity)=>{
        // const products = {
        //     name:name,
        //     quantity:  quantity,
        // }
        // localStorage.setItem("all_pdt", JSON.stringify(products) );

        let products = getLocalStor();
        if (!products){
            products ={};
        }

        if(products[name])
    {
        products[name] = parseInt(products[name]) + parseInt(quantity)
    }
    else
    {
        products[name] = quantity;
    }



        // products[name]= quantity;
        localStorage.setItem("all_pdt", JSON.stringify(products) );

    }

    const display = () => {
        const products = getLocalStor();
        const section = document.getElementById("all-products");
        section.textContent = "";

        for (const product in products){
            // console.log(product, products[product])

        const name = product;
        const quantity = products[product];
            
            
            const div = document.createElement("div");
        div.innerHTML = `<div class="shadow-sm p-3 mb-2 bg-body rounded">
            <span class="fs-4">${name}</span>
            Quantity:<small class="fw-bold">
                ${quantity}
            </small>
        </div>`;

        section.appendChild(div);
        }

    }
    display();