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


export interface FactionTrait { 
    /**
     * The unique identifier of the trait.
     */
    symbol: FactionTrait.SymbolEnum;
    /**
     * The name of the trait.
     */
    name: string;
    /**
     * A description of the trait.
     */
    description: string;
}
export namespace FactionTrait {
    export type SymbolEnum = 'BUREAUCRATIC' | 'SECRETIVE' | 'CAPITALISTIC' | 'INDUSTRIOUS' | 'PEACEFUL' | 'DISTRUSTFUL' | 'WELCOMING' | 'ANARCHIST' | 'CONFLICTED' | 'AUTHORITARIAN' | 'OLIGARCHICAL' | 'DYNASTIC' | 'DEMOCRACTIC' | 'DECENTRALIZED' | 'SMUGGLERS' | 'SCAVENGERS' | 'REBELLIOUS' | 'EXILES' | 'PIRATES' | 'RAIDERS' | 'CLAN' | 'GUILD' | 'DOMINION' | 'FRINGE' | 'FORSAKEN' | 'ISOLATED' | 'LOCALIZED' | 'ESTABLISHED' | 'NOTABLE' | 'DOMINANT' | 'INESCAPABLE' | 'INNOVATIVE' | 'BOLD' | 'VISIONARY' | 'CURIOUS' | 'DARING' | 'EXPLORATORY' | 'RESOURCEFUL' | 'FLEXIBLE' | 'COOPERATIVE' | 'UNITED' | 'STRATEGIC' | 'INTELLIGENT' | 'RESEARCH_FOCUSED' | 'COLLABORATIVE' | 'PROGRESSIVE' | 'MILITARISTIC' | 'TECHNOLOGICALLY_ADVANCED' | 'AGGRESSIVE' | 'IMPERIALISTIC' | 'TREASURE_HUNTERS' | 'DEXTEROUS' | 'UNPREDICTABLE' | 'BRUTAL' | 'FLEETING' | 'ADAPTABLE' | 'SELF_SUFFICIENT' | 'DEFENSIVE' | 'PROUD' | 'DIVERSE' | 'INDEPENDENT' | 'SELF_INTERESTED' | 'FRAGMENTED' | 'COMMERCIAL' | 'FREE_MARKETS' | 'ENTREPRENEURIAL';
    export const SymbolEnum = {
        Bureaucratic: 'BUREAUCRATIC' as SymbolEnum,
        Secretive: 'SECRETIVE' as SymbolEnum,
        Capitalistic: 'CAPITALISTIC' as SymbolEnum,
        Industrious: 'INDUSTRIOUS' as SymbolEnum,
        Peaceful: 'PEACEFUL' as SymbolEnum,
        Distrustful: 'DISTRUSTFUL' as SymbolEnum,
        Welcoming: 'WELCOMING' as SymbolEnum,
        Anarchist: 'ANARCHIST' as SymbolEnum,
        Conflicted: 'CONFLICTED' as SymbolEnum,
        Authoritarian: 'AUTHORITARIAN' as SymbolEnum,
        Oligarchical: 'OLIGARCHICAL' as SymbolEnum,
        Dynastic: 'DYNASTIC' as SymbolEnum,
        Democractic: 'DEMOCRACTIC' as SymbolEnum,
        Decentralized: 'DECENTRALIZED' as SymbolEnum,
        Smugglers: 'SMUGGLERS' as SymbolEnum,
        Scavengers: 'SCAVENGERS' as SymbolEnum,
        Rebellious: 'REBELLIOUS' as SymbolEnum,
        Exiles: 'EXILES' as SymbolEnum,
        Pirates: 'PIRATES' as SymbolEnum,
        Raiders: 'RAIDERS' as SymbolEnum,
        Clan: 'CLAN' as SymbolEnum,
        Guild: 'GUILD' as SymbolEnum,
        Dominion: 'DOMINION' as SymbolEnum,
        Fringe: 'FRINGE' as SymbolEnum,
        Forsaken: 'FORSAKEN' as SymbolEnum,
        Isolated: 'ISOLATED' as SymbolEnum,
        Localized: 'LOCALIZED' as SymbolEnum,
        Established: 'ESTABLISHED' as SymbolEnum,
        Notable: 'NOTABLE' as SymbolEnum,
        Dominant: 'DOMINANT' as SymbolEnum,
        Inescapable: 'INESCAPABLE' as SymbolEnum,
        Innovative: 'INNOVATIVE' as SymbolEnum,
        Bold: 'BOLD' as SymbolEnum,
        Visionary: 'VISIONARY' as SymbolEnum,
        Curious: 'CURIOUS' as SymbolEnum,
        Daring: 'DARING' as SymbolEnum,
        Exploratory: 'EXPLORATORY' as SymbolEnum,
        Resourceful: 'RESOURCEFUL' as SymbolEnum,
        Flexible: 'FLEXIBLE' as SymbolEnum,
        Cooperative: 'COOPERATIVE' as SymbolEnum,
        United: 'UNITED' as SymbolEnum,
        Strategic: 'STRATEGIC' as SymbolEnum,
        Intelligent: 'INTELLIGENT' as SymbolEnum,
        ResearchFocused: 'RESEARCH_FOCUSED' as SymbolEnum,
        Collaborative: 'COLLABORATIVE' as SymbolEnum,
        Progressive: 'PROGRESSIVE' as SymbolEnum,
        Militaristic: 'MILITARISTIC' as SymbolEnum,
        TechnologicallyAdvanced: 'TECHNOLOGICALLY_ADVANCED' as SymbolEnum,
        Aggressive: 'AGGRESSIVE' as SymbolEnum,
        Imperialistic: 'IMPERIALISTIC' as SymbolEnum,
        TreasureHunters: 'TREASURE_HUNTERS' as SymbolEnum,
        Dexterous: 'DEXTEROUS' as SymbolEnum,
        Unpredictable: 'UNPREDICTABLE' as SymbolEnum,
        Brutal: 'BRUTAL' as SymbolEnum,
        Fleeting: 'FLEETING' as SymbolEnum,
        Adaptable: 'ADAPTABLE' as SymbolEnum,
        SelfSufficient: 'SELF_SUFFICIENT' as SymbolEnum,
        Defensive: 'DEFENSIVE' as SymbolEnum,
        Proud: 'PROUD' as SymbolEnum,
        Diverse: 'DIVERSE' as SymbolEnum,
        Independent: 'INDEPENDENT' as SymbolEnum,
        SelfInterested: 'SELF_INTERESTED' as SymbolEnum,
        Fragmented: 'FRAGMENTED' as SymbolEnum,
        Commercial: 'COMMERCIAL' as SymbolEnum,
        FreeMarkets: 'FREE_MARKETS' as SymbolEnum,
        Entrepreneurial: 'ENTREPRENEURIAL' as SymbolEnum
    };
}

