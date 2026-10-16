import { CheckboxField } from "@/components/form/CheckboxField";
import { SubmitButton } from "@/components/form/SubmitButton";
import { TextField } from "@/components/form/TextField";
import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./context";

export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: { TextField, CheckboxField },
  formComponents: { SubmitButton },
});
