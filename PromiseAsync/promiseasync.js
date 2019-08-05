/*=======================================================================
// Here we will demonstrate promises in JavaScript. Assume we have a
// fictional object that represents a connection between two nodes.
// There's a number that increments per contact, three fields for
// defining the location of the sender, as well as a boolean that
// signifies if a connection has been established.
=======================================================================*/
let connectionData = {
  num: 78,
  celestial: "Mars",
  sector: "Tharsis Rise",
  message: "We've arrived at the landing site.",
  connectionHQ: true
};

// Here we will create a promise that will either send back the details
// of the message sent to HQ if the connection is established, or
// send an error back.
const contact = new Promise((resolve, reject) => {
  if (connectionData.connectionHQ) {
    resolve(connectionData);
  } else {
    reject(new Error("HQ contact failed. No connection."));
  }
});

// In this function we will evaluate if contact sends back a resolve or
// reject. We will then log the response accordingly.
function contactHQ() {
  contact
    .then(response => {
      console.log(`=============== TRANSMISSION ===============
            \nMessage #${response.num} successfully received by HQ.
            \nCurrent location: ${response.sector}, ${response.celestial}
            \nMessage: ${response.message}
            \n============================================`);
    })
    .catch(error => {
      console.log(error);
    });
}

// Call contactHQ
contactHQ();
