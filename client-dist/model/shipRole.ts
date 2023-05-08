/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * The registered role of the ship
 */
export type ShipRole = 'FABRICATOR' | 'HARVESTER' | 'HAULER' | 'INTERCEPTOR' | 'EXCAVATOR' | 'TRANSPORT' | 'REPAIR' | 'SURVEYOR' | 'COMMAND' | 'CARRIER' | 'PATROL' | 'SATELLITE' | 'EXPLORER' | 'REFINERY';

export const ShipRole = {
    Fabricator: 'FABRICATOR' as ShipRole,
    Harvester: 'HARVESTER' as ShipRole,
    Hauler: 'HAULER' as ShipRole,
    Interceptor: 'INTERCEPTOR' as ShipRole,
    Excavator: 'EXCAVATOR' as ShipRole,
    Transport: 'TRANSPORT' as ShipRole,
    Repair: 'REPAIR' as ShipRole,
    Surveyor: 'SURVEYOR' as ShipRole,
    Command: 'COMMAND' as ShipRole,
    Carrier: 'CARRIER' as ShipRole,
    Patrol: 'PATROL' as ShipRole,
    Satellite: 'SATELLITE' as ShipRole,
    Explorer: 'EXPLORER' as ShipRole,
    Refinery: 'REFINERY' as ShipRole
};

