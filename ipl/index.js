const fs = require("fs");
const csv = require("csvtojson");


const matchesPlayedPerYear = require("./dataFile/matchesPlayedPerYear");
const matchesWonByTeam = require("./dataFile/matchesWonByTeam");
const tenEconomicalBowlers = require("./dataFile/tenEconomicalBowlers");
const extraRunsConcededByEachTeam = require("./dataFile/extraRunsConcededByEachTeam");
const matchesPlayedInCityPerYear = require("./dataFile/matchesPlayedInCityPerYear");


const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH2 = "./public/data2.json";
const JSON_OUTPUT_FILE_PATH3 = "./public/data3.json";
const JSON_OUTPUT_FILE_PATH4 = "./public/data4.json";
const JSON_OUTPUT_FILE_PATH5 = "./public/data5.json";

function main() {
    csv()
      .fromFile(MATCHES_FILE_PATH)
      .then(matches => {
       let result = matchesPlayedPerYear(matches);
       saveMatchesPlayedPerYear(result);
      });
  }


function saveMatchesPlayedPerYear(result) {
    const jsonData = {
      matchesPlayedPerYear: result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }
main();
 
function main2() {
    csv()
      .fromFile(MATCHES_FILE_PATH)
      .then(matches => {
        let result = matchesWonByTeam(matches);
        saveMatchesWonByTeam(result);
      });
  }

function saveMatchesWonByTeam(result) {
    const jsonData = {
        matchesWonByTeam : result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH2, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }  


main2();


function main3() {
  csv()
  .fromFile(MATCHES_FILE_PATH)
  .then(matches => {   
    
    csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
        let result = tenEconomicalBowlers(deliveries, matches);
        saveTenEconomicalBowlers(result);
      });
      
      
  });
}

function saveTenEconomicalBowlers(result) {
  const jsonData = {
    tenEconomicalBowlers : result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH3, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}  



main3();


function main4() {
  csv()
  .fromFile(MATCHES_FILE_PATH)
  .then(matches => {   
    
    csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
        let result = extraRunsConcededByEachTeam(deliveries, matches);
        saveExtraRunsConcededByEachTeam(result);
      });     
      
  });
}


function saveExtraRunsConcededByEachTeam(result) {
  const jsonData = {
    extraRunsConcededByEachTeam : result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH4, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}  

main4();


function main5() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result = matchesPlayedInCityPerYear(matches);
      console.log(result);
    });
}

function saveMatchesPlayedInCityPerYear(result) {
  const jsonData = {
    matchesPlayedInCityPerYear : result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH5, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}  

main5();




