
//01
// Banner Design with Modal with CustomAlertFB start

// get elements
const applyBtn = document.getElementById('applyButton');
const modal = document.querySelector('.saha-modal');
const modalClose = document.querySelector('.modal-header .close');

const sahaCustomAlert = document.querySelector('.saha-customAlertBox')
const alertClose = document.querySelector('.alertHeader .close');
const keepE = document.querySelector('#keepE');
const discard = document.querySelector('#discard');


applyBtn.addEventListener('click', function (e) {
    // modal.style.opacity = 1;
    // modal.style.pointerEvents = 'painted';
    // modal.style.transform = 'translateY(0)';
    modal.classList.add('activeClass');
    
});
modalClose.addEventListener('click', function (e) {
    sahaCustomAlert.classList.add('activeclear');

});

// "e.target == this" define only affected on this element , 
// parent element will not tergate
modal.addEventListener('click', function (e) {
    if(e.target == this){
        modal.classList.remove('activeClass');
    }
    
});
alertClose.addEventListener('click', function (e) {
    // sahaCustomAlert.style.display = 'none';
    sahaCustomAlert.classList.remove('activeclear');
});
keepE.addEventListener('click', function (e) {
    // sahaCustomAlert.style.display = 'none';
    sahaCustomAlert.classList.remove('activeclear');
});
discard.addEventListener('click', function () {
    sahaCustomAlert.classList.remove('activeclear');
    modal.classList.remove('activeClass');
});


// Banner Design with Modal with CustomAlertFB End


// 02
// FAQ with Accordion Like Bootstrap Start
const accheader = document.querySelectorAll('.acc-header');
// const accbody = document.querySelectorAll('.acc-body');


accheader.forEach(e => {
    e.addEventListener('click', function () {
        e.classList.toggle('activeArrow')
        
        if(e.classList.contains('activeArrow')){
            // e.nextElementSibling.style.height = 'auto';
            e.nextElementSibling.style.height = e.nextElementSibling.scrollHeight + 'px';
            
        }else{
            e.nextElementSibling.style.height = 0;
        }
        accheader.forEach(e => {
            if(e != this){
                e.classList.remove('activeArrow');
                e.nextElementSibling.style.height = 0;
            }
        })
        
    });
});



// const accheader = document.querySelectorAll('.acc-header');
// // const accbody = document.querySelectorAll('.acc-body');


// accheader.forEach(e => {
//     e.addEventListener('click', function () {
//         e.classList.toggle('activeArrow')
        
//         if(e.classList.contains('activeArrow')){
//             // e.nextElementSibling.style.height = 'auto';
//             e.nextElementSibling.style.height = e.nextElementSibling.scrollHeight + 'px';
//         }else{
//             e.nextElementSibling.style.height = 0;
//         }
//     });
// })

// FAQ with Accordion Like Bootstrap End