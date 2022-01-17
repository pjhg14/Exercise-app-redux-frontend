export interface User {
    id: number
    username: string
    routines: RoutineExercise[]
    
}

// Exercise Selection
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