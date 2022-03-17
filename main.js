const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
.txt, .title-border-top , .title-service, .list-price, .img, .link-social a, .whatsaap `,
  { interval: 40 }
)
