// Fetching from github

class Github {
    // note not secure for demo purposes only
    constructor() {
        this.client_id = 'c867846c7d07a56b3546';
        this.client_secret = 'ebf3be8e10d6f1bf2376d18b4fd188ddae368be6';
    }

    // methods
    async getUser(user) {
        const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const resData = await response.json();

        return {
            resData   
        }
    }
}