export * from './agents.service';
import { AgentsService } from './agents.service';
export * from './contracts.service';
import { ContractsService } from './contracts.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './factions.service';
import { FactionsService } from './factions.service';
export * from './fleet.service';
import { FleetService } from './fleet.service';
export * from './systems.service';
import { SystemsService } from './systems.service';
export const APIS = [AgentsService, ContractsService, DefaultService, FactionsService, FleetService, SystemsService];
