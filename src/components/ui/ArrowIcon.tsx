export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="text-lg leading-none">{diagonal ? '↗' : '→'}</span>
}
