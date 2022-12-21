window.addEventListener('DOMContentLoaded', function(){
  let deliveryPoint = document.querySelector('.header-tracking > .tracking');

  let closeDeliveryPoint = () =>{
    deliveryPoint.classList.add('hide')
  }

  function init(){
    setTimeout(closeDeliveryPoint, 3000)
  }
  init()
})