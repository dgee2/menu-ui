import { VInput } from "vuetify/lib/components/VInput/index.mjs";
type Writeable<T> = { -readonly [P in keyof T]: T[P] };
type Unarray<T> = T extends Array<infer U> ? U : T;
export type ValidationResult = Unarray<
  Writeable<NonNullable<InstanceType<typeof VInput>["$props"]["rules"]>>
>;

export const required =
  (fieldName: string = "Field", message?: string): ValidationResult =>
  (value: any) => {
    if (value) return true;

    return message ?? `${fieldName} is required.`;
  };

export const maxLength =
  (
    maxLength: number,
    fieldName: string = "Field",
    message?: string
  ): ValidationResult =>
  (value: string | any[]) => {
    if (value?.length <= maxLength) return true;

    return (
      message ??
      `${fieldName} must be less than ${maxLength} ${
        "string" == typeof value ? "characters" : "items"
      }.`
    );
  };

export const minLength =
  (
    minLength: number,
    fieldName: string = "Field",
    message?: string
  ): ValidationResult =>
  (value: string | any[]) => {
    if (value?.length >= minLength) return true;

    return (
      message ??
      `${fieldName} must be at least ${minLength} ${
        "string" == typeof value ? "characters" : "items"
      }.`
    );
  };
