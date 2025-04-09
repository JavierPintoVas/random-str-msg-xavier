const messages = [
    "Tu sonrisa ilumina el día más oscuro.",
    "Eres la melodía más bella para mis oídos.",
    "Tu mirada tiene la profundidad del océano.",
    "Cada palabra tuya es un regalo.",
    "Tu corazón es un tesoro invaluable.",
    "Eres la estrella que guía mi camino.",
    "Tu espíritu es tan brillante como el sol.",
    "Tu belleza florece como la primavera.",
    "Eres la poesía hecha persona.",
    "Tu alma es tan pura como el cristal.",
    "Eres la inspiración de mis sueños.",
    "Tu presencia es un bálsamo para mi alma.",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };