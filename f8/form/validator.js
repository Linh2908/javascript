function validator(options) {
   let formElement = document.querySelector(options.form);

   function validate(inputElement, rule){
        let errorMessage = rule.test(inputElement.value);
        let errorElement = inputElement.parentNode.querySelector(options.errorSelector);
        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.classList.add('invalid');
        }else{
            errorElement.innerText = '';
            inputElement.classList.remove('invalid');
        }
   }

    if(formElement){
        options.rules.forEach(rule => {
           let inputElement = formElement.querySelector(rule.elemt);
            

           if(inputElement) {
               inputElement.onblur = function () {
                   validate(inputElement,rule);
               }

               inputElement.oninput = function (){
                    let errorElement = inputElement.parentNode.querySelector(options.errorSelector);

                    errorElement.innerText = '';
                    inputElement.classList.remove('invalid');
               }
           }
        });
    }


}
// 1. khi error
// trim() loai bo dau cach
validator.isRequired = (elemt) => ({ elemt,
    test : function (value) {
        return value.trim() ? undefined : 'Vui long nhap truong nay';
    } 
})

validator.isEmail = (elemt) => ({ elemt,
    test : function (value) {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(value) ? undefined : 'Truong nay phai la email';
    } 
})

validator.minLength = (elemt,min) => ({ elemt,
    test : function (value) {
        return  value.length >= 8 ? undefined : `Vui long nhap ${min} ky tu`;
    } 
})

validator.isConfirmed = (elemt,isConfirmedValue, message) => ({ elemt,
    test : function (value) {
        return  value === isConfirmedValue() ? undefined : message || `Truong nay nhap khong dung`;
    } 
})