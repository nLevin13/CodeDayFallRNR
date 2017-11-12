var air_console = new AirConsole();

    // Listen for messages from other devices
    air_console.onMessage = function(from, data) {

      // We receive a message -> Send message back to the device
      air_console.message(from, "Full of pixels!");

      // Show message on device screen
      var info = document.createElement('DIV');
      info.innerHTML = data;
      document.body.appendChild(info);
    };