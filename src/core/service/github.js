import axios from "axios";

export default {
    name: 'github',
    /**
     * Request: Get repositories of a github user
     * @param username (String)
     */
    getRepos(username) {
        return axios
            .get(`https://api.github.com/users/${username}/repos`)
    },

    /**
     * Request: Get contribution counts of repositories
     * @param username (String)
     * @param repoName (String)
     */
    getRepoStats(username, repoName) {
        return axios
            .get(`https://api.github.com/repos/${username}/${repoName}/contributors`)
    }
}
