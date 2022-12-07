/* tslint:disable */
/* eslint-disable */
import { EmpleadoWithRelations } from './empleado-with-relations';

/**
 * (tsType: CargoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CargoWithRelations {
  empleados?: Array<EmpleadoWithRelations>;
  id?: string;
  nombre: string;
}
