import fs from 'fs';
import path from 'path';

const markdownPath = 'prompts/PROMPTS.md';

// Output directory: configurable via CLI arg or OUTPUT_DIR env var.
// Defaults to an in-repo path so generated files stay inside the workspace.
const outputDir = process.argv[2] ?? process.env['OUTPUT_DIR'] ?? 'out/ts-prompts';

fs.mkdirSync(outputDir, { recursive: true });

const content = fs.readFileSync(markdownPath, 'utf8');

const tiers = [
  { name: 'tier1', range: [1, 5] },
  { name: 'tier2', range: [6, 10] },
  { name: 'tier3', range: [11, 14] },
  { name: 'tier4', range: [15, 19] },
  { name: 'tier5', range: [20, 22] },
  { name: 'tier6', range: [23, 25] },
  { name: 'tier7', range: [26, 28] },
  { name: 'tier8', range: [29, 30] },
];

function extractPrompts() {
  const sections = content.split('### PROMPT ').slice(1);
  return sections.map(section => {
    const lines = section.split('\n');
    const firstLine = lines[0]; // e.g. "01-A — Splash Screen"
    const [id, ...titleParts] = firstLine.split(' — ');
    const title = titleParts.join(' — ').trim();
    const agentId = parseInt(id.split('-')[0]);

    const codeBlockMatch = section.match(/```\n([\s\S]*?)\n```/);
    const fullPrompt = codeBlockMatch ? codeBlockMatch[1].trim() : '';

    return {
      id,
      agentId,
      title,
      prompt: fullPrompt,
    };
  });
}

const allPrompts = extractPrompts();

tiers.forEach(tier => {
  const tierPrompts = allPrompts.filter(p => p.agentId >= tier.range[0] && p.agentId <= tier.range[1]);
  
  const tsContent = `import type { ImageJob } from '../../config/types.js';

export const ${tier.name}: ImageJob[] = [
${tierPrompts.map(p => `  {
    id: '${brand}-${p.id}',
    category: brand,
    outputPath: `${brand}/${p.id}.webp',
    aspectRatio: '9:19',
    imageSize: '2K',
    priority: ${p.agentId},
    scene: {
      subject: \`${p.title}\`,
      fullPrompt: \`${p.prompt.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
    },
    mood: ['premium', 'nightlife', 'atlanta'],
  }`).join(',\n\n')}
];
`;

  fs.writeFileSync(path.join(outputDir, `${tier.name}.ts`), tsContent);
  console.log(`Generated ${tier.name}.ts with ${tierPrompts.length} prompts.`);
});
