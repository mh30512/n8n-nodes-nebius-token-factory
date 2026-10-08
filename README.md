# Nebius Token Factory for n8n

This is an n8n community node. It adds **Nebius Token Factory Chat Model**, a chat model you can connect to the AI Agent, Basic LLM Chain and any other n8n node that takes a chat model.

[Nebius Token Factory](https://tokenfactory.nebius.com/) serves open models such as Kimi, DeepSeek, Qwen, GLM, NVIDIA Nemotron and gpt-oss through an OpenAI-compatible API, on serverless and dedicated endpoints.

[Installation](#installation) · [Credentials](#credentials) · [Usage](#usage) · [Compatibility](#compatibility) · [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Credentials

1. Sign in to the [Nebius Token Factory console](https://tokenfactory.nebius.com/) and create an API key.
2. In n8n, create a **Nebius Token Factory API** credential and paste the key.

n8n tests the key against `GET /v1/models` when you save the credential.

## Usage

1. Add an **AI Agent** node.
2. Click **+** under **Chat Model** and choose **Nebius Token Factory Chat Model**.
3. Select a model. The list loads live from your Token Factory project and shows text-generation models only. Each model lists its supported features:
   - `tools`: required for agents that call tools.
   - `json_mode`: required for the JSON response format.
   - `reasoning`: the model returns reasoning output.

The default model is `deepseek-ai/DeepSeek-V4-Flash-0731`, which supports tools, JSON mode, structured outputs and reasoning.

### Options

| Option | Description |
| --- | --- |
| Sampling Temperature | Randomness of the output. Adjust this or Top P, not both. |
| Top P | Nucleus sampling threshold. |
| Frequency Penalty | Reduces repetition of the same tokens. |
| Presence Penalty | Encourages new topics. |
| Maximum Number of Tokens | Output token limit. `-1` uses the model maximum. |
| Response Format | `Text` or `JSON`. With JSON, pick a model that lists `json_mode`. |
| Timeout | Request timeout in milliseconds. |
| Max Retries | Retries on failed requests. |

## Compatibility

Requires an n8n version that supports AI community nodes built with `@n8n/ai-node-sdk`.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Nebius Token Factory documentation](https://docs.tokenfactory.nebius.com/)
- [Token Factory API reference](https://docs.tokenfactory.nebius.com/api-reference/introduction)
