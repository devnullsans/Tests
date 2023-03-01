const fsp = require('fs/promises');
const path = require('path');
const Route = process.argv[2] ?? process.env?.SCAN ?? process.cwd();
const Data = {};
load(Route).then(() => fsp.writeFile('dirlisting.json', JSON.stringify(Data, null, 2), 'utf-8')).then(console.log);
async function load(directory) {
	const dir = await fsp.stat(directory, { throwIfNoEntry: true });
	if (dir.isDirectory()) {
		const dirents = await fsp.readdir(directory, { withFileTypes: true });
		Data[directory.replace(/[\/\\]/g, '>')] = dirents.filter(ent => ent.isFile()).map(ent => ent.name);
		for (const dir of dirents.filter(ent => ent.isDirectory())) await load(path.join(directory, dir.name));
	}
}
