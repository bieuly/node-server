export interface Pokemon {
    dex: number,
    name: string,
    animationTime: Array<number>,
    height: number,
    modelHeight: number,
    kmBuddyDistance: number,
    weight: number,
    modelScale: number,
    maxCP: number,
    buddySize: NameID,
    cinematicMoves: Array<NameID>,
    quickMoves: Array<NameID>,
    family: NameID,
    stats: Stats,
    types: Array<NameID>,
    rarity?: NameID
    encounter: Encounter,
    camera: Camera,
    evolution: Evolution,
    id: string
}

export interface NameID {
    id: string,
    name: string
}

export interface Stats {
    baseAttack: number,
    baseDefense: number,
    baseStamina: number
}

export interface Encounter {
    attackProbability?: number,
    attackTimer: number,
    baseFleeRate?: number,
    baseCaptureRate?: number,
    cameraDistance: number,
    collisionRadius: number,
    dodgeDistance: number,
    dodgeProbability?: number,
    jumpTime?: number,
    maxPokemonActionFrequency: number,
    minPokemonActionFrequency: number,
    movementType: NameID | null,
    gender?: Gender
}

export interface Gender {
    malePercent: number,
    femalePercent: number
}

export interface Camera {
    cylinderGround?: number
    cylinderRadius: number,
    diskRadius: number,
    shoulderModeScale?: number
}

export interface Evolution {
    pastBranch?: PastBranch,
    costToEvolve?: CostToEvolve,
    futureBranches?: Array<FutureBranch>
}

export interface PastBranch {
    name: string,
    id: string,
    costToEvolve?: CostToEvolve,
    pastBranch?: PastBranch
}

export interface CostToEvolve {
    candyCost: number,
    evolutionItem?: NameID,
    kmBuddyDistance?: number
}

export interface FutureBranch {
    name: string,
    id: string,
    costToEvolve: CostToEvolve,
    futureBranches?: Array<FutureBranch>
}