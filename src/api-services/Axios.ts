import axios from "axios";


export class JobsService {

    public static JobsList() {
        return axios.get(import.meta.env.VITE_URL)
    }

}