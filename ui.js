class UI {
    // show user
    showUser(user) {
        const output = document.querySelector('#output');
        output.innerHTML = `                
        <div class="row mt-5">
            <div class="col-sm-3 mb-5 text-center">
                <img class="img-fluid rounded mb-3" src="${user.avatar_url}" alt="">
                <span class="font-weight-bold">${user.login}</span>
            </div>
            <div class="col-sm-9">
                <div>
                    <span class="badge badge-primary">Public repos ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public gists ${user.public_repos}</span>
                    <span class="badge badge-success">Followers ${user.followers}</span>
                    <span class="badge badge-warning">Following ${user.following}</span>
                </div>
                <ul class="list-group mt-3">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website: ${user.website}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
        `;
        return output;
    }

    clearUser() {
        const output = document.querySelector('#output');
        output.innerHTML = '';
    }
}