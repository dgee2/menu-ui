import { VDataTable } from "vuetify/lib/labs/VDataTable/index.mjs";

type UnwrapReadonlyArrayType<A> = A extends Readonly<Array<infer I>>
  ? UnwrapReadonlyArrayType<I>
  : A;
export type ReadonlyDataTableHeader = UnwrapReadonlyArrayType<
  InstanceType<typeof VDataTable>["headers"]
>;
