import React, { useState } from "react";
import { Input, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Keyword {
  id: string;
  text: string;
}

interface KeywordsInputProps {
  value?: Keyword[];
  onChange?: (value: Keyword[]) => void;
}

const KeywordsInput: React.FC<KeywordsInputProps> = ({ value = [], onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!inputValue.trim()) return;

      // Split by comma, trim, and filter empty strings
      const newTags = inputValue
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      if (newTags.length > 0) {
        const addedKeywords: Keyword[] = newTags.map((text) => ({
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          text,
        }));
        
        const updatedKeywords = [...value, ...addedKeywords];
        onChange?.(updatedKeywords);
        setInputValue("");
      }
    }
  };

  const handleClose = (removedId: string) => {
    const updatedKeywords = value.filter((keyword) => keyword.id !== removedId);
    onChange?.(updatedKeywords);
  };

  return (
    <div className="space-y-3">
      <Input
        placeholder="Enter keywords separated by comma & press Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        prefix={<PlusOutlined className="text-slate-400" />}
        className="h-10 rounded-lg"
      />
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2 p-3 bg-slate-50 border border-slate-100 rounded-lg max-h-32 overflow-y-auto">
          {value.map((keyword) => (
            <Tag
              key={keyword.id}
              closable
              onClose={() => handleClose(keyword.id)}
              className="m-0 bg-white border-slate-200 text-slate-600 px-3 py-1 rounded-full text-xs flex items-center gap-1 hover:border-slate-300 transition-colors"
            >
              {keyword.text}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
};

export default KeywordsInput;
