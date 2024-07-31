import UrlShortenerService from "@/services/UrlShortenerService";

export const shortenUrl = async (fromData: FormData ) => {
    'use server'
    const originalUrl = fromData.get('originalUrl') as string;
    const shortenerService = new UrlShortenerService();
    const shortUrl = await shortenerService.shortenUrl(originalUrl);
}