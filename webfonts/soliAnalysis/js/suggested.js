// Define the minimum and maximum values for NPK for each crop
const minValues = {
    "N": {
        "apple": 0,
        "banana": 80,
        "blackgram": 20,
        "corn": 20,
        
        "coffee": 80,
        "cotton": 100,
        "grapes": 0,
        "jute": 60,
        "kidneybeans": 0,
        "lentil": 0,
        "maize": 60,
        "mango": 0,
        "mothbeans": 0,
        "mungbean": 0,
        "muskmelon": 80,
      
        "corn": 31,
        "pigeonpeas": 0,
        "corn": 0,
        "chickpea": 60,
        "watermelon": 80
    },
    "P": {
        "apple": 120,
        "banana": 70,
        "blackgram": 55,
        "corn": 55,
        "banana,peanut": 5,
        "coffee": 15,
        "cotton": 35,
        "grapes": 120,
        "jute": 35,
        "kidneybeans": 55,
        "lentil": 55,
        "maize": 35,
        "mango": 15,
        "mothbeans": 35,
        "mungbean": 35,
        "muskmelon": 5,
        
        "corn": 46,
        "pigeonpeas": 55,
        "corn": 5,
        "chickpea": 35,
        "watermelon": 5
    },
    "K": {
        "apple": 195,
        "banana": 45,
        "blackgram": 15,
        "corn": 75,
        "banana,peanut": 25,
        "coffee": 25,
        "cotton": 15,
        "grapes": 195,
        "jute": 35,
        "kidneybeans": 15,
        "lentil": 15,
        "maize": 15,
        "mango": 25,
        "mothbeans": 15,
        "mungbean": 15,
        "muskmelon": 45,
        "orange": 5,
        "corn": 45,
        "pigeonpeas": 15,
        "corn": 35,
        "chickpea": 35,
        "watermelon": 45
    }
} // (as given in the previous code block)
const maxValues = {
    "N": {
        "apple": 40,
        "banana": 120,
        "blackgram": 60,
        "corn": 60,
        "banana,peanut": 40,
        "coffee": 120,
        "cotton": 140,
        "grapes": 40,
        "jute": 100,
        "kidneybeans": 40,
        "lentil": 40,
        "maize": 100,
        "mango": 40,
        "mothbeans": 40,
        "mungbean": 40,
        "muskmelon": 120,
        "orange": 40,
        "corn": 70,
        "pigeonpeas": 40,
        "corn": 40,
        "chickpea": 99,
        "watermelon": 120
    },
    "P": {
        "apple": 145,
        "banana": 95,
        "blackgram": 80,
        "corn": 80,
        "banana,peanut": 30,
        "coffee": 40,
        "cotton": 60,
        "grapes": 145,
        "jute": 60,
        "kidneybeans": 80,
        "lentil": 80,
        "maize": 60,
        "mango": 40,
        "mothbeans": 60,
        "mungbean": 60,
        "muskmelon": 30,
        "orange": 30,
        "corn": 70,
        "pigeonpeas": 80,
        "corn": 30,
        "chickpea": 60,
        "watermelon": 30
    },
    "K": {
        "apple": 205,
        "banana": 55,
        "blackgram": 25,
        "corn": 85,
        "banana,peanut": 35,
        "coffee": 35,
        "cotton": 25,
        "grapes": 205,
        "jute": 45,
        "kidneybeans": 25,
        "lentil": 25,
        "maize": 25,
        "mango": 35,
        "mothbeans": 25,
        "mungbean": 25,
        "muskmelon": 55,
        "orange": 15,
        "corn": 55,
        "pigeonpeas": 25,
        "corn": 45,
        "chickpea": 45,
        "watermelon": 55
    }
} // (as given in the previous code block)

// Define the function to suggest crops based on NPK values
export function suggestCrops(n, p, k) {
  let suggestedCrops = [];
  let minDist = Infinity;

  // Loop through each crop
  for (let crop in minValues.N) {
    // Calculate the distance from the minimum and maximum values for each NPK component
    const dist = Math.sqrt((minValues.N[crop]-n)**2 + (minValues.P[crop]-p)**2 + (minValues.K[crop]-k)**2)
                  + Math.sqrt((maxValues.N[crop]-n)**2 + (maxValues.P[crop]-p)**2 + (maxValues.K[crop]-k)**2);
    
    // If the distance is less than the minimum distance so far, update the suggested crops array
    if (dist < minDist) {
      suggestedCrops = [crop];
      minDist = dist;
    } else if (dist === minDist) {
      // If the distance is equal to the minimum distance so far, add the crop to the suggested crops array
      suggestedCrops.push(crop);
    }
  }
  
  // Return the suggested crops array
  return suggestedCrops;
}

