// localStorageHandler.js

const storage = {
    setItem: (key, value) => {
      localStorage.setItem(key, value);
    },
  
    getItem: (key) => {
      return localStorage.getItem(key);
    },
  
    removeItem: (key) => {
      localStorage.removeItem(key);
    },
  
    user: {
      get name() {
        return localStorage.getItem('name');
      },
      get email() {
        return localStorage.getItem('email');
      },
      get birthdate() {
        return localStorage.getItem('birthdate');
      },
      get city() {
        return localStorage.getItem('city');
      },
      get street() {
        return localStorage.getItem('street');
      },
      get number() {
        return localStorage.getItem('number');
      },
      get image() { //this
        return localStorage.getItem('image');
      },
      get hobbies() { //this
        return localStorage.getItem('hobbies');
      },
      get happy() { //this
        return localStorage.getItem('happy');
      },
      get skydiving() { //this
        return localStorage.getItem('skydiving');
      },
      get hasOneDollar() { //this
        return localStorage.getItem('hasOneDollar');
      }
    },
  
    redirectToLastCompletedPhase: () => {
      if (!storage.user.name || !storage.user.email || !storage.user.birthdate) {
        window.location.href = './phase1.html';
      } else if (storage.user.name && 
                 storage.user.email && 
                 storage.user.birthdate && 
                 !storage.user.city && 
                 !storage.user.street) { 
        window.location.href = './phase2.html';
      } else if (storage.user.name && 
                 storage.user.email && 
                 storage.user.birthdate && 
                 storage.user.city && 
                 storage.user.street && 
               (!storage.user.image && !storage.user.hobbies)) {
        window.location.href = './phase3.html';
      };
      //vissza kell hogy vigyen PHASE
    },

    checksite: (site) => {
      if (site === 'phase2' && !(storage.user.name && storage.user.email && storage.user.birthdate)) {
          window.location.href = './phase1.html';
      } else if (site === 'phase3' && !(storage.user.city && storage.user.street)) {
          window.location.href = './phase2.html';
      } else if (site === 'phase4' && !(storage.user.image)) {
        window.location.href = './phase3.html';
      } else if (site === 'summary' && !(storage.user.happy && storage.user.skydiving && storage.user.hasOneDollar)) {
          window.location.href = './phase4.html';
      }
  },


    isDataStored: (keys) => {
      for (const key of keys) {
        if (!localStorage.getItem(key)) {
          return false;
        }
      }
      return true;
    },

    reset: () => {
      localStorage.clear()
      // pageManager.redirectToPhase1()
      window.location.href = './phase1.html'
    }
  };
  
  //export default storage;
  
//buttons:
function toPhase1(){
  window.location.href = './phase1.html'
};

function toPhase2(){
  window.location.href = "./phase2.html"
};

function toPhase3(){
  window.location.href = "./phase3.html"
};

function toPhase4(){
  window.location.href = './phase4.html'
};

function goToSummary(){
  window.location.href = './summary.html'
}



