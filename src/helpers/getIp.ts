import { headers } from 'next/headers'

export const getIp = async (): Promise<string> => {
    const _headers = await headers()
    const ip = _headers.get('x-real-ip')?.split(',')[0] ?? _headers.get('x-forwarded-for')?.split(',')[0] ?? '0.0.0.0'
    const result = ip.startsWith('::ffff:') ? ip.substring(7) : ip
    return result
}
