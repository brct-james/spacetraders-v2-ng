/**
 * SpaceTraders API
 * SpaceTraders is a multiplayer sci-fi strategy game where you acquire and manage a fleet of ships across a growing and dynamic universe.  Similar to games such as Eve Online, you work with or against other players to establish trade routes, chart new systems, mine precious ores, patrol for pirates, spy on factions, and discover hidden treasures.  SpaceTraders as a game is unique in that it is entirely accessible through open and well-documented API endpoints.  If this sounds fun and interesting to you, please drop into our Discord and get to know the community. We are actively working on new clients, new ideas and sharing tips for how to play the game.   ```json http {   \"method\": \"GET\",   \"url\": \"https://api-server-2-0-0-rc-2-vxxwq5xqdq-uc.a.run.app\", } ```
 *
 * The version of the OpenAPI document: 2.0.0-rc.2
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ShipRequirements } from './shipRequirements';


/**
 * The engine determines how quickly a ship travels between waypoints.
 */
export interface ShipEngine { 
    symbol: ShipEngine.SymbolEnum;
    name: string;
    description: string;
    /**
     * Condition is a range of 0 to 100 where 0 is completely worn out and 100 is brand new.
     */
    condition?: number;
    speed: number;
    requirements: ShipRequirements;
}
export namespace ShipEngine {
    export type SymbolEnum = 'ENGINE_IMPULSE_DRIVE_I' | 'ENGINE_ION_DRIVE_I' | 'ENGINE_ION_DRIVE_II' | 'ENGINE_HYPER_DRIVE_I';
    export const SymbolEnum = {
        ImpulseDriveI: 'ENGINE_IMPULSE_DRIVE_I' as SymbolEnum,
        IonDriveI: 'ENGINE_ION_DRIVE_I' as SymbolEnum,
        IonDriveIi: 'ENGINE_ION_DRIVE_II' as SymbolEnum,
        HyperDriveI: 'ENGINE_HYPER_DRIVE_I' as SymbolEnum
    };
}


