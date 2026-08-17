import JoditEditor from 'jodit-react';
import React, { useMemo, useRef } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder }) => {
  const editor = useRef(null);

  const config = useMemo(() => ({
    readonly: false,
    placeholder: placeholder || 'Start typing...',
    height: 500,
    uploader: {
      insertImageAsBase64URI: true
    },
    style: {
      fontFamily: "'Inter', sans-serif",
    },
    toolbarSticky: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
  }), [placeholder]);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all custom-jodit-editor">
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onBlur={newContent => onChange(newContent)}
        onChange={() => {}}
      />
    </div>
  );
};

export default RichTextEditor;
