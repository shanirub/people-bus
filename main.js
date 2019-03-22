var number = function(busStops){
  let pplUp = 0
  let pplDown = 0
  var currentStop = []
  
  for (let i = 0; i < busStops.length; i++) {
    currentStop = busStops[i]
    pplUp += currentStop[0]
    pplDown += currentStop[1]
  }
  
  return (pplUp - pplDown)
}