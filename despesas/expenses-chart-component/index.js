const info = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

  const partOne =document.querySelector('.partOne')

  window.addEventListener('DOMContentLoaded', =>{
     
    let number = info.map((item) =>{
      return´<div class="valor">
      <h1>$24.67</h1>
        </div>´
    })

    number = number.join("")
    console.log(number)
  })


  