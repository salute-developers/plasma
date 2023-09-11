import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs-extra';

// TODO: local fs vc github API
const PLASMA_DIR = process.env.PLASMA_DIR;
console.log('PLASMA_DIR', PLASMA_DIR);
const PLASMA_REPO = process.env.PLASMA_REPO;

export async function GET(request: NextRequest) {
    if (!PLASMA_DIR) {
        return NextResponse.json({
            components: [],
        });
    }

    const plasmaNewHopePath = path.join(PLASMA_DIR, 'packages/plasma-new-hope');
    const componentsDir = path.join(plasmaNewHopePath, 'src/components');
    const components = await fs.readdir(componentsDir);

    return NextResponse.json({
        components,
    });
}
