interface IKey{
    id:number
}

export interface IDataType extends IKey{
    firstName: string;
    age: number;
}

export interface ICompanyDataType extends IKey{
    companyName: string;
    address: string;
}