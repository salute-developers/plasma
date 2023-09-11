import { NextRequest, NextResponse } from 'next/server';
import { getTheme, saveTheme } from '../../../data';

export async function POST(request: NextRequest) {
    const data = await request.json();
    if (!data.name) {
        return NextResponse.json({
            status: 'error',
        });
    }

    const theme = await getTheme(data.name);

    theme.value = data;

    await saveTheme(theme);

    console.log();
    console.log('='.repeat(10));
    console.log('name: ', theme.name);
    console.log('THEME SAVED!!!!');
    console.log('='.repeat(10));
    console.log();
    console.log();

    return NextResponse.json({
        status: 'succes',
    });
}
