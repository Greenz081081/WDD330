import { loadHeaderFooter } from "./utils.js";
import CheckoutProcess from "./checkoutProcess.js"

loadHeaderFooter();


const checkListProc = new CheckoutProcess('so-cart', '.checkout-summary')
checkListProc.init();

document.querySelector('#zip').addEventListener('blur', checkListProc.calculateOrder)

document.querySelector('#checkoutSubmit').addEventListener('click', (e)=>{
    const myForm = document.forms[0]
    const chk_status = myForm.checkValidity()
    myForm.reportValidity();
    if(chk_status)
        myCheckout.checkout()

    e.preventDefault()
})