(() => {
  enum AudioLevel {
    min = 1,
    medium, // Como no tiene un valor por default toma el valor del anterior  + 1
    max = 10,
  }

  let currentAudio = AudioLevel.medium;

  console.log(currentAudio);
})();
