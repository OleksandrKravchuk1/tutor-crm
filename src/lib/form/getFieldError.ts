type FieldMeta = {
  isTouched: boolean;
  errors: unknown[];
};

/** Returns the first validation message for a field once the user has interacted with it. */
export function getFieldError(meta: FieldMeta): string | undefined {
  if (!meta.isTouched) return undefined;

  const [firstError] = meta.errors;
  if (!firstError) return undefined;
  if (typeof firstError === "string") return firstError;
  return (firstError as { message?: string }).message;
}
