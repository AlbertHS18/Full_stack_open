import React from 'react';

interface LabelProps {
  text: string;
  required?: boolean;
}

const ListLabel: React.FC = () => {
  const labels: LabelProps[] = [
    { text: 'Primer Label', required: true },
    { text: 'Segundo Label', required: false },
    { text: 'Tercero Label', required: true },
    { text: 'Cuarto Label', required: false },
  ];

  // Colores para cada etiqueta
  const labelTextColors = ['#1F2937', '#065F46', '#BF0A30', '#1E3A8A'];  // Colores de texto para cada etiqueta

  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Lista de Labels</h2>
      <div className="space-y-4">
        {labels.map((label, index) => (
          <div
            key={index}
            className="flex items-center rounded-lg p-3"
            style={{ color: labelTextColors[index] }}
          >
            <label>{label.text}</label>
            {label.required && (
              <span className="text-red-600 ml-1"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListLabel;









