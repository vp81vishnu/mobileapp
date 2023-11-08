import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref,onValue} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'


const firebaseConfig = {
    databaseURL: "https://soil-monitoring-pcb-default-rtdb.firebaseio.com/",
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  const dataRef = ref(database);
  onValue(dataRef, (snapshot) => {
     const data = snapshot.val();
     
     console.log("Data:", data);
     const DO2 = data.Dissolved_Oxgyen;
     const OXP = data.Oxidation_reduction_potential;
     const kValue=data.Turbidity;
     document.getElementById("DO2").innerHTML=data.Dissolved_Oxgyen;
     document.getElementById("OXP").innerHTML=data.Oxidation_reduction_potential;
     document.getElementById("TURB").innerHTML=data.Turbidity;
  

     
});



