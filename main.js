var number = function(busStops){
    let pplUp = 0
    let pplDown = 0
    let currentStop
    
    for (let i = 0; i < busStops.length; i++) {
      currentStop = busStops.pop
      pplDown += currentStop.pop
      pplUp += currentStop.pop
    }
    
    return (pplUp - pplDown)
  }

  