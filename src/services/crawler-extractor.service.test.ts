import { CrawlerExtractorService } from './crawler-extractor.service';
import { ExtractPayloadDto, ISelectors } from '../dto/extract-payload.dto';

jest.mock('axios');

describe('CrawlerExtractorService', () => {
  let service: CrawlerExtractorService;
  let dto: ExtractPayloadDto;

  beforeEach(() => {
    service = new CrawlerExtractorService({
      baseUrl: 'https://test.com',
      host: 'testHost',
      apiKey: 'testKey',
    });

    dto = new ExtractPayloadDto();
    dto.url = 'https://test.com';
    dto.selectors = [{ key: 'test', selector: 'test' }] as ISelectors[];
  });

  it('should be able to create an instance', () => {
    expect(service).toBeInstanceOf(CrawlerExtractorService);
  });
});
