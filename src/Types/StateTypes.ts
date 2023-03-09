import React from "react"

export interface CreateJobInterface {
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
export interface HomeComponents {
    Form: React.ElementType,
    Button: React.ElementType,
    Cards: React.ElementType,
    FullCard: string,
    Card: string,
    CardContent: string,
    QuickApplyButton: string,
    ExternelApplyButton: string,
    CardImage: string,
    CardContentTitle: string,
    CardContent1: string,
    CardContent2: string,
    CardContent3: string,
    CardContent4: string,
    CardContent5: string,
    CardContent6: string,
}

export interface FormComponent {
    FirstModal: boolean,
    closeModal: React.FunctionComponent,
    openModal2: any,
    setCreateJob: React.FunctionComponent,
    SecondModal: boolean,
    setSubmit: React.FunctionComponent,
    FirstModalActive: boolean
}

export interface CardComponent {
    JobsList: object[],
    FullCard: string,
    Card: string,
    CardContent: string,
    QuickApplyButton: string,
    ExternelApplyButton: string,
    CardImage: string,
    CardContentTitle: string,
    CardContent1: string,
    CardContent2: string,
    CardContent3: string,
    CardContent4: string,
    CardContent5: string,
    CardContent6: string,

}