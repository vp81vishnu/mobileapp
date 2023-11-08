import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref,onValue} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import { suggestCrops } from "./suggested.js";
const fertilizer = {
  cotton: 'April-September  N-P-K 20-10-10',
  coffee: 'November-January &&  Potash',
  muskmelon: ' November-February && cow dung manure',
  banana: ' June-September N-P-K 5-10-10',
  watermelon: ' February-March N-P-K 8-12-12',
  rice: ' July-December Urea',
  jute: ' Maarch to May Ammonium sulphate',
  maize: ' June-August && N-P-K 25-5-20',
  papaya: 'June-November && N-P-K 14-14-14',
  chickpea: 'February -April N-P-K 10-10-10',
  blackgram: ' February-April N-P-K 20-40-20',
  grapes: ' February-April N-P-K 4-3-4',
  peanut:  ' June-September N-P-K 5-10-10',
  mothbeans: 'June-July && N-P-K 5-10-10',
  mungbean: 'June-July && N-P-K 5-10-10',
  apple: 'Apr-July && N-P-K 10-10-10',
  kidneybeans: ' June-October N-P 80-50',
  pigeonpeas: 'June-October urea and super phosphate',
  mango: 'July-August N-P-K 2-2-2',
  orange: 'Sep-Dec && N-P-K 2-2-1',
  corn: ' June-July && N-P-K 20-20-10',
  lentil: 'Dec && N-P-K 16-16-16',
  'broad beans': 'Mar-June && N-P-K 5-10-10',
  'bitter gourd': 'Jan-Feb && N-P-K 10-10-10',
  brinjal: 'June-July & Dec-Jan && N-P-K 10-10-10',
  beetroot: 'Aug-Nov && N-P-K 5-10-10',
  bottlegourd: 'Jan-Mar && N-P-K 5-5-5',
  'green chilli':'May-June N-P-K 20-20-20',
  okra: 'June-July && N-P-K 10-10-10',
  potato: 'Jan/Oct && N-P-K 10-24-24',
  onion: 'Oct-Nov && N-P-K 12-12-12',
  snakegourd: 'Jan-mar/Sep-Dec && N,P,K equally',
  sugarcane:'Tri Seasons &&  180-200 kg N, 60-80 kg P, 50-60 kg K'

};

const firebaseConfig = {
    databaseURL: "https://soil-monitoring-pcb-default-rtdb.firebaseio.com/",
  };
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  const dataRef = ref(database);
  onValue(dataRef, (snapshot) => {
     const data = snapshot.val();
     console.log("Data:", data);
     const nValue = data.Soil_Nitrogen;
     const pValue = data.Soil_phosphorous;
     const kValue=data.Soil_potassium;
     document.getElementById("nvalue").innerHTML=data.Soil_Nitrogen;
     document.getElementById("pvalue").innerHTML=data.Soil_phosphorous;
     document.getElementById("kvalue").innerHTML=data.Soil_potassium;
     document.getElementById("ecvalue").innerHTML=data.Soil_EC;
     document.getElementById("temp").innerHTML=data.Temperature+"°C";
     document.getElementById("humidity").innerHTML=data.Humidity;
     const suggestedCrops = suggestCrops(nValue, pValue, kValue);
     const sc = document.getElementById("sc");
     const fr = document.getElementById("fr");
     var elem="";
     var ferti="";
     suggestedCrops.map(function (item){
      
      ferti+='<li class="d-flex mb-4 pb-1"> 🌱'+fertilizer[item]+'</li>';
     });
     sc.innerHTML = elem;
     fr.innerHTML=ferti;
     console.log(`Suggested crops for N:${nValue}, P:${pValue}, K:${kValue} are ${suggestedCrops}`);
});
const btn = document.getElementById('btn');
btn.addEventListener("click",function(){
  const search = document.getElementById("search").value.toLowerCase();
  const list = document.getElementById("list");
  list.innerHTML='🪴'+fertilizer[search];
});



