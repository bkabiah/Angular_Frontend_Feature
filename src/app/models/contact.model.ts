import { Deserializable } from './deserializable.model';

export class Contact implements Deserializable {
    id: number;
    name: string;
    vorname: string;
    nummer: string;
    favoriten: boolean;

    deserialize(input: any): this {
        return Object.assign (this, input);
    }

}
