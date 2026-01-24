'use client';

import ModelViewer from './model-viewer';
import { ProjectModel } from '@/app/lib/model-utils';

interface ModelGalleryProps {
  title?: string;
  description?: string;
  models: ProjectModel[];
  columns?: number;
  modelHeight?: string;
}

export default function ModelGallery({
  title,
  description,
  models,
  columns = 2,
  modelHeight = '400px',
}: ModelGalleryProps) {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-2';

  return (
    <section className="mb-12">
      {title && (
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">{title}</h2>
      )}
      {description && (
        <p className="text-zinc-600 mb-6">{description}</p>
      )}
      <div className={`grid ${gridClass} gap-8`}>
        {models.map((model) => (
          <div key={model.id}>
            {model.name && (
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                {model.name}
              </h3>
            )}
            {model.description && (
              <p className="text-sm text-zinc-600 mb-4">{model.description}</p>
            )}
            <ModelViewer
              modelPath={model.path}
              interactive={model.interactive !== false}
              autoRotate={model.autoRotate !== false}
              width="100%"
              height={modelHeight}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
