// faker

import { IEC2 } from '../ec2/ec2.interface';
import faker from 'faker';

/**
 * Generates fake data using faker.js.
 */
export function getFakeData(amount: number): IEC2[] {
    amount = Math.floor(amount);
    const tempInstances = [] as IEC2[];
    let ecInstance: IEC2;

    for (let currIndex = 0; currIndex < amount; currIndex++) {
        ecInstance = {} as IEC2;

        ecInstance.name = faker.commerce.productName(); // Generate random product name as the ec2 name.
        ecInstance.id = faker.random.uuid(); // Generate random uuid as the ec2 ID.
        ecInstance.privateIp = faker.internet.ip(); // Generate random ip as the private IP.
        ecInstance.publicIp = faker.internet.ip(); // Generate random ip as the public IP.
        ecInstance.state = faker.random.arrayElement(['Running', 'Off', 'Restarting']); // Generate random status
                                                                                        // of the instance.
        ecInstance.type = faker.random.arrayElement([{ name: 't2.nano', size: 0 }, // Generate random size object.
                                                     { name: 't2.micro', size: 1 },
                                                     { name: 't2.small', size: 2 },
                                                     { name: 't2.medium', size: 3 },
                                                     { name: 't2.large', size: 4 },
                                                     { name: 't2.xlarge', size: 5 },
                                                     { name: 't2.2xlarge', size: 6 }]);
        ecInstance.az = faker.random.arrayElement(['us-est-2', 'us-east-1', // Generate random AZ of the ec2.
                                                   'us-west-1', 'us-west-2',
                                                   'af-south-1', 'ap-east-1',
                                                   'ap-south-1', 'ap-northeast-3',
                                                   'ap-northeast-2', 'ap-northeast-1',
                                                   'ca-central-1', 'eu-central-1',
                                                   'eu-west-1', 'eu-west-2',
                                                   'eu-west-3', 'eu-south-1',
                                                   'eu-north-1', 'me-south-1',
                                                   'sa-east-1']);

        tempInstances.push(ecInstance);
    }

    return tempInstances;
}
