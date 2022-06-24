/* eslint-disable */

UPLOADCARE_PUBLIC_KEY = "demopublickey";

// const dialog = uploadcare.openDialog(null, "camera");

const cameraSelector = document.querySelector("[name=camera-selector]");

navigator.mediaDevices.enumerateDevices().then((list) => {
  list = [].slice.call(list);
  list = list.filter(function (item) {
    return item.kind === "videoinput";
  });
  list.forEach((item) => {
    const label = item.label;
    const option = document.createElement("option");
    cameraSelector.append(option);
    option.value = label;
    option.setAttribute("data-device-id", item.deviceId);
    option.innerText = label;
    console.log(option);
  });
});
