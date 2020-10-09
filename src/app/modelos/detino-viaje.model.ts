export class DestinoViaje {
    public servicios: string[];
    private selected: boolean;
    constructor(public nombre: string, public url: string) {
        this.servicios = ['pileta', 'desayuno'];
    }
    isSelected(): boolean { return this.selected; }
    setSelected(value: boolean) { this.selected = value; }
}
