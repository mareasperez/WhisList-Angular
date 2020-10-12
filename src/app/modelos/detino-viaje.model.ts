import { v4 as uuid } from 'uuid';
export class DestinoViaje {
    public servicios: string[];
    private selected: boolean;
    public id = uuid();
    public votes = 0;
    constructor(public nombre: string, public url: string) {
        this.servicios = ['pileta', 'desayuno'];
    }
    isSelected(): boolean { return this.selected; }
    setSelected(value: boolean) { this.selected = value; }
    voteUp(): any {
        this.votes++;
    }
    voteDown(): any {
        this.votes--;
    }
}
