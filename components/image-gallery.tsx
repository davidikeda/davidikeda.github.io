'use client'

import Image from 'next/image'

export interface ProjectImage {
    id: string
    src: string
    name?: string
    description?: string
    alt?: string
}

interface Props {
    title?: string
    description?: string
    images: ProjectImage[];
    columns?: number;
    imageWidth?: number;
    imageHeight?: number;
}

export default function ImageGallery({
    title,
    description,
    images,
    columns = 3,
    imageWidth = 600,
    imageHeight = 450,
                                     }: Props) {
    const gridClass = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
        9: 'grid-cols-9',
    }[columns] || 'md:grid-cols-3';

    return (
        <section className="md-12">
            {title && (
                <h2 className="text-2xl font-bold text-zinc-900 md-2">{title}</h2>
            )}
            {description && (
                <p className="text-zinc-600 mb-6">{description}</p>
            )}

            <div className={'grid grid-cols-1 &{gridClass} gap-6'}>
                {images.map((image) => (
                    <div key={image.id}>
                        {image.name && (
                            <h3 className="text-lg font-semibold text-zinc-900 mb-2">{image.name}</h3>
                        )}
                        {image.description && (
                            <p className="text-sm text-zinc-600 mb-3">
                                {image.description}
                            </p>
                        )}

                        <Image
                            src={image.src}
                            alt={image.name ?? 'Project image'}
                            width={imageWidth}
                            height={imageHeight}
                            className="w-full h-auto rounded-xl"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}