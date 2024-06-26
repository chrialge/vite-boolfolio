import { reactive } from 'vue';
import axios from 'axios'

export const state = reactive({
    projects: [],
    projects_latest: [],
    projects_all: [],
    base_projects_all: 'api/projects_all',
    base_api_url: 'http://127.0.0.1:8000/',
    base_projects_latest_url: 'api/latest',

    base_projects_url: 'api/projects',
    loading: true,
    getProjects(url) {
        console.log(url)
        axios
            .get(url)
            .then(response => {
                console.log(response.data);
                this.projects = response.data.projects;
                console.log(this.projects);
                this.loading = false;
            })
    },
    getProjectsAll(url) {
        console.log(url)
        axios
            .get(url)
            .then(response => {
                console.log(response.data);
                this.projects_all = response.data.projects;
                console.log(this.projects);
                this.loading = false;
            })
    },
    getProjectsLatest(url) {
        console.log(url)
        axios
            .get(url)
            .then(response => {
                // console.log(response.data);
                this.projects_latest = response.data.projects;
                console.log(this.projects_latest);
                this.loading = false;
            })
    }

})