import { ElectronAPI } from '@electron-toolkit/preload'
import { CompressOptions } from '@renderer/types'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      compress: (options: CompressOptions) => void
      selectDirectory: () => Promise<any>
      quitWindow: () => void
      // progressNotice: (callback: (progress: number) => void) => void
      mainProcessNotice: (callback: (type: MainProcessNoticeType, data: any) => void) => void
      stop: () => void
    }
  }
}
