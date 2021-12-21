window.addEventListener('load', function(e) {
    const btnAddress =  document.querySelector('.header_address');
    const formAdd = document.querySelector('#form-address');
    btnAddress.addEventListener('click', function(e) {
        const btn = e.target.querySelector('.dropdown');
        btn.classList.add('rotate');
        formAdd.style.display = 'block';
    })
    formAdd.querySelector('#closeForm').addEventListener('click', function() {
        this.offsetParent.style.display = 'none';
        btnAddress.querySelector('.dropdown.rotate').classList.remove('rotate');
    })
    
   formAdd.addEventListener('click', function(e) { 
       if(e.target.matches('.form-address')){
           this.style.display = 'none';
           btnAddress.querySelector('.dropdown.rotate').classList.remove('rotate');
       }
   })
 /**  code silde js */
   function getSlide(slideID) {
        let curruntSlide = 0;
        let mainSlide = document.querySelector(slideID);
        let nextBtn = mainSlide.querySelector('.next');
        let prevBtn = mainSlide.querySelector('.prev');
        const slides = mainSlide.querySelectorAll('.slide-item');
        const dotControl = mainSlide.querySelectorAll('.dot-slide');
        prevBtn.onclick = function() {
            curruntSlide --;
            showSlides(curruntSlide);

        };
        console.log(dotControl);
        nextBtn.onclick = function() {
            curruntSlide ++;
            showSlides(curruntSlide);

        };
        function changeStyle (){
            slides.forEach(element => {
               element.style.display = 'none';
           });
           slides[curruntSlide].style.display = 'block';
        }

        function addClassName (){
            dotControl.forEach(element => {
               element.classList.remove('active');
           });
           dotControl[curruntSlide].classList.add('active');
           if(curruntSlide < 5){
                dotControl.forEach(element => {
                    element.style.display='block';
                });
               for(let i= 5 ; i <dotControl.length; i++){
                   dotControl[i].style.display = 'none';
               }
           }else if(curruntSlide >= dotControl.length -2) {
                dotControl.forEach(element => {
                    element.style.display='block';
                });
               for (let index = 0; index < dotControl.length-5; index++) {
                   dotControl[index].style.display = 'none';
               }
           }
           
        }

        function showSlides(n){
            if(n < 0) {curruntSlide = slides.length-1};
            if(n > slides.length-1) { curruntSlide = 0};
            changeStyle();
            addClassName();
        }
        showSlides(curruntSlide);
        (function showSlides() {
            changeStyle();
            addClassName();
            curruntSlide ++;
            if(curruntSlide > slides.length -1) {curruntSlide = 0};
            setTimeout(showSlides,6000);
        })();

   }
   getSlide('#slide-show')
})
