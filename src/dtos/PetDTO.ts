export type PetDTO = {
  id: string
  userId: string
  name: string
  type: 'DOG' | 'CAT'
  state: string
  city: string
  description: string
  age: 'CUB' | 'ADULT' | 'ELDERLY'
  size: 'SMAULL' | 'AVARAGE' | 'BIG'
  image?: string[]
}