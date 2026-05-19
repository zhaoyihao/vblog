export type PublishForm = {
	slug: string
	title: string
	md: string
	tags: string[]
	date: string
	summary: string
	hidden?: boolean
	badge?: string
	category?: string
	categories: string[]
	fileFormat: 'md' | 'mdx'
	coverImage?: string
}

export type ImageItem = { id: string; type: 'url'; url: string } | { id: string; type: 'file'; file: File; previewUrl: string; filename: string; hash?: string }
