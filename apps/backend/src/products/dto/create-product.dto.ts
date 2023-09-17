export class CreateProductDto {
  readonly name: string;
  readonly picUrl: string;
  readonly price: number;
  readonly describe: string;
  readonly category: string;
  readonly sub_category: string;
  readonly popular: boolean;
}
