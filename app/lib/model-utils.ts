// Utility for managing 3D models per project
// Store models in: /public/models/{projectSlug}/{modelName}.obj

export interface ProjectModel {
  id: string;
  name: string;
  path: string;
  description?: string;
  interactive?: boolean;
  autoRotate?: boolean;
}

/**
 * Get the path to a model file for a project
 * @param projectSlug - The project identifier (e.g., 'summative-q2')
 * @param modelFileName - The model file name (e.g., 'binder.obj')
 * @returns The path to the model file
 */
export function getModelPath(projectSlug: string, modelFileName: string): string {
  return `/models/${projectSlug}/${modelFileName}`;
}

/**
 * Define models for a specific project
 * @param projectSlug - The project identifier
 * @param models - Array of model definitions
 * @returns Array of ProjectModel objects with full paths
 */
export function defineProjectModels(
  projectSlug: string,
  models: Omit<ProjectModel, 'path'>[]
): ProjectModel[] {
  return models.map((model) => ({
    ...model,
    path: getModelPath(projectSlug, model.id),
  }));
}
