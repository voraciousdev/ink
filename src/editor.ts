import { EditorView } from '@codemirror/view'

import { getState } from '/src/state'
import { createVendorState } from '/src/vendor/state'

import type InkInternal from '/types/internal'

export const makeEditor = (ref: InkInternal.Ref): InkInternal.Editor => {
  const { root, target } = getState(ref)

  // Mount the top-level component.
  target.append(root)

  // Mount the CodeMirror editor.
  return new EditorView({
    dispatch: (transaction: InkInternal.Vendor.Transaction) => {
      const { editor, options } = getState(ref)

      options.hooks.beforeUpdate(transaction.newDoc.toString())
      editor.update([transaction])

      if (transaction.docChanged) {
        options.hooks.afterUpdate(transaction.newDoc.toString())
      }
    },
    parent: root,
    state: createVendorState(ref),
  })
}
