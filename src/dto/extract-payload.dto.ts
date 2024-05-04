export interface ISelectors {
  key: string;
  selector: string;
  type?: string;
}

export class ExtractPayloadDto {
  url!: string;
  selectors!: ISelectors[];
}
