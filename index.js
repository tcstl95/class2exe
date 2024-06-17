let engineIndicatorLight = 'red blinking';
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

if(engineIndicatorLight === "green"){
    console.log("engines have started");
}else if(engineIndicatorLight === "green blinking"){
    console.log("engines are preparing to start");
}else{
    console.log("engines are off");
}

if(crewStatus === true){
    console.log("Crew Ready");
}else{
    console.log("Crew Not Ready");
}

if(computerStatusCode === 200){
    console.log("Please stand by. Computer is rebooting.");
}else if(computerStatusCode === 400){
    console.log("Success! Computer Online.");
}else{
    console.log("ALERT: Computer offline!");
}

if(shuttleSpeed > 17500){
    console.log("ALERT: Escape velocity reached!");
}else if(shuttleSpeed < 8000){
    console.log("ALERT: Cannot maintain orbit!");
}else{
    console.log("Stable speed");
}

if(crewStatus && computerStatusCode === 200 && spaceSuitsOn){
    console.log("all systems go");
}else{
    console.log("WARNING: Not ready");
}

let fuelLevel = 17000;
let engineTemperature = 1200;

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
    console.log("ENGINE FAILURE IMMINENT!");
  } else if (fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
  } else if (fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.");
  } else if (fuelLevel > 10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%. Engines good.");
  } else if (fuelLevel > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.");
  } else {
    console.log("Fuel and engine status pending...");
  }

  let commandOverride = false;  

  if (commandOverride === true){
    console.log("Commander, we are awaiting your command.");
  } else {
    console.log("Awaiting further instructions.");
  }

  if (fuelLevel > 20000 && engineTemperature <= 2500 && commandOverride === false){
    console.log("Cleared for takeoff!");
  } else {
    console.log("Lauch Scrubbed.");
  }