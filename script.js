const app = {};

app.endpoint = 'https://proxy-ugwolsldnq-uc.a.run.app/http://138.197.166.169/project/polysense-interview/'

app.getData = () => {
    const dataURL = new URL(app.endpoint);

    fetch(dataURL)
        .then((response) => response.json())
        .then((jsonData) => {
            app.displayMessage(jsonData)
            app.displayDate(jsonData)
            app.displayProgress(jsonData)
            console.log(jsonData);
        })
}

app.displayMessage = (messageData) => {

    // console.log(messageData.text);

    const messageButton = document.querySelector(".messageButton");

    messageButton.addEventListener("click", function (e) {
        alert(messageData.text);
}); 

}

app.displayDate = (dateData) => {
    // console.log(dateData.time);

    const dateButton = document.querySelector(".dateButton");

    dateButton.addEventListener("click", function (e) {
        alert(dateData.time);
    });

}

app.displayProgress = (progressData) => {
    // console.log(progressData.progress);

    const progressButton = document.querySelector(".progressButton");

    progressButton.addEventListener("click", function (e) {
        alert(progressData.progress);
    });

}

app.init = () => {
    app.getData();
    app.displayMessage();
    app.displayDate();
    app.displayProgress();

};


app.init();

