import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const filePath = join(process.cwd(), 'src/app/documents', `${slug}.mdx`);
        const fileContent = readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        const fileName = `${data.title?.replace(/[^a-z0-9]/gi, '_').toLowerCase() || slug}.md`;
        
        return new NextResponse(content, {
            headers: {
                'Content-Type': 'text/markdown',
                'Content-Disposition': `attachment; filename="${fileName}"`,
            },
        });
    } catch (error) {
        return new NextResponse('Document not found', { status: 404 });
    }
}