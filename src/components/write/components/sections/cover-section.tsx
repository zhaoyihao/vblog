'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { toast } from 'sonner'
import { useWriteStore } from '../../stores/write-store'

type CoverSectionProps = {
	delay?: number
}

export function CoverSection({ delay = 0 }: CoverSectionProps) {
	const { images, setCover, cover, addFiles, updateForm, form } = useWriteStore()
	const fileInputRef = useRef<HTMLInputElement>(null)
    const [urlInput, setUrlInput] = useState('')

	const coverPreviewUrl = form.coverImage
		? form.coverImage
		: cover
		? cover.type === 'url'
			? cover.url
			: cover.previewUrl
		: null

    const handleUrlSubmit = () => {
        if (!urlInput.trim()) return
        const url = urlInput.trim()
		updateForm({ coverImage: url })
       // setUrlInput('')   👈👈👈👈👈👈👈👈👈👈 这样就不会清空输入框
        toast.success('已设置封面')
    }

	const handleCoverDrop = async (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()

		// 处理从图片列表中拖入的情况
		const md = e.dataTransfer.getData('text/markdown') || e.dataTransfer.getData('text/plain') || ''
		const m = /!\[\]\(([^)]+)\)/.exec(md.trim())
		if (m) {
			const target = m[1]
			let foundItem

			if (target.startsWith('local-image:')) {
				const id = target.replace(/^local-image:/, '')
				foundItem = images.find(it => it.id === id)
			} else {
				foundItem = images.find(it => it.type === 'url' && it.url === target)
			}

			if (foundItem) {
				const url = foundItem.type === 'url' ? foundItem.url : foundItem.previewUrl
				updateForm({ coverImage: url })
				toast.success('已设置封面')
				return
			}
		}

		// 处理直接拖入文件的情况
		const files = e.dataTransfer.files
		if (files && files.length > 0) {
			const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'))
			if (imageFiles.length === 0) {
				toast.error('请拖入图片文件')
				return
			}

			const resultImages = await addFiles(imageFiles as unknown as FileList)
			if (resultImages && resultImages.length > 0) {
				// 使用第一个图片作为封面
				const first = resultImages[0]
				const url = first.type === 'url' ? first.url : first.previewUrl
				updateForm({ coverImage: url })
				toast.success('已设置封面')
			}
			return
		}
	}

	const handleClickUpload = () => {
		fileInputRef.current?.click()
	}

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files || files.length === 0) return

		const resultImages = await addFiles(files)
		if (resultImages && resultImages.length > 0) {
			// 使用第一个图片作为封面
			const first = resultImages[0]
			const url = first.type === 'url' ? first.url : first.previewUrl
			updateForm({ coverImage: url })
			toast.success('已设置封面')
		}

		// 重置 input 以便可以选择相同的文件
		e.target.value = ''
	}

	return (
		<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay }} className='card bg-base-100 border border-base-200 shadow-sm p-4 relative'>
			<div className="flex items-center justify-between mb-3">
                <h2 className='text-sm font-bold text-primary'>封面</h2>
            </div>

			<input ref={fileInputRef} type='file' accept='image/*' className='hidden' onChange={handleFileChange} />
			<div
				className='bg-base-100 h-[150px] overflow-hidden rounded-xl border border-base-200 border-dashed hover:border-primary/50 transition-colors relative'
				onDragOver={e => {
					e.preventDefault()
				}}
				onDrop={handleCoverDrop}>
				{!!coverPreviewUrl ? (
					<div className="relative h-full w-full">
						<img src={coverPreviewUrl} alt="cover preview" className="h-full w-full rounded-xl object-cover" />
						<div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 hover:opacity-100 transition-opacity rounded-xl">
							<button
								type="button"
								onClick={handleClickUpload}
								className="btn btn-sm btn-primary rounded-lg"
							>
								更换
							</button>
							<button
								type="button"
								onClick={() => {
									updateForm({ coverImage: '' })
									setCover(null)
								}}
								className="btn btn-sm btn-error rounded-lg"
							>
								删除
							</button>
						</div>
					</div>
				) : (
					<div className='grid h-full w-full cursor-pointer place-items-center transition-colors hover:bg-base-200/50' onClick={handleClickUpload}>
						<span className='text-3xl leading-none text-base-content/20'>+</span>
					</div>
				)}
			</div>
            
            <div className="flex gap-2 mt-3">
                <input 
                    type="text" 
                    className="input input-sm input-bordered w-full text-xs" 
                    placeholder="输入图片 URL"
					value={urlInput || form.coverImage}
                    //  value={urlInput}
                    onChange={e => setUrlInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleUrlSubmit()}
                />
                <button className="btn btn-sm btn-primary btn-square" onClick={handleUrlSubmit}>
                    <span className="text-xs">OK</span>
                </button>
            </div>
		</motion.div>
	)
}
