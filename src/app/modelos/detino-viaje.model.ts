export class DestinoViaje {
    private selected: boolean;
    constructor(public nombre: string, public url: string) { }
    isSelected(): boolean { return this.selected; }
    setSelected(value: boolean) { this.selected = value; }
}
