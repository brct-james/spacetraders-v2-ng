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


export type TradeSymbol = 'PRECIOUS_STONES' | 'QUARTZ_SAND' | 'SILICON_CRYSTALS' | 'AMMONIA_ICE' | 'LIQUID_HYDROGEN' | 'LIQUID_NITROGEN' | 'ICE_WATER' | 'EXOTIC_MATTER' | 'ADVANCED_CIRCUITRY' | 'GRAVITON_EMITTERS' | 'IRON' | 'IRON_ORE' | 'COPPER' | 'COPPER_ORE' | 'ALUMINUM' | 'ALUMINUM_ORE' | 'SILVER' | 'SILVER_ORE' | 'GOLD' | 'GOLD_ORE' | 'PLATINUM' | 'PLATINUM_ORE' | 'DIAMONDS' | 'URANITE' | 'URANITE_ORE' | 'MERITIUM' | 'MERITIUM_ORE' | 'HYDROCARBON' | 'ANTIMATTER' | 'FERTILIZERS' | 'FABRICS' | 'FOOD' | 'JEWELRY' | 'MACHINERY' | 'FIREARMS' | 'ASSAULT_RIFLES' | 'MILITARY_EQUIPMENT' | 'EXPLOSIVES' | 'LAB_INSTRUMENTS' | 'AMMUNITION' | 'ELECTRONICS' | 'SHIP_PLATING' | 'EQUIPMENT' | 'FUEL' | 'MEDICINE' | 'DRUGS' | 'CLOTHING' | 'MICROPROCESSORS' | 'PLASTICS' | 'POLYNUCLEOTIDES' | 'BIOCOMPOSITES' | 'NANOBOTS' | 'AI_MAINFRAMES' | 'QUANTUM_DRIVES' | 'ROBOTIC_DRONES' | 'CYBER_IMPLANTS' | 'GENE_THERAPEUTICS' | 'NEURAL_CHIPS' | 'MOOD_REGULATORS' | 'VIRAL_AGENTS' | 'MICRO_FUSION_GENERATORS' | 'SUPERGRAINS' | 'LASER_RIFLES' | 'HOLOGRAPHICS' | 'SHIP_SALVAGE' | 'RELIC_TECH' | 'NOVEL_LIFEFORMS' | 'BOTANICAL_SPECIMENS' | 'CULTURAL_ARTIFACTS' | 'REACTOR_SOLAR_I' | 'REACTOR_FUSION_I' | 'REACTOR_FISSION_I' | 'REACTOR_CHEMICAL_I' | 'REACTOR_ANTIMATTER_I' | 'ENGINE_IMPULSE_DRIVE_I' | 'ENGINE_ION_DRIVE_I' | 'ENGINE_ION_DRIVE_II' | 'ENGINE_HYPER_DRIVE_I' | 'MODULE_MINERAL_PROCESSOR_I' | 'MODULE_CARGO_HOLD_I' | 'MODULE_CREW_QUARTERS_I' | 'MODULE_ENVOY_QUARTERS_I' | 'MODULE_PASSENGER_CABIN_I' | 'MODULE_MICRO_REFINERY_I' | 'MODULE_ORE_REFINERY_I' | 'MODULE_FUEL_REFINERY_I' | 'MODULE_SCIENCE_LAB_I' | 'MODULE_JUMP_DRIVE_I' | 'MODULE_JUMP_DRIVE_II' | 'MODULE_JUMP_DRIVE_III' | 'MODULE_WARP_DRIVE_I' | 'MODULE_WARP_DRIVE_II' | 'MODULE_WARP_DRIVE_III' | 'MODULE_SHIELD_GENERATOR_I' | 'MODULE_SHIELD_GENERATOR_II' | 'MOUNT_GAS_SIPHON_I' | 'MOUNT_GAS_SIPHON_II' | 'MOUNT_GAS_SIPHON_III' | 'MOUNT_SURVEYOR_I' | 'MOUNT_SURVEYOR_II' | 'MOUNT_SURVEYOR_III' | 'MOUNT_SENSOR_ARRAY_I' | 'MOUNT_SENSOR_ARRAY_II' | 'MOUNT_SENSOR_ARRAY_III' | 'MOUNT_MINING_LASER_I' | 'MOUNT_MINING_LASER_II' | 'MOUNT_MINING_LASER_III' | 'MOUNT_LASER_CANNON_I' | 'MOUNT_MISSILE_LAUNCHER_I' | 'MOUNT_TURRET_I';

