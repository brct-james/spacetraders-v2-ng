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
import { WaypointTrait } from './waypointTrait';
import { WaypointOrbital } from './waypointOrbital';
import { WaypointType } from './waypointType';
import { WaypointFaction } from './waypointFaction';
import { Chart } from './chart';


/**
 * A waypoint is a location that ships can travel to such as a Planet, Moon or Space Station.
 */
export interface Waypoint { 
    symbol: string;
    type: WaypointType;
    systemSymbol: string;
    x: number;
    y: number;
    orbitals: Array<WaypointOrbital>;
    faction?: WaypointFaction;
    /**
     * The traits of the waypoint.
     */
    traits: Array<WaypointTrait>;
    chart?: Chart;
}
export namespace Waypoint {
}


