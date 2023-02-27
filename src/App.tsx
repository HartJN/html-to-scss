import { useState } from 'react';
import DOMPurify from 'dompurify';

function generateNestedScss(html: string): string {
  const sanitizedHtml = DOMPurify.sanitize(html);

  const container = document.createElement('div');
  container.innerHTML = sanitizedHtml;

  const element = container.querySelector('[class], [className]');
  const tagName = container.querySelector('*')?.tagName.toLowerCase() || '';

  const firstMatch =
    (
      element?.getAttribute('class') ||
      element?.getAttribute('className') ||
      ''
    ).match(/^\S+/)?.[0] || '';

  let scss = `${firstMatch ? `.${firstMatch}` : tagName} {\n`;

  const classNames = new Set<string>();
  for (const child of element?.children || []) {
    const childContainer = document.createElement('div');
    childContainer.appendChild(child.cloneNode(true));
    const childScss = generateNestedScss(childContainer.innerHTML);
    if (!classNames.has(childScss)) {
      classNames.add(childScss);
      scss += childScss;
    }
  }

  return `${scss}}\n`;
}

function App() {
  const [inputHtml, setInputHtml] = useState('');
  const [generatedScss, setGeneratedScss] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputHtml(e.target.value);
  };

  const handleSubmit = () => {
    const scss = generateNestedScss(inputHtml);
    setGeneratedScss(scss);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">HTML to SCSS Converter</h1>
      <div className="app-content">
        <div className="input-container">
          <label htmlFor="html-input">Enter your HTML:</label>
          <textarea
            id="html-input"
            value={inputHtml}
            onChange={handleInputChange}
            rows={30}
            cols={50}
          />
          <button onClick={handleSubmit}>Generate SCSS</button>
        </div>
        {generatedScss && (
          <div className="generated-scss-container">
            <label htmlFor="scss-output">Generated SCSS:</label>
            <textarea
              onChange={handleInputChange}
              id="scss-output"
              rows={30}
              cols={50}
              value={generatedScss}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
