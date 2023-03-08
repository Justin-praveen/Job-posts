import axios from "axios";
import { CreateJobInterface } from "../Types/StateTypes";

export class JobsService {

    public static JobsList() {
        return axios.get(import.meta.env.VITE_URL)
    }

    public static JobsCreate(payload: CreateJobInterface) {
        return axios.post(import.meta.env.VITE_URL, payload)
    }

}