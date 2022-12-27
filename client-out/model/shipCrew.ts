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


/**
 * The ship\'s crew service and maintain the ship\'s systems and equipment.
 */
export interface ShipCrew { 
    /**
     * The current number of crew members on the ship.
     */
    current: number;
    /**
     * The minimum number of crew members required to maintain the ship.
     */
    required: number;
    /**
     * The maximum number of crew members the ship can support.
     */
    capacity: number;
    /**
     * The rotation of crew shifts. A stricter shift improves the ship\'s performance. A more relaxed shift improves the crew\'s morale.
     */
    rotation: ShipCrew.RotationEnum;
    /**
     * A rough measure of the crew\'s morale. A higher morale means the crew is happier and more productive. A lower morale means the ship is more prone to accidents.
     */
    morale: number;
    /**
     * The amount of credits per crew member paid per hour. Wages are paid when a ship docks at a civilized waypoint.
     */
    wages: number;
}
export namespace ShipCrew {
    export type RotationEnum = 'STRICT' | 'RELAXED';
    export const RotationEnum = {
        Strict: 'STRICT' as RotationEnum,
        Relaxed: 'RELAXED' as RotationEnum
    };
}

