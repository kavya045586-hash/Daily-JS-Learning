const a = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task completed");
        resolve(); // without resolve, the .then block will not run
    }, 1000);
});

a.then(function () {
    console.log("Promise executed");
});

)