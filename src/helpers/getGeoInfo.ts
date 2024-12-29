import { WebServiceClient } from '@maxmind/geoip2-node'

export const getGeoInfo = async (ip: string) => {
    try {
        const client = new WebServiceClient(process.env.MAXMIND_ID || '', process.env.MAXMIND_KEY || '', {
            host: 'geolite.info',
        })
        const clientInfo = await client.city(ip)
        return clientInfo
    } catch {
        return {}
    }
}