export const TradeSymbol = {
    PreciousStones: 'PRECIOUS_STONES' as TradeSymbol,
    QuartzSand: 'QUARTZ_SAND' as TradeSymbol,
    SiliconCrystals: 'SILICON_CRYSTALS' as TradeSymbol,
    AmmoniaIce: 'AMMONIA_ICE' as TradeSymbol,
    LiquidHydrogen: 'LIQUID_HYDROGEN' as TradeSymbol,
    LiquidNitrogen: 'LIQUID_NITROGEN' as TradeSymbol,
    IceWater: 'ICE_WATER' as TradeSymbol,
    ExoticMatter: 'EXOTIC_MATTER' as TradeSymbol,
    AdvancedCircuitry: 'ADVANCED_CIRCUITRY' as TradeSymbol,
    GravitonEmitters: 'GRAVITON_EMITTERS' as TradeSymbol,
    Iron: 'IRON' as TradeSymbol,
    IronOre: 'IRON_ORE' as TradeSymbol,
    Copper: 'COPPER' as TradeSymbol,
    CopperOre: 'COPPER_ORE' as TradeSymbol,
    Aluminum: 'ALUMINUM' as TradeSymbol,
    AluminumOre: 'ALUMINUM_ORE' as TradeSymbol,
    Silver: 'SILVER' as TradeSymbol,
    SilverOre: 'SILVER_ORE' as TradeSymbol,
    Gold: 'GOLD' as TradeSymbol,
    GoldOre: 'GOLD_ORE' as TradeSymbol,
    Platinum: 'PLATINUM' as TradeSymbol,
    PlatinumOre: 'PLATINUM_ORE' as TradeSymbol,
    Diamonds: 'DIAMONDS' as TradeSymbol,
    Uranite: 'URANITE' as TradeSymbol,
    UraniteOre: 'URANITE_ORE' as TradeSymbol,
    Meritium: 'MERITIUM' as TradeSymbol,
    MeritiumOre: 'MERITIUM_ORE' as TradeSymbol,
    Hydrocarbon: 'HYDROCARBON' as TradeSymbol,
    Antimatter: 'ANTIMATTER' as TradeSymbol,
    Fertilizers: 'FERTILIZERS' as TradeSymbol,
    Fabrics: 'FABRICS' as TradeSymbol,
    Food: 'FOOD' as TradeSymbol,
    Jewelry: 'JEWELRY' as TradeSymbol,
    Machinery: 'MACHINERY' as TradeSymbol,
    Firearms: 'FIREARMS' as TradeSymbol,
    AssaultRifles: 'ASSAULT_RIFLES' as TradeSymbol,
    MilitaryEquipment: 'MILITARY_EQUIPMENT' as TradeSymbol,
    Explosives: 'EXPLOSIVES' as TradeSymbol,
    LabInstruments: 'LAB_INSTRUMENTS' as TradeSymbol,
    Ammunition: 'AMMUNITION' as TradeSymbol,
    Electronics: 'ELECTRONICS' as TradeSymbol,
    ShipPlating: 'SHIP_PLATING' as TradeSymbol,
    Equipment: 'EQUIPMENT' as TradeSymbol,
    Fuel: 'FUEL' as TradeSymbol,
    Medicine: 'MEDICINE' as TradeSymbol,
    Drugs: 'DRUGS' as TradeSymbol,
    Clothing: 'CLOTHING' as TradeSymbol,
    Microprocessors: 'MICROPROCESSORS' as TradeSymbol,
    Plastics: 'PLASTICS' as TradeSymbol,
    Polynucleotides: 'POLYNUCLEOTIDES' as TradeSymbol,
    Biocomposites: 'BIOCOMPOSITES' as TradeSymbol,
    Nanobots: 'NANOBOTS' as TradeSymbol,
    AiMainframes: 'AI_MAINFRAMES' as TradeSymbol,
    QuantumDrives: 'QUANTUM_DRIVES' as TradeSymbol,
    RoboticDrones: 'ROBOTIC_DRONES' as TradeSymbol,
    CyberImplants: 'CYBER_IMPLANTS' as TradeSymbol,
    GeneTherapeutics: 'GENE_THERAPEUTICS' as TradeSymbol,
    NeuralChips: 'NEURAL_CHIPS' as TradeSymbol,
    MoodRegulators: 'MOOD_REGULATORS' as TradeSymbol,
    ViralAgents: 'VIRAL_AGENTS' as TradeSymbol,
    MicroFusionGenerators: 'MICRO_FUSION_GENERATORS' as TradeSymbol,
    Supergrains: 'SUPERGRAINS' as TradeSymbol,
    LaserRifles: 'LASER_RIFLES' as TradeSymbol,
    Holographics: 'HOLOGRAPHICS' as TradeSymbol,
    ShipSalvage: 'SHIP_SALVAGE' as TradeSymbol,
    RelicTech: 'RELIC_TECH' as TradeSymbol,
    NovelLifeforms: 'NOVEL_LIFEFORMS' as TradeSymbol,
    BotanicalSpecimens: 'BOTANICAL_SPECIMENS' as TradeSymbol,
    CulturalArtifacts: 'CULTURAL_ARTIFACTS' as TradeSymbol,
    ReactorSolarI: 'REACTOR_SOLAR_I' as TradeSymbol,
    ReactorFusionI: 'REACTOR_FUSION_I' as TradeSymbol,
    ReactorFissionI: 'REACTOR_FISSION_I' as TradeSymbol,
    ReactorChemicalI: 'REACTOR_CHEMICAL_I' as TradeSymbol,
    ReactorAntimatterI: 'REACTOR_ANTIMATTER_I' as TradeSymbol,
    EngineImpulseDriveI: 'ENGINE_IMPULSE_DRIVE_I' as TradeSymbol,
    EngineIonDriveI: 'ENGINE_ION_DRIVE_I' as TradeSymbol,
    EngineIonDriveIi: 'ENGINE_ION_DRIVE_II' as TradeSymbol,
    EngineHyperDriveI: 'ENGINE_HYPER_DRIVE_I' as TradeSymbol,
    ModuleMineralProcessorI: 'MODULE_MINERAL_PROCESSOR_I' as TradeSymbol,
    ModuleCargoHoldI: 'MODULE_CARGO_HOLD_I' as TradeSymbol,
    ModuleCrewQuartersI: 'MODULE_CREW_QUARTERS_I' as TradeSymbol,
    ModuleEnvoyQuartersI: 'MODULE_ENVOY_QUARTERS_I' as TradeSymbol,
    ModulePassengerCabinI: 'MODULE_PASSENGER_CABIN_I' as TradeSymbol,
    ModuleMicroRefineryI: 'MODULE_MICRO_REFINERY_I' as TradeSymbol,
    ModuleOreRefineryI: 'MODULE_ORE_REFINERY_I' as TradeSymbol,
    ModuleFuelRefineryI: 'MODULE_FUEL_REFINERY_I' as TradeSymbol,
    ModuleScienceLabI: 'MODULE_SCIENCE_LAB_I' as TradeSymbol,
    ModuleJumpDriveI: 'MODULE_JUMP_DRIVE_I' as TradeSymbol,
    ModuleJumpDriveIi: 'MODULE_JUMP_DRIVE_II' as TradeSymbol,
    ModuleJumpDriveIii: 'MODULE_JUMP_DRIVE_III' as TradeSymbol,
    ModuleWarpDriveI: 'MODULE_WARP_DRIVE_I' as TradeSymbol,
    ModuleWarpDriveIi: 'MODULE_WARP_DRIVE_II' as TradeSymbol,
    ModuleWarpDriveIii: 'MODULE_WARP_DRIVE_III' as TradeSymbol,
    ModuleShieldGeneratorI: 'MODULE_SHIELD_GENERATOR_I' as TradeSymbol,
    ModuleShieldGeneratorIi: 'MODULE_SHIELD_GENERATOR_II' as TradeSymbol,
    MountGasSiphonI: 'MOUNT_GAS_SIPHON_I' as TradeSymbol,
    MountGasSiphonIi: 'MOUNT_GAS_SIPHON_II' as TradeSymbol,
    MountGasSiphonIii: 'MOUNT_GAS_SIPHON_III' as TradeSymbol,
    MountSurveyorI: 'MOUNT_SURVEYOR_I' as TradeSymbol,
    MountSurveyorIi: 'MOUNT_SURVEYOR_II' as TradeSymbol,
    MountSurveyorIii: 'MOUNT_SURVEYOR_III' as TradeSymbol,
    MountSensorArrayI: 'MOUNT_SENSOR_ARRAY_I' as TradeSymbol,
    MountSensorArrayIi: 'MOUNT_SENSOR_ARRAY_II' as TradeSymbol,
    MountSensorArrayIii: 'MOUNT_SENSOR_ARRAY_III' as TradeSymbol,
    MountMiningLaserI: 'MOUNT_MINING_LASER_I' as TradeSymbol,
    MountMiningLaserIi: 'MOUNT_MINING_LASER_II' as TradeSymbol,
    MountMiningLaserIii: 'MOUNT_MINING_LASER_III' as TradeSymbol,
    MountLaserCannonI: 'MOUNT_LASER_CANNON_I' as TradeSymbol,
    MountMissileLauncherI: 'MOUNT_MISSILE_LAUNCHER_I' as TradeSymbol,
    MountTurretI: 'MOUNT_TURRET_I' as TradeSymbol
};

