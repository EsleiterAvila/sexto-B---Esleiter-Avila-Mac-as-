// Generated by https://quicktype.io

export interface IResmantenimiento {
    sum:     number;
    mantenimientos: mantenimiento[];
}

export interface mantenimiento {
    _id?:    string;
    id_vehiculo: string;
    id_concepto: string;
    fecha_mantenimiento: string;
    detalle:  string;
}
