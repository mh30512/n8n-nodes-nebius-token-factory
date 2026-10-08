import type { INodePropertyOptions } from 'n8n-workflow';

export type NebiusModel = {
	id: string;
	status?: string | null;
	architecture?: { modality?: string | null } | null;
	supported_features?: string[] | null;
};

const UNAVAILABLE_STATUSES = new Set(['validating', 'error', 'deleted']);

/**
 * Token Factory lists chat, embedding, rerank and image models from one /v1/models endpoint.
 * Keep active models whose output modality is text ("text->text", "text+image->text", "text2text").
 * Entries without a modality are kept so the list never comes back empty.
 */
function outputsText(model: NebiusModel): boolean {
	const modality = model.architecture?.modality;
	if (!modality) return true;
	return (modality.split(/->|2/).pop() ?? '').includes('text');
}

export function toModelOptions(models: NebiusModel[]): INodePropertyOptions[] {
	return models
		.filter((model) => !model.status || !UNAVAILABLE_STATUSES.has(model.status))
		.filter(outputsText)
		.map((model) => {
			const features = model.supported_features ?? [];
			return {
				name: model.id,
				value: model.id,
				description: features.length ? `Supports: ${features.join(', ')}` : undefined,
			};
		})
		.sort((a, b) => a.name.localeCompare(b.name));
}
