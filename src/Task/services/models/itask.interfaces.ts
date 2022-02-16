export interface itask {
    id?:number;
    title?:string;
    description?:string;
    status?:string;
    user?:number;
    createAt?: Date;
    finishAt?: Date;
}