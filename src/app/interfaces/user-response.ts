import { Support } from "./support"
import { User } from "./user"

export interface UserResponse {
    data: User
    support: Support
}