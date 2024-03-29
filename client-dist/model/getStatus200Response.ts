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
import { GetStatus200ResponseServerResets } from './getStatus200ResponseServerResets';
import { GetStatus200ResponseStats } from './getStatus200ResponseStats';
import { GetStatus200ResponseAnnouncementsInner } from './getStatus200ResponseAnnouncementsInner';
import { GetStatus200ResponseLeaderboards } from './getStatus200ResponseLeaderboards';
import { GetStatus200ResponseLinksInner } from './getStatus200ResponseLinksInner';


/**
 * OK
 */
export interface GetStatus200Response { 
    /**
     * The current status of the game server.
     */
    status: string;
    /**
     * The current version of the API.
     */
    version: string;
    /**
     * The date and time when the game server was last reset.
     */
    resetDate: string;
    description: string;
    stats: GetStatus200ResponseStats;
    leaderboards: GetStatus200ResponseLeaderboards;
    serverResets: GetStatus200ResponseServerResets;
    announcements: Array<GetStatus200ResponseAnnouncementsInner>;
    links: Array<GetStatus200ResponseLinksInner>;
}

