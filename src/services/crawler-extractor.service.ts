import axios, { AxiosInstance } from 'axios';
import { ExtractPayloadDto } from '../dto/extract-payload.dto';

export type ConfigArgs = {
  baseUrl: string;
  host: string | null;
  apiKey: string | null;
  extraHeaders?: Record<string, string>;
};

export class CrawlerExtractorService {
  protected axiosInstance: AxiosInstance;

  private readonly baseUrl: string | null;
  private readonly host: string | null;
  private readonly apiKey: string | null;

  private readonly extraHeaders: Record<string, string>;

  constructor(
    config: ConfigArgs = {
      baseUrl: 'https://crawler-extractor.p.rapidapi.com',
      host: null,
      apiKey: null,
    },
  ) {
    if (!config.baseUrl) {
      throw new Error('baseUrl is required');
    }

    if (!config.host) {
      throw new Error('host is required');
    }

    if (!config.apiKey) {
      throw new Error('apiKey is required');
    }
    this.baseUrl = config.baseUrl;
    this.host = config.host;
    this.apiKey = config.apiKey;
    this.extraHeaders = config.extraHeaders || {};

    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': this.host,
        'X-RapidAPI-Key': this.apiKey,
        ...this.extraHeaders,
      },
    });
  }

  public extract<T>(dto: ExtractPayloadDto) {
    return this.axiosInstance.post<T>('/extract', dto);
  }
}
