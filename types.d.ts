import type { PayloadRequest } from 'payload'

declare global {
    namespace Express {
        interface Request extends PayloadRequest {
            ip: string
        }
    }
}
