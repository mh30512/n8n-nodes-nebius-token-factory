import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class NebiusTokenFactoryApi implements ICredentialType {
	name = 'nebiusTokenFactoryApi';

	displayName = 'Nebius Token Factory API';

	icon: Icon = { light: 'file:../icons/nebius.svg', dark: 'file:../icons/nebius.dark.svg' };

	documentationUrl = 'https://docs.tokenfactory.nebius.com/api-reference/introduction';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description: 'Create an API key in the Nebius Token Factory console',
		},
		{
			displayName: 'Base URL',
			name: 'url',
			type: 'hidden',
			default: 'https://api.tokenfactory.nebius.com/v1',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{ $credentials.url }}',
			url: '/models',
		},
	};
}
