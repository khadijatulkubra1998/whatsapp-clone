axios.get("https://tk-whatsapp.herokuapp.com/messages")
    .then(function (response) {
        // handle success
        console.log(response);

        for (let i = 0; i < response.data.length; i++) {
            let messages = response.data[i];

            document.querySelector("ul").innerHTML += `
        <li class="whatsapp">
        <img src="${messages.profilePic}">
        <div class="one">
        <h3> ${messages.name} </h3>
        <p> ${messages.time} </p>
        </div>
        <div class="two">
        <p> ${messages.firstLine} </p>
        <p> ${messages.numbUnread} </p>
        </div>
        </li>
        `
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    })