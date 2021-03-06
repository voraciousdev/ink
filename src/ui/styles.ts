import { html } from 'sinuous/packages/sinuous'

export const styles = html`
  <style>
    .ink {
      color: var(--ink-internal-color, inherit);
      display: flex;
      flex-direction: var(--ink-internal-flex-direction, column);
      gap: 1rem;
      padding: var(--ink-internal-editor-padding, 0);
    }

    .ink .cm-tooltip {
      background-color: var(--ink-internal-block-background-color);
      border-radius: var(--ink-internal-border-radius);
      font-family: inherit;
      padding: 0.25rem;
    }

    .ink .cm-tooltip.cm-tooltip-autocomplete ul {
      font-family: inherit;
    }

    .ink .cm-tooltip.cm-tooltip-autocomplete ul li.ink-tooltip-option {
      border-radius: var(--ink-internal-border-radius);
      padding: 0.25rem;
    }

    .ink .cm-tooltip.cm-tooltip-autocomplete ul li.ink-tooltip-option[aria-selected] {
      background-color: rgba(150, 150, 150, 0.25);
    }

    .ink .cm-completionLabel {
      font-family: inherit;
    }
  </style>
`
