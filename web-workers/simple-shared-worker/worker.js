let lastData;
onconnect = function (event) {
  const port = event.ports[0];

  port.onmessage = function (e) {
    const workerResult = `Result: ${e.data[0] * e.data[1]}, lastResult: ${lastData ? lastData[0] * lastData[1] : -1}`;
    port.postMessage(workerResult);
    lastData = e.data;
  };
};
