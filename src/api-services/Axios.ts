import axios from "axios";


interface CreateJobInterface {
    jobTitle: string,
    companyName: string,
    industry: string,
    location: string,
    remoteType: string,
    experienceMin: number,
    experienceMax: number,
    salaryMin: number,
    salaryMax: number,
    totalEmployee: number,
    applyType: number

}
export class JobsService {



    public static JobsList() {
        return axios.get(import.meta.env.VITE_URL)
    }

    public static JobsCreate(payload: CreateJobInterface) {
        return axios.post(import.meta.env.VITE_URL, payload)
    }

}