// Intantiate github
const github = new Github();
const ui = new UI();

document.querySelector('#search').addEventListener('keyup', searchRepo);

function searchRepo(e) {
    const search = e.target.value;
    console.log(e.target.value);

    if(search !== '') {
        github.getUser(search)
            .then(res => {
                // past data to UI
                ui.showUser(res.resData);
            })
            .catch(error => console.log(error));
    } else {
        ui.clearUser();
    }
}