import { transactionChunkSize } from "./constants";


export const animationDelayOrchestrator = () => {
    const maxIdx = transactionChunkSize - 1
    let currentIdx = 0

    const getIdx = () => {
        if (currentIdx > maxIdx) {
            currentIdx = 0
            return currentIdx
        }
        return currentIdx++
    }
    return getIdx
}