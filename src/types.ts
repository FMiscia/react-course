export type Product = {
    id: number
    title: string
    price: string
    description: string
    images: string[]
    creationAt: string
    updatedAt: string
    category: Category
}

export type Category = {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
}

export type Profile = {
    id: number
    email: string
    password: string
    name: string
    role: string
    avatar: string
    creationAt: string
    updatedAt: string
}
