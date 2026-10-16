import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { useFormContext } from "@/lib/form/context";

type SubmitButtonProps = {
  label: string;
  loadingLabel?: string;
  className?: string;
};

export function SubmitButton({ label, loadingLabel, className }: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting] as const}>
      {([canSubmit, isSubmitting]) => (
        <PrimaryButton
          label={label}
          loadingLabel={loadingLabel}
          loading={isSubmitting}
          // TanStack Form reports canSubmit=false while submitting; keep the active style during loading
          disabled={!canSubmit && !isSubmitting}
          onPress={form.handleSubmit}
          className={className}
        />
      )}
    </form.Subscribe>
  );
}
