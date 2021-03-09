// ec2.interface

export interface IEC2 {
    name: string;
    id: string;
    type: IType;
    state: string;
    az: string;
    publicIp: string;
    privateIp: string;
}

interface IType {
    name: string;
    size: number;
}
