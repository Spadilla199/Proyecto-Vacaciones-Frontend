/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Empleado, 'id'>, schemaOptions: { title: 'NewEmpleado', exclude: [ 'id' ] })
 */
export interface NewEmpleado {
  cargoId?: string;
  disponible?: boolean;
  fechaIngreso: string;
  nombre: string;
}
