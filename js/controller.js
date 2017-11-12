   var air_console = new AirConsole({"orientation": "portrait"});

    // Send a message to the screen
    air_console.message(AirConsole.SCREEN, "How are you?");

    // Listen for messages
    air_console.onMessage = function(from, data) {

      // Show message on device screen
      var info = document.createElement('DIV');
      info.innerHTML = data;
      document.body.appendChild(info);
    };