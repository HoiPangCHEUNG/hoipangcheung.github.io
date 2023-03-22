export type BaseButtonProps = {
  name?: string
  variant?: NonNullable<'elevated' | 'text' | 'flat' | 'tonal' | 'outlined' | 'plain'>
  color?: string
  icon?: string
  size?: string
}

export type BaseButtonEmits = {
  (e: string, value: unknown): void
}
