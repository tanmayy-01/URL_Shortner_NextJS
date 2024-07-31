import Url, {IUrl} from "@/models/Url";
import connectDB from "@/config/db";

export default class UrlRepository {
    private urlModal;
    constructor() {
        connectDB();
        this.urlModal = Url;
    }

    async getUrlById(id:string): Promise<IUrl | null> {
        return await this.urlModal.findById(id).lean();
    }

    async getUrlByShortUrl(shortUrl:string): Promise<IUrl | null> {
        return await this.urlModal.findOne({shortUrl}).lean();
    }
    
    async getUrlByOriginalUrl(originalUrl:string): Promise<IUrl | null> {
        return await this.urlModal.findOne({originalUrl}).lean();
    }
    
    async gerAllUrls(): Promise<IUrl | null> {
        return await this.urlModal.find().lean();
    }

    async deleteUrl(id:string): Promise<IUrl | null> {
        return await this.urlModal.findByIdAndDelete(id).lean();
    }

    async createUrl(originalUrl:string, shortUrl:string): Promise<IUrl> {
        return await this.urlModal.create({shortUrl, originalUrl});
    }
    
}