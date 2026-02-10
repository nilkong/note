import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { resolveRelative, slugifyFilePath, FilePath } from "../util/path"

// ====================================================================
// 設定區：定義要顯示的欄位與 Icon
// ====================================================================
const OPTIONS: Record<string, { label: string; icon: any }> = {
  type: {
    label: "Type",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>
    ),
  },
  category: {
    label: "Category",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>
    ),
  },
  aliases: {
    label: "Aliases",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-forward"><polyline points="15 17 20 12 15 7"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/></svg>
    ),
  },
  source_link: {
    label: "Source Link",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    ),
  },
  tags: {
    label: "Tags",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l5 5a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-5-5z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>
    ),
  },
  author: {
    label: "Author",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
  },
  url: {
    label: "URL",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-left"><line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/></svg>
    ),
  },
}

const MetadataTable: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const fm = fileData.frontmatter
  if (!fm) return null

  // 過濾出存在的 Key
  const visibleKeys = Object.keys(OPTIONS).filter((key) => fm[key] !== undefined && fm[key] !== null)
  if (visibleKeys.length === 0) return null

  return (
    <div class={classNames(displayClass, "metadata-table")}>
      <div class="metadata-grid">
        {visibleKeys.map((key) => {
          const config = OPTIONS[key]
          const value = fm[key]

          return (
            <div class="metadata-row" key={key}>
              {/* 左側 Label */}
              <div class="metadata-key">
                <span class="metadata-icon">{config.icon}</span>
                <span class="metadata-label">{config.label}</span>
              </div>
              
              {/* 右側 Value (傳入 allFiles 以便搜尋連結) */}
              <div class="metadata-value">
                <ValueRenderer value={value} fileData={fileData} allFiles={allFiles} />
              </div>
            </div>
          )
        })}
      </div>

      <style>{`
        .metadata-table {
          margin: 1.5rem 0;
          font-family: var(--bodyFont);
          line-height: 1.6;
          border: none;
          background-color: transparent;
        }

        .metadata-grid {
          display: grid;
          /* 左側欄位寬度稍微加寬以容納長標籤，右側自適應 */
          grid-template-columns: 140px 1fr;
          gap: 0.5rem 1rem;
          align-items: baseline; /* 讓文字基線對齊 */
        }

        .metadata-row {
          display: contents;
        }

        .metadata-key {
          display: flex;
          align-items: center;
          gap: 8px;
          /* 使用與正文相同的顏色 */
          color: var(--darkgray);
          font-weight: 500;
          padding: 2px 0;
        }

        .metadata-icon {
          display: flex;
          align-items: center;
          color: var(--gray);
          width: 18px; /* 固定 Icon 寬度確保對齊 */
          justify-content: center;
        }

        .metadata-value {
          /* 內容顏色與正文完全一致 */
          color: var(--darkgray);
          padding: 2px 0;
          overflow-wrap: break-word;
          min-width: 0;
        }

        /* 連結樣式：與文中連結一致 */
        .metadata-value a {
          color: var(--secondary);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-bottom-color 0.2s ease;
        }
        
        .metadata-value a:hover {
          border-bottom-color: var(--secondary);
        }

        /* 內部連結的特殊標示 */
        .metadata-value a.internal {
          background-color: var(--highlight);
          padding: 0 0.2rem;
          border-radius: 4px;
        }

        /* 標籤 (Tags) 的樣式 */
        .metadata-pill {
          display: inline-block;
          background-color: var(--lightgray);
          color: var(--darkgray);
          padding: 2px 10px;
          border-radius: 12px;
          margin-right: 6px;
          transition: background-color 0.2s ease;
        }
        
        .metadata-pill:hover {
          background-color: var(--highlight);
        }

        @media (max-width: 600px) {
          .metadata-grid {
            grid-template-columns: 1fr;
            gap: 0.2rem;
          }
          .metadata-key {
            font-size: 0.9em;
            margin-top: 0.5rem;
            color: var(--gray);
          }
          .metadata-value {
            padding-left: 26px; /* 縮排以對齊 */
          }
        }
      `}</style>
    </div>
  )
}

// ----------------------------------------------------------------------
// 輔助函數：使用 Quartz4 的 wikilink 處理邏輯
// ----------------------------------------------------------------------

const ValueRenderer = ({ 
  value, 
  fileData, 
  allFiles 
}: { 
  value: any, 
  fileData: QuartzComponentProps['fileData'],
  allFiles: QuartzComponentProps['allFiles']
}) => {
  const strValue = String(value)

  // 1. 處理陣列 (Tags/Aliases)
  if (Array.isArray(value)) {
    return (
      <>
        {value.map((item, idx) => (
          <span key={idx} className="metadata-pill">
            {String(item)}
          </span>
        ))}
      </>
    )
  }

  // 2. 處理 WikiLink: [[Note Name]] 或 [[Note Name|Alias]]
  // 使用與 Quartz4 ofm.ts 相同的處理邏輯
  const wikilinkMatch = strValue.match(/^\[\[(.*?)\]\]$/)
  if (wikilinkMatch) {
    let rawContent = wikilinkMatch[1]
    let fp = rawContent
    let alias = rawContent
    
    // 處理 Alias: [[Target|Alias]]
    if (rawContent.includes("|")) {
      const parts = rawContent.split("|")
      fp = parts[0].trim()
      alias = parts[1].trim()
    }

    // 處理 Anchor: [[Target#heading]]
    let anchor = ""
    if (fp.includes("#")) {
      const [base, ...rest] = fp.split("#")
      fp = base
      anchor = "#" + rest.join("#")
    }

    // 在 allFiles 中搜尋匹配的檔案以獲取完整路徑
    // Quartz 會將檔名轉換為 slug，所以需要比對 slug 的檔名部分
    let targetSlug = slugifyFilePath(fp as FilePath)
    
    if (allFiles && allFiles.length > 0) {
      const targetSlugLower = targetSlug.toLowerCase()
      
      // 搜尋策略：尋找 slug 結尾匹配的檔案
      const foundFile = allFiles.find(f => {
        if (!f.slug) return false
        const fSlug = f.slug.toLowerCase()
        
        // 1. 完全匹配
        if (fSlug === targetSlugLower) return true
        
        // 2. 結尾匹配 (處理子目錄情況)
        // 例如: "DL4CV/notes/file-name" 應該匹配 "file-name"
        if (fSlug.endsWith(`/${targetSlugLower}`)) return true
        
        return false
      })

      if (foundFile && foundFile.slug) {
        targetSlug = foundFile.slug
      }
    }

    // 計算相對路徑
    const currentSlug = fileData.slug!
    const href = resolveRelative(currentSlug, (targetSlug + anchor) as any)

    return (
      <a href={href} class="internal">
        {alias}
      </a>
    )
  }

  // 3. 處理一般網址 (URL)
  if (strValue.startsWith("http") || strValue.startsWith("www")) {
    return (
      <a href={strValue} target="_blank" rel="noopener noreferrer">
        {strValue}
      </a>
    )
  }
  
  // 4. 一般文字
  return <span>{strValue}</span>
}

export default (() => MetadataTable) satisfies QuartzComponentConstructor