import { Support } from "./support"
import { User } from "./user"

export interface UsersResponse {
        page: number
        per_page: number
        total: number
        total_pages: number
        data: User[]
        support: Support
}