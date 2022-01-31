// Exercise structure of old application
export interface LegacyExercise {
    id: number
    name: string
    zone: string
    image: string
    requiresEquip: boolean
}

export interface Exercise {
    id: number
    name: string
    zone: string
    image: string
    equipment: Equipment[]
}

// Exercise from user Routine
export interface RoutineExercise extends Exercise {
    sets: number
    reps: number
}

interface Equipment {
    id: number
    name: string
}