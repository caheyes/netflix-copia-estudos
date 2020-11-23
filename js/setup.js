$('.owl-carousel').owlCarousel({
  loop: true, //efeito para quando acabar a lista começar novamente
  margin:10, //altera a margem de um filme para o outro 
  nav:false, //para habilitar a setinha de navegação
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})