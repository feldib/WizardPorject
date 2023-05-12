const thisSite = 'phase2'

setTimeout(()=>{return}, 10000)

document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.getElementById('back-button');
  const nextButton = document.getElementById('next-button');

  storage.checksite(thisSite);

  nextButton.addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const street = document.getElementById('street').value;
    const number = document.getElementById('number').value;

    if(city){
      storage.setItem('city', city);
    }
    if(street){
      storage.setItem('street', street);
    }
    if (number) {
      storage.setItem('number', number);
    }
    
    if (!storage.isDataStored(['city', 'street', 'number'])) {
      alert("Please fill in all fields before proceeding.");
    }else{
      toPhase3()
    }
    
  });

  backButton.addEventListener('click', () => {
    window.location.href = './phase1.html';
  });
  
});
