// get the api ket and access the value
let number = document.getElementById("cool")
var myHeaders = new Headers();
myHeaders.append("apikey", "r7tVGmH3RL8nSvjDMcXkYBQ3mQdRpVeQ");
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
// put if () then change the amount base on the product
let dropdownList = document.getElementById('select_box');
    dropdownList.onchange = (ev) =>{
      fetch("https://api.apilayer.com/exchangerates_data/convert?to="+dropdownList.value+"&from=USD&amount=1", requestOptions)
      .then(response => response.text())
      .then(result => {
      const object = JSON.parse(result)
      number.innerHTML =  object['info']['rate']
  	})
}

// for the appointment content 
const scriptURL = 'https://script.google.com/macros/s/AKfycbwCdNAVpw_R3pTm1GyvrIFMa9UiaVsGr2EKQrZi9iALgqMEkHPf3xN-AlddCtpByK6h/exec'
      const form = document.forms['google-sheet']
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => alert("We will contact you soon"))
      })


