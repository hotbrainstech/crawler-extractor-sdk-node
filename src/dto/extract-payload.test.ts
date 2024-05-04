import { ExtractPayloadDto } from './extract-payload.dto';

describe('ExtractPayloadDto', () => {
  it('should be able to create an instance', () => {
    const dto = new ExtractPayloadDto();
    expect(dto).toBeInstanceOf(ExtractPayloadDto);
  });
});
